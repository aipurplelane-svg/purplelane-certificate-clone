"use client";

import React from 'react';
import {
  Palette,
  Ruler,
  Users,
  Lightbulb,
  Library,
  Smartphone,
  Laptop,
  PenTool,
  Blocks,
  LayoutGrid,
  PieChart,
  Presentation,
  CheckCircle2,
  Download,
  Check,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface TopicProps {
  name: string;
  icon: React.ElementType;
}

const topicsData: TopicProps[] = [
  { name: 'Visual Design Principles', icon: Palette },
  { name: 'Style Guidelines', icon: Ruler },
  { name: 'Color Theory', icon: Palette },
  { name: 'UI Design Principles', icon: Ruler },
  { name: 'UI Elements', icon: Blocks },
  { name: 'UI Patterns', icon: LayoutGrid },
  { name: 'User Research', icon: Users },
  { name: 'Analyzing', icon: PieChart },
  { name: 'Brain Storming', icon: Lightbulb },
  { name: 'Design System', icon: Library },
  { name: 'Prototype', icon: Smartphone },
  { name: 'Testing', icon: Laptop },
];

const TopicItem = ({ name, icon: Icon }: TopicProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4 }}
    whileHover={{ x: 5 }}
    className="flex items-center gap-4 p-6 border-l-4 border-[var(--color-accent-orange)] bg-white rounded-r-lg shadow-sm hover:shadow-md transition-all"
  >
    <div className="flex-shrink-0">
      <Icon size={24} className="text-[var(--color-primary-purple)]" />
    </div>
    <div className="flex-1">
      <h4 className="text-lg font-semibold text-[var(--color-text-dark)]">{name}</h4>
    </div>
    <CheckCircle2 size={24} className="text-[var(--color-success-green)] flex-shrink-0" />
  </motion.div>
);

const KeyTopics = () => {
  return (
    <section className="py-16 bg-lavender">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
          Key Topics Covered
        </h2>
        <p className="text-lg text-neutral-gray mb-12 max-w-2xl mx-auto">
          Essential skills from the AI Workshop
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-primary-indigo/10">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-success-green rounded-full flex items-center justify-center">
                <Check className="h-4 w-4 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-primary-indigo">
                Generative AI Landscape
              </h4>
            </div>
            <p className="text-neutral-gray text-sm">Understand opportunities and applications</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-primary-indigo/10">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-success-green rounded-full flex items-center justify-center">
                <Check className="h-4 w-4 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-primary-indigo">
                Generative AI Landscape
              </h4>
            </div>
            <p className="text-neutral-gray text-sm">Understand opportunities and applications</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-primary-indigo/10">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-success-green rounded-full flex items-center justify-center">
                <Check className="h-4 w-4 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-primary-indigo">
                Generative AI Landscape
              </h4>
            </div>
            <p className="text-neutral-gray text-sm">Understand opportunities and applications</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyTopics;