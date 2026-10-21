"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Play } from "lucide-react";
import { websiteContent } from "@/content/websiteContent";

interface IntroVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IntroVideoModal({ isOpen, onClose }: IntroVideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoData = websiteContent.about.video;
  const videoSrc = (videoData as unknown as { videoUrl?: string }).videoUrl || videoData.embedUrl || "/video/intro.mp4";

  // Stop video when modal closes
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8">
          {/* Backdrop with cinematic blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container — tailored to vertical portrait format */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative z-10 w-full max-w-md bg-slate-950 border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-white/10 bg-slate-900/60 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-white uppercase truncate">
                  {videoData.tag || "HUZAIFA'S STORY • 1-MIN INTRO"}
                </span>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white text-[11px] font-mono font-semibold transition-colors cursor-pointer select-none shrink-0"
                aria-label="Close modal"
              >
                <span>Close</span>
                <X className="w-3 h-3" />
              </button>
            </div>

            {/* Video Player — Portrait 9:16 aspect ratio perfectly framing vertical video */}
            <div className="relative w-full aspect-[9/16] max-h-[72vh] bg-black flex items-center justify-center overflow-hidden">
              <video
                ref={videoRef}
                src={videoSrc}
                controls
                autoPlay
                playsInline
                preload="auto"
                className="w-full h-full object-cover bg-black"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Footer bar with caption */}
            <div className="px-4 py-2.5 bg-slate-900/80 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2 min-w-0">
                <Play className="w-3 h-3 text-primary fill-primary shrink-0" />
                <span className="text-slate-200 font-sans font-medium text-xs truncate">
                  {videoData.subtitle || "The journey, philosophy & the human behind the code"}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
