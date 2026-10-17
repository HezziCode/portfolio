"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import {
  Clock,
  Video,
  ShieldCheck,
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
  Check,
  Globe2,
} from "lucide-react";
import { websiteContent } from "@/content/websiteContent";

interface CalBookingSectionProps {
  showAnchor?: boolean;
  className?: string;
}

export default function CalBookingSection({
  showAnchor = true,
  className = "",
}: CalBookingSectionProps) {
  const { contactPage } = websiteContent;

  // Calendar State
  const today = useMemo(() => new Date(), []);
  const [currentMonthDate, setCurrentMonthDate] = useState<Date>(() => new Date());

  // Default selected date: tomorrow
  const [selectedDate, setSelectedDate] = useState<Date>(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d;
  });

  const [selectedTime, setSelectedTime] = useState<string>("03:00 PM");
  const [selectedTimezone, setSelectedTimezone] = useState<string>("GMT+5 (PKT)");

  // Live slots state synced with Cal.com API
  const [liveSlots, setLiveSlots] = useState<string[]>([]);
  const [slotMap, setSlotMap] = useState<Record<string, string>>({});
  const [isLoadingSlots, setIsLoadingSlots] = useState<boolean>(true);
  const [isLiveConnected, setIsLiveConnected] = useState<boolean>(false);

  // Timezone slot presets fallback
  const timeSlotsByTz: Record<string, string[]> = {
    "GMT+5 (PKT)": ["01:30 PM", "02:45 PM", "04:00 PM", "05:30 PM", "07:00 PM", "08:15 PM"],
    "GMT-5 (EST)": ["08:30 AM", "09:15 AM", "10:00 AM", "10:45 AM", "11:30 AM", "12:00 PM"],
    "GMT-8 (PST)": ["06:30 AM", "07:15 AM", "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM"],
    "GMT+0 (UTC)": ["08:30 AM", "09:45 AM", "11:00 AM", "12:30 PM", "02:00 PM", "03:15 PM"],
    "GMT+1 (CET)": ["09:30 AM", "10:45 AM", "12:00 PM", "01:30 PM", "03:00 PM", "04:15 PM"],
  };

  const dateParam = useMemo(() => {
    const y = selectedDate.getFullYear();
    const m = String(selectedDate.getMonth() + 1).padStart(2, "0");
    const d = String(selectedDate.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }, [selectedDate]);

  // Dynamically sync slots from Cal.com when selected date or timezone changes
  useEffect(() => {
    let isCancelled = false;
    setIsLoadingSlots(true);

    fetch(`/api/cal/slots?date=${dateParam}&timezone=${encodeURIComponent(selectedTimezone)}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (isCancelled) return;
        if (data?.slots && Array.isArray(data.slots)) {
          setLiveSlots(data.slots);
          setSlotMap(data.slotMap || {});
          setIsLiveConnected(true);
          setSelectedTime((prev) => (data.slots.includes(prev) ? prev : data.slots[0] || ""));
        } else {
          setLiveSlots([]);
          setSlotMap({});
        }
      })
      .catch((err) => {
        if (isCancelled) return;
        console.warn("Could not fetch live slots, falling back to preset:", err);
        const fallback = timeSlotsByTz[selectedTimezone] || timeSlotsByTz["GMT+5 (PKT)"];
        setLiveSlots(fallback);
        setSlotMap({});
        setIsLiveConnected(false);
        setSelectedTime((prev) => (fallback.includes(prev) ? prev : fallback[0] || ""));
      })
      .finally(() => {
        if (!isCancelled) setIsLoadingSlots(false);
      });

    return () => {
      isCancelled = true;
    };
  }, [dateParam, selectedTimezone]);

  // Month navigation helpers
  const prevMonth = () => {
    setCurrentMonthDate(
      new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonthDate(
      new Date(currentMonthDate.getFullYear(), currentMonthDate.getMonth() + 1, 1)
    );
  };

  // Generate calendar days for current month
  const calendarDays = useMemo(() => {
    const year = currentMonthDate.getFullYear();
    const month = currentMonthDate.getMonth();

    const firstDayIndex = new Date(year, month, 1).getDay(); // 0 = Sun, 1 = Mon...
    const adjustedFirstDay = (firstDayIndex + 6) % 7; // Monday = 0
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days: Array<{
      dayNumber: number;
      date: Date;
      isCurrentMonth: boolean;
      isPast: boolean;
      isSelected: boolean;
    }> = [];

    // Empty cells before first day
    for (let i = 0; i < adjustedFirstDay; i++) {
      days.push({
        dayNumber: 0,
        date: new Date(year, month, 0),
        isCurrentMonth: false,
        isPast: true,
        isSelected: false,
      });
    }

    const currentStartOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    for (let day = 1; day <= daysInMonth; day++) {
      const dateObj = new Date(year, month, day);
      const isPast = dateObj < currentStartOfToday;
      const isSelected =
        selectedDate.getFullYear() === year &&
        selectedDate.getMonth() === month &&
        selectedDate.getDate() === day;

      days.push({
        dayNumber: day,
        date: dateObj,
        isCurrentMonth: true,
        isPast,
        isSelected,
      });
    }

    return days;
  }, [currentMonthDate, selectedDate, today]);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const monthTitle = `${monthNames[currentMonthDate.getMonth()]} ${currentMonthDate.getFullYear()}`;

  const formattedSelectedDate = useMemo(() => {
    const d = selectedDate.getDate();
    const m = monthNames[selectedDate.getMonth()];
    return `${d} ${m}`;
  }, [selectedDate]);

  const handleConfirm = () => {
    const calBase = contactPage.calLink || "https://cal.com/huzaifasys/30min";
    const slotIso = slotMap[selectedTime];

    let targetUrl: string;
    if (slotIso) {
      // Direct jump to booking confirmation form with selected slot
      targetUrl = `${calBase}?overlayCalendar=true&slot=${encodeURIComponent(slotIso)}`;
    } else {
      // Fallback to pre-selected date
      targetUrl = `${calBase}?overlayCalendar=true&date=${dateParam}`;
    }

    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id={showAnchor ? "schedule" : undefined} className={`scroll-mt-20 sm:scroll-mt-24 py-12 md:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* ══════════════════════════════════════════════
            HEADER (Modern Style 2 Engineering Index)
            ══════════════════════════════════════════════ */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="flex items-center gap-2 text-xs font-mono mb-4 select-none">
            <span className="font-bold text-primary bg-blue-100/80 border border-blue-200 px-2 py-0.5 rounded text-[11px]">
              [1:1 CALL]
            </span>
            <span className="text-blue-300 font-normal">/</span>
            <span className="text-blue-700 uppercase tracking-widest text-[11px] font-semibold">
              FREE 30-MINUTE STRATEGY SESSION
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-dark tracking-tight leading-[1.1] mb-4">
            Book a 1-on-1 Strategy Call.
          </h2>

          <p className="text-slate-mid text-sm sm:text-base leading-relaxed max-w-2xl">
            Talk directly with me — no sales reps, no scripted pitches. In 30 minutes, we&apos;ll discuss your vision, review technical feasibility, and map out the exact plan to build your system.
          </p>
        </div>

        {/* ══════════════════════════════════════════════
            MAIN 2-COLUMN STUDIO LAYOUT
            ══════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

          {/* ──────────────────────────────────────────
              LEFT COLUMN: Technical Scope & Agenda
              ────────────────────────────────────────── */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Top Container: 3 Focused Scope Cards */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
                <span className="text-xs font-mono font-bold text-slate-dark uppercase tracking-wider">
                  What We&apos;ll Cover on the Call
                </span>
                <span className="text-xs font-mono text-slate-500">
                  30 Minutes Total
                </span>
              </div>

              {/* Scope Card 01 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-slate-100 text-slate-900 font-mono text-xs font-bold flex items-center justify-center">
                      01
                    </span>
                    <h3 className="text-sm font-bold text-slate-dark">
                      Your Idea &amp; What You Need
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-blue-50 text-primary border border-blue-100">
                    10 min
                  </span>
                </div>
                <p className="text-xs text-slate-mid leading-relaxed mb-3">
                  We talk about what you want to build, what you already have in place, and the main challenges you want to solve.
                </p>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-600">
                    #YourIdea
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-600">
                    #ProjectGoals
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-600">
                    #Challenges
                  </span>
                </div>
              </div>

              {/* Scope Card 02 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-slate-100 text-slate-900 font-mono text-xs font-bold flex items-center justify-center">
                      02
                    </span>
                    <h3 className="text-sm font-bold text-slate-dark">
                      How I&apos;ll Build Your Solution
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-blue-50 text-primary border border-blue-100">
                    15 min
                  </span>
                </div>
                <p className="text-xs text-slate-mid leading-relaxed mb-3">
                  I&apos;ll explain simply how we bring it to life — whether that&apos;s smart AI features, a fast modern web app, or automated workflows.
                </p>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-600">
                    #SmartAI
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-600">
                    #FastWebApp
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-600">
                    #Automation
                  </span>
                </div>
              </div>

              {/* Scope Card 03 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-slate-100 text-slate-900 font-mono text-xs font-bold flex items-center justify-center">
                      03
                    </span>
                    <h3 className="text-sm font-bold text-slate-dark">
                      Timeline, Costs &amp; Next Steps
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-blue-50 text-primary border border-blue-100">
                    5 min
                  </span>
                </div>
                <p className="text-xs text-slate-mid leading-relaxed mb-3">
                  You get a clear estimate of timelines, costs, and immediate next steps — with 100% honesty and zero sales pressure.
                </p>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-600">
                    #ClearTimeline
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-600">
                    #TransparentCost
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-600">
                    #ZeroPressure
                  </span>
                </div>
              </div>
            </div>

            {/* Engineer Direct Guarantee Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-slate-200 bg-slate-100">
                <Image
                  src="/about-real.jpg"
                  alt="Huzaifa Sys"
                  fill
                  className="object-cover object-top"
                />
                <span className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-blue-600 border-2 border-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-slate-dark truncate">
                    Direct 1:1 with Huzaifa
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-blue-50 text-primary font-semibold border border-blue-200/60">
                    LEAD
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">
                  You talk directly with me — the engineer writing your code. If an existing open-source tool solves it faster, I&apos;ll tell you up front.
                </p>
              </div>
            </div>

          </div>

          {/* ──────────────────────────────────────────
              RIGHT COLUMN: Interactive Calendar & Slot Console
              ────────────────────────────────────────── */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between h-full">
              
              <div>
                {/* Header & Timezone Selector */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-100">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-dark tracking-tight">
                      Pick Date &amp; Preferred Time
                    </h3>
                    <p className="text-xs text-slate-mid mt-0.5">
                      30-minute slot • Instant Google Meet link generated
                    </p>
                  </div>

                  {/* Timezone pill dropdown */}
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 self-start sm:self-auto">
                    <Globe2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <select
                      value={selectedTimezone}
                      onChange={(e) => setSelectedTimezone(e.target.value)}
                      className="text-xs font-mono font-medium bg-transparent text-slate-700 focus:outline-none cursor-pointer"
                    >
                      <option value="GMT+5 (PKT)">PKT (UTC+5)</option>
                      <option value="GMT-5 (EST)">EST (UTC-5)</option>
                      <option value="GMT-8 (PST)">PST (UTC-8)</option>
                      <option value="GMT+0 (UTC)">UTC (+0)</option>
                      <option value="GMT+1 (CET)">CET (UTC+1)</option>
                    </select>
                  </div>
                </div>

                {/* Calendar Navigation & Grid */}
                <div className="mb-7">
                  {/* Month Switcher */}
                  <div className="flex items-center justify-between mb-4">
                    <button
                      type="button"
                      onClick={prevMonth}
                      aria-label="Previous month"
                      className="p-2 rounded-xl hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer border border-transparent hover:border-slate-200"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    <span className="text-sm font-bold text-slate-dark font-mono">
                      {monthTitle}
                    </span>

                    <button
                      type="button"
                      onClick={nextMonth}
                      aria-label="Next month"
                      className="p-2 rounded-xl hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer border border-transparent hover:border-slate-200"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Weekday Labels */}
                  <div className="grid grid-cols-7 gap-1.5 text-center mb-2">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                      <span
                        key={day}
                        className="text-[11px] font-mono font-semibold text-slate-400 py-1"
                      >
                        {day}
                      </span>
                    ))}
                  </div>

                  {/* Days Matrix */}
                  <div className="grid grid-cols-7 gap-1.5 text-center">
                    {calendarDays.map((item, idx) => {
                      if (!item.isCurrentMonth) {
                        return <div key={`empty-${idx}`} className="h-9" />;
                      }

                      return (
                        <button
                          key={`day-${item.dayNumber}`}
                          type="button"
                          disabled={item.isPast}
                          onClick={() => setSelectedDate(item.date)}
                          className={`h-9 rounded-xl text-xs font-medium transition-all flex items-center justify-center ${
                            item.isSelected
                              ? "bg-slate-dark text-white font-bold shadow-xs scale-105"
                              : item.isPast
                              ? "text-slate-300 cursor-not-allowed"
                              : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 cursor-pointer font-semibold"
                          }`}
                        >
                          {item.dayNumber}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Available Slots Grid */}
                <div className="pt-5 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-dark flex items-center gap-2">
                      Available Slots for {formattedSelectedDate}
                      {isLiveConnected && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono font-normal text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Live Sync
                        </span>
                      )}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {isLoadingSlots ? "Syncing..." : `${liveSlots.length} available`}
                    </span>
                  </div>

                  {/* Loading skeleton */}
                  {isLoadingSlots ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                          key={i}
                          className="py-3 px-3 rounded-xl bg-slate-100/80 border border-slate-200/60 animate-pulse text-transparent text-xs font-mono text-center select-none"
                        >
                          --:-- --
                        </div>
                      ))}
                    </div>
                  ) : liveSlots.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-56 overflow-y-auto pr-1">
                      {liveSlots.map((slot) => {
                        const isSlotSelected = selectedTime === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTime(slot)}
                            className={`py-2.5 px-3 rounded-xl text-xs font-mono font-semibold transition-all border text-center cursor-pointer ${
                              isSlotSelected
                                ? "bg-primary text-white border-primary shadow-xs"
                                : "bg-slate-50/60 border-slate-200/80 text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="py-6 px-4 rounded-xl bg-slate-50 border border-slate-200/70 text-center">
                      <p className="text-xs text-slate-600 font-medium mb-1">
                        No open slots for this date in your selected timezone.
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Pick another date on the calendar, or click below to view full availability on Cal.com.
                      </p>
                    </div>
                  )}
                </div>

              </div>

              {/* Bottom Confirmation Action */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleConfirm}
                  disabled={isLoadingSlots}
                  className="w-full py-4 px-6 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 group cursor-pointer disabled:opacity-80"
                >
                  <span>
                    {selectedTime
                      ? `Confirm 1:1 Call — ${formattedSelectedDate}, ${selectedTime}`
                      : `View Available Slots on Cal.com`}
                  </span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <div className="mt-3 flex items-center justify-center gap-4 text-[11px] text-slate-500 font-mono">
                  <span>✓ 100% Free</span>
                  <span>•</span>
                  <span>✓ Auto Google Meet</span>
                  <span>•</span>
                  <a
                    href={contactPage.calLink}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-slate-800 underline underline-offset-2 transition-colors"
                  >
                    Open in Cal.com ↗
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
