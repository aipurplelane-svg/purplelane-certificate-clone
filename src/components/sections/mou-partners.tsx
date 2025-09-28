import { ArrowUpRight } from "lucide-react";

// Section: PurpleLane MOU's With Top Colleges In AP
// Matches the attached reference with a bold heading and 2x2 responsive grid of rich cards
// Note: Using color blocks instead of photos since no assets were provided

export const MouPartners = () => {
  const items = [
    {
      title: "MOU With",
      partner: "SASI Institute of Technology & Engineering",
      theme: "from-neutral-900 to-neutral-800",
      badge: "SASI AUTONOMOUS",
    },
    {
      title: "MOU With",
      partner: "Aditya University",
      theme: "from-indigo-700 to-blue-700",
      badge: "ADITYA UNIVERSITY",
    },
    {
      title: "MOU With",
      partner: "Vishnu Universal Learning",
      theme: "from-slate-600 to-slate-700",
      badge: "VISHNU",
    },
    {
      title: "MOU With",
      partner: "SRKR Engineering College",
      theme: "from-red-700 to-rose-700",
      badge: "SRKR",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center">
          PurpleLane <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">MOU's</span> With Top Colleges In AP
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {items.map((card, idx) => (
            <article
              key={idx}
              className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-lg border border-neutral-200"
            >
              <div className={`relative isolate p-6 md:p-8 lg:p-10 min-h-[220px] md:min-h-[240px] rounded-2xl md:rounded-3xl bg-gradient-to-br ${card.theme}`}>
                {/* Soft vignette */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.15),transparent_60%)]" />

                <div className="relative flex flex-col h-full text-white">
                  <div className="text-3xl md:text-4xl font-extrabold">MOU</div>
                  <div className="mt-1 text-white/80 text-lg">With</div>

                  {/* Partner badge */}
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm ring-1 ring-white/20 w-max">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="text-sm font-semibold tracking-wide">{card.badge}</span>
                  </div>

                  {/* Partner name */}
                  <div className="mt-auto">
                    <p className="text-base md:text-lg font-semibold leading-snug text-white/95">
                      {card.partner}
                    </p>

                    <a
                      href="#"
                      className="group mt-3 inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white"
                    >
                      Know More
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MouPartners;