"use client";

import React from "react";

const ProgramRoadmap = () => {
  const steps = [
    {
      num: 1,
      title: "UI/UX Fundamentals",
      desc: "Understand core concepts, processes, and terminology that underpin great product design.",
    },
    {
      num: 2,
      title: "Visual Design Principles",
      desc: "Explore hierarchy, balance, contrast, typography, spacing, and composition.",
    },
    {
      num: 3,
      title: "UI Elements & Patterns",
      desc: "Learn components, patterns, and reusable interface conventions for scalability.",
    },
    {
      num: 4,
      title: "User Research & Analysis",
      desc: "Discover user needs with surveys, interviews, and heuristic evaluations.",
    },
    {
      num: 5,
      title: "Brainstorming & Ideation",
      desc: "Generate solution ideas with structured ideation frameworks.",
    },
    {
      num: 6,
      title: "Wireframing",
      desc: "Translate ideas into low-fidelity structures that define information flow.",
    },
    {
      num: 7,
      title: "Prototyping",
      desc: "Build interactive prototypes to validate flows and interactions.",
    },
    {
      num: 8,
      title: "Usability Testing",
      desc: "Iterate based on real user feedback to improve clarity and usability.",
    },
    {
      num: 9,
      title: "Design Systems",
      desc: "Create tokens, components, and documentation for consistent delivery.",
    },
    {
      num: 10,
      title: "Portfolio Building",
      desc: "Craft case studies that highlight process, decisions, and outcomes.",
    },
    {
      num: 11,
      title: "Interview Prep",
      desc: "Prepare for whiteboard challenges, critiques, and product thinking.",
    },
    {
      num: 12,
      title: "Placement Assistance",
      desc: "Get guidance on applications, referrals, and negotiations.",
    },
    {
      num: 13,
      title: "Land Your Dream Job",
      desc: "Show up with confidence and a portfolio that speaks for itself.",
    },
  ];
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-center mb-6 text-4xl font-bold text-gray-900">
          About Visual & UI/UX Mastery
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          A comprehensive workshop designed to help learners master the fundamentals of Visual Design and UI/UX. From principles and patterns to prototyping and testing, this program provides hands-on learning with a clear roadmap to job readiness.
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-[var(--color-text-dark)]/80">
          A Proven Program to mold you into a designer. Supported by Multiple Job Tracks & Personalized guidance for Securing placements.
        </p>
        <div className="mt-10 sm:mt-12 grid gap-6 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.num} className="flex items-start gap-4 p-6 bg-[var(--color-background-light)] rounded-lg shadow-sm border border-[var(--color-border)] hover:shadow-md transition-shadow">
              <span className="flex-shrink-0 w-8 h-8 bg-[var(--color-primary-purple)] text-white rounded-full flex items-center justify-center font-semibold mt-1">
                {step.num}
              </span>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-[var(--color-text-dark)] mb-2">{step.title}</h4>
                <p className="text-sm text-[var(--color-muted-foreground)]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramRoadmap;