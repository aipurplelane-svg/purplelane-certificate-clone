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
  <div className="flex items-center justify-between rounded-xl bg-white p-4 sm:p-5 shadow-sm ring-1 ring-black/5 transition-all hover:shadow-md hover:-translate-y-0.5">
    <div className="flex items-center gap-3 sm:gap-4">
      <Icon className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 text-[var(--color-primary-purple)]" />
      <h4 className="m-0 text-base sm:text-lg font-medium text-[var(--color-primary-purple)]">{name}</h4>
    </div>
    <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 text-[var(--color-success-green)]" />
  </div>
);

const KeyTopics = () => {
  return (
    <section className="bg-[var(--color-lavender)] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-8 sm:mb-12 text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] tracking-tight">
          Key Topics Covered
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topicsData.map((topic) => (
            <TopicItem key={topic.name} name={topic.name} icon={topic.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyTopics;