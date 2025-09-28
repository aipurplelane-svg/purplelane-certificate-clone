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
        <h2 className="text-center mb-6 text-4xl font-bold text-[var(--color-text-dark)]">
          About Visual & UI/UX Mastery
        </h2>
        <p className="text-center text-lg text-[var(--color-neutral-gray)] max-w-3xl mx-auto mb-12">
          A Proven Program to mold you into a designer. Supported by Multiple Job Tracks & Personalized guidance for Securing placements.
        </p>
        <div className="relative max-w-3xl mx-auto space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center gap-6 relative">
              <div className="flex-shrink-0 w-16 h-16 bg-[var(--color-primary-purple)] rounded-full flex items-center justify-center shadow-lg z-10">
                <span className="text-sm font-semibold text-white text-center">{step.badge}</span>
              </div>
              <div className="w-full max-w-md p-6 bg-[var(--color-background-light)] rounded-xl border border-[var(--color-border)] shadow-sm text-center">
                <h4 className="text-lg font-semibold text-[var(--color-primary-purple)] mb-2">{step.title}</h4>
                <p className="text-sm text-[var(--color-text-dark)]/80 leading-relaxed">{step.desc}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="flex flex-col items-center gap-2">
                  <div className="w-0.5 h-12 bg-[var(--color-primary-purple)]"></div>
                  <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-[var(--color-primary-purple)] rotate-180"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramRoadmap;