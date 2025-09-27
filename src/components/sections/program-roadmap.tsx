"use client";

import React from 'react';
import { CheckCircle } from 'lucide-react';

const ProgramRoadmap = () => {
  const steps = [
    {
      icon: CheckCircle,
      title: 'UI/UX Fundamentals',
      description: 'Master the basics of user interface and experience design principles.',
    },
    {
      icon: CheckCircle,
      title: 'Research & Analysis',
      description: 'Conduct user research, analysis, and brainstorming for effective designs.',
    },
    {
      icon: CheckCircle,
      title: 'Design Principles',
      description: 'Explore visual design, color theory, style guidelines, and design systems.',
    },
    {
      icon: CheckCircle,
      title: 'UI Elements & Patterns',
      description: 'Learn core UI components, patterns, and best practices for intuitive interfaces.',
    },
    {
      icon: CheckCircle,
      title: 'Prototyping & Testing',
      description: 'Build prototypes and conduct testing to refine and validate your designs.',
    },
    {
      icon: CheckCircle,
      title: 'Portfolio Building',
      description: 'Create a professional portfolio showcasing your UI/UX projects.',
    },
    {
      title: 'Land on your Dream Job',
      isFinal: true,
    },
  ];

  return (
    <section className="py-16 bg-background-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Visual & UI/UX Mastery
          </h2>
          <p className="text-lg text-neutral-gray max-w-3xl mx-auto">
            Program description adapted to AI workshop insights
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-indigo"></div>
          
          <div className="space-y-8">
            <div className="flex items-center relative">
              <div className="w-1/2 text-right pr-8">
                <div className="bg-accent-teal text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  1
                </div>
                <h4 className="text-primary-indigo font-semibold mb-2">Fundamentals</h4>
                <p className="text-neutral-gray">AI Basics</p>
              </div>
            </div>
            <div className="flex items-center relative">
              <div className="w-1/2 text-right pr-8">
                <div className="bg-accent-teal text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  2
                </div>
                <h4 className="text-primary-indigo font-semibold mb-2">Research & Analysis</h4>
                <p className="text-neutral-gray">User Research, Analysis, Brainstorming</p>
              </div>
            </div>
            <div className="flex items-center relative">
              <div className="w-1/2 text-right pr-8">
                <div className="bg-accent-teal text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  3
                </div>
                <h4 className="text-primary-indigo font-semibold mb-2">Design Principles</h4>
                <p className="text-neutral-gray">Visual Design, Color Theory, Style Guidelines</p>
              </div>
            </div>
            <div className="flex items-center relative">
              <div className="w-1/2 text-right pr-8">
                <div className="bg-accent-teal text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  4
                </div>
                <h4 className="text-primary-indigo font-semibold mb-2">UI Elements & Patterns</h4>
                <p className="text-neutral-gray">Core Components, Patterns, Best Practices</p>
              </div>
            </div>
            <div className="flex items-center relative">
              <div className="w-1/2 text-right pr-8">
                <div className="bg-accent-teal text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  5
                </div>
                <h4 className="text-primary-indigo font-semibold mb-2">Prototyping & Testing</h4>
                <p className="text-neutral-gray">Build Prototypes, Conduct Testing</p>
              </div>
            </div>
            <div className="flex items-center relative">
              <div className="w-1/2 text-right pr-8">
                <div className="bg-accent-teal text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  6
                </div>
                <h4 className="text-primary-indigo font-semibold mb-2">Portfolio Building</h4>
                <p className="text-neutral-gray">Professional Portfolio Creation</p>
              </div>
            </div>
            <div className="flex items-center relative">
              <div className="w-1/2 text-right pr-8">
                <div className="bg-accent-teal text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  7
                </div>
                <h4 className="text-primary-indigo font-semibold mb-2">Land on your Dream Job</h4>
                <p className="text-neutral-gray">Career Success & Placement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramRoadmap;