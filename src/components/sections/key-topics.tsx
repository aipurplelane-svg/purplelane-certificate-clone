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
  Check,
} from 'lucide-react';

interface TopicProps {
  name: string;
  icon: React.ElementType;
}

const topicsData: TopicProps[] = [
  { name: 'Visual Design Principles', icon: Presentation },
  { name: 'Style Guidelines', icon: PenTool },
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
  <div className="relative flex items-center justify-between rounded-2xl bg-white shadow-sm border border-gray-100 pl-5 pr-4 sm:pr-6 py-5">
    {/* Left accent bar */}
    <span className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-[var(--color-accent-orange)]" />

    <div className="flex items-center gap-3 sm:gap-4">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F3E8FF]">
        <Icon className="h-5 w-5 text-[var(--color-primary-purple)]" />
      </div>
      <span className="text-base sm:text-lg font-semibold text-[var(--color-text-dark)]">{name}</span>
    </div>

    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[var(--color-success-green)]">
      <Check className="h-4 w-4 text-[var(--color-success-green)]" />
    </div>
  </div>
);

const KeyTopics = () => {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl">
        <h2 className="mb-8 sm:mb-12 text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] tracking-tight">
          Key Topics Covered
        </h2>
        <div className="space-y-4">
          {topicsData.map((topic) => (
            <TopicItem key={topic.name} name={topic.name} icon={topic.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyTopics;