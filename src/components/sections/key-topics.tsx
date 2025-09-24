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
  <div className="flex items-center justify-between rounded-xl bg-white p-5 shadow-sm">
    <div className="flex items-center gap-4">
      <Icon className="h-6 w-6 flex-shrink-0 text-primary-purple" />
      <h4 className="m-0 text-lg font-medium text-primary-purple">{name}</h4>
    </div>
    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-success-green" />
  </div>
);

const KeyTopics = () => {
  return (
    <section className="bg-lavender py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-text-dark md:text-4xl">
          Key Topics Covered
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topicsData.map((topic) => (
            <TopicItem key={topic.name} name={topic.name} icon={topic.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyTopics;