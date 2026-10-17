export default function Marquee() {
  const items = [
    "Web Development",
    "React & Next.js",
    "Full Stack Apps",
    "REST APIs",
    "TypeScript",
    "UI/UX Design",
    "Cloud & DevOps",
    "Mobile Apps",
  ];

  return (
    <div className="w-full bg-slate-dark py-4 overflow-hidden mt-0">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Duplicate items for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="text-white text-sm md:text-base font-semibold tracking-wide px-6 md:px-10">
              {item}
            </span>
            <svg
              className="w-4 h-4 text-white shrink-0 mx-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
