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
  <div className="flex items-center gap-3 py-2">
    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-accent-orange)]">
      <Icon className="h-3 w-3 text-white flex-shrink-0" />
    </div>
    <span className="flex-1 text-sm font-medium text-[var(--color-text-dark)]">{name}</span>
    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[var(--color-success-green)]" />
  </div>
);

const KeyTopics = () => {
  return (
    <section className="bg-[var(--color-lavender)] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-8 sm:mb-12 text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] tracking-tight">
          Key Topics Covered
        </h2>
        <div className="space-y-3 max-w-2xl mx-auto">
          {topicsData.map((topic) => (
            <TopicItem key={topic.name} name={topic.name} icon={topic.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyTopics;