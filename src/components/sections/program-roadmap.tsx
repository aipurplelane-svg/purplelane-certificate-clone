"use client";

import React from "react";

const ProgramRoadmap = () => {
  const steps = [
    {
      badge: "UI/UX",
      title: "UI/UX Fundamentals",
      desc: "Master the basics of user interface and experience design principles.",
    },
    {
      badge: "Research",
      title: "Research & Analysis",
      desc: "Conduct user research, analysis, and master user needs discovery.",
    },
    {
      badge: "Visual",
      title: "Visual Design Principles",
      desc: "Explore hierarchy, balance, contrast, typography, spacing, and composition.",
    },
    {
      badge: "UI Elements",
      title: "UI Elements & Patterns",
      desc: "Learn components, patterns, and reusable interface conventions for scalability.",
    },
    {
      badge: "Brainstorm",
      title: "Brainstorming & Ideation",
      desc: "Generate solution ideas with structured ideation frameworks.",
    },
    {
      badge: "Wireframe",
      title: "Wireframing",
      desc: "Translate ideas into low-fidelity structures that define information flow.",
    },
    {
      badge: "Prototype",
      title: "Prototyping",
      desc: "Build interactive prototypes to validate flows and interactions.",
    },
    {
      badge: "Testing",
      title: "Usability Testing",
      desc: "Iterate based on real user feedback to improve clarity and usability.",
    },
    {
      badge: "Design System",
      title: "Design Systems",
      desc: "Create tokens, components, and documentation for consistent delivery.",
    },
    {
      badge: "Portfolio",
      title: "Portfolio Building",
      desc: "Craft case studies that highlight process, decisions, and outcomes.",
    },
    {
      badge: "Interview",
      title: "Interview Prep",
      desc: "Prepare for whiteboard challenges, critiques, and product thinking.",
    },
    {
      badge: "Placement",
      title: "Placement Assistance",
      desc: "Get guidance on applications, referrals, and negotiations.",
    },
    {
      badge: "Dream Job",
      title: "Land Your Dream Job",
      desc: "Show up with confidence and a portfolio that speaks for itself.",
    },
  ];
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-center mb-4 text-4xl font-bold bg-gradient-to-r from-[#7c3aed] to-[#f97316] bg-clip-text text-transparent">
          About Visual & UI/UX Mastery
        </h2>
        <p className="text-center text-lg text-[var(--color-neutral-gray)] max-w-3xl mx-auto mb-14">
          A Proven Program to mold you into a designer. Supported by Multiple Job Tracks & Personalized guidance for Securing placements.
        </p>

        <div className="relative max-w-3xl mx-auto">
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-[#7c3aed]/30" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="relative mx-auto w-full max-w-2xl rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-[#7c3aed]/10">
                  <div className="p-6 sm:p-7 flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#7c3aed] via-[#a855f7] to-[#f97316] flex items-center justify-center shadow-md">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <h4 className="text-2xl font-semibold text-[var(--color-text-dark)] mb-1">{step.title}</h4>
                      <p className="text-[15px] leading-relaxed text-[var(--color-neutral-gray)]">{step.desc}</p>
                    </div>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="flex flex-col items-center mt-6">
                    <div className="w-px h-10 bg-[#7c3aed]/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramRoadmap;