import { NextRequest, NextResponse } from "next/server";

// Timezone mapping from UI options to standard IANA timezone identifiers
const TIMEZONE_MAP: Record<string, string> = {
  "GMT+5 (PKT)": "Asia/Karachi",
  "GMT-5 (EST)": "America/New_York",
  "GMT-8 (PST)": "America/Los_Angeles",
  "GMT+0 (UTC)": "UTC",
  "GMT+1 (CET)": "Europe/Paris",
  "Asia/Karachi": "Asia/Karachi",
  "America/New_York": "America/New_York",
  "America/Los_Angeles": "America/Los_Angeles",
  "UTC": "UTC",
  "Europe/Paris": "Europe/Paris",
};

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const date = searchParams.get("date"); // YYYY-MM-DD
    const tzParam = searchParams.get("timezone") || "Asia/Karachi";
    const ianaTz = TIMEZONE_MAP[tzParam] || tzParam || "Asia/Karachi";

    if (!date) {
      return NextResponse.json(
        { error: "Missing required 'date' parameter (YYYY-MM-DD)", slots: [] },
        { status: 400 }
      );
    }

    const apiKey = process.env.CAL_API_KEY;
    const eventTypeId = process.env.CAL_EVENT_TYPE_ID || "7152306";

    if (!apiKey) {
      console.warn("CAL_API_KEY is not defined in environment.");
      return NextResponse.json(
        { error: "Cal.com API key not configured", slots: [] },
        { status: 500 }
      );
    }

    // Query Cal.com API v2 slots endpoint
    const url = new URL("https://api.cal.com/v2/slots");
    url.searchParams.set("eventTypeId", eventTypeId);
    url.searchParams.set("start", date);
    url.searchParams.set("end", date);
    url.searchParams.set("timeZone", ianaTz);

    const res = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "cal-api-version": "2024-09-04",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Cal.com API error:", res.status, errorText);
      return NextResponse.json(
        { error: `Cal.com API error: ${res.status}`, slots: [] },
        { status: res.status }
      );
    }

    const json = await res.json();
    const rawSlots: Array<{ start: string }> = json?.data?.[date] || [];

    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: ianaTz,
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const slotMap: Record<string, string> = {};
    const formattedSlots: string[] = [];

    for (const slot of rawSlots) {
      const dateObj = new Date(slot.start);
      const formattedTime = formatter.format(dateObj);
      if (!slotMap[formattedTime]) {
        // Store standard ISO string for Cal.com ?slot= param
        slotMap[formattedTime] = dateObj.toISOString();
        formattedSlots.push(formattedTime);
      }
    }

    return NextResponse.json({
      status: "success",
      date,
      timeZone: ianaTz,
      slots: formattedSlots,
      slotMap,
      count: formattedSlots.length,
    });
  } catch (error) {
    console.error("Internal error fetching slots:", error);
    return NextResponse.json(
      { error: "Internal server error fetching Cal.com slots", slots: [] },
      { status: 500 }
    );
  }
}
