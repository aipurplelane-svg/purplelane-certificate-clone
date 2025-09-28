import Image from "next/image";
import { ChevronRight } from "lucide-react";

// Simple mock company logo placeholder
const LogoPlaceholder = ({ label }: { label: string }) => (
  <div className="mx-auto mt-3 h-8 w-28 rounded-md bg-gray-100 text-center text-sm font-semibold text-gray-600 flex items-center justify-center">
    {label}
  </div>
);

const Badge = ({ type, children }: { type: "before" | "after"; children: React.ReactNode }) => (
  <span
    className={
      "inline-flex items-center rounded-md px-2.5 py-1 text-xs font-semibold " +
      (type === "before"
        ? "bg-amber-100 text-amber-700"
        : "bg-emerald-100 text-emerald-700")
    }
  >
    {children}
  </span>
);

type Story = {
  name: string;
  avatar: string; // image url
  company: string;
  before: string;
  after: string;
};

const stories: Story[] = [
  {
    name: "Kiranmay Padala",
    avatar:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/avatars/1.png",
    company: "Devnex",
    before: "B.Tech (EEE 2025)",
    after: "Graphic Designer",
  },
  {
    name: "Manoj Kumar",
    avatar:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/avatars/2.png",
    company: "PeopleTech",
    before: "Executive (Career Switch)",
    after: "UI/UX Designer",
  },
  {
    name: "Krishna Priya",
    avatar:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/avatars/3.png",
    company: "Numero",
    before: "House Wife (With 10 Years Gap)",
    after: "Sr Graphic Designer",
  },
  {
    name: "Anil Datla",
    avatar:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/avatars/4.png",
    company: "Sails Software",
    before: "B.Tech (MECH 2021)",
    after: "UI/UX Designer",
  },
];

export default function SuccessStories() {
  return (
    <section className="bg-[#FFF7F3] py-16">
      <div className="container">
        <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
          Students Transformed From Us
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stories.map((s) => (
            <article
              key={s.name}
              className="relative rounded-3xl border border-purple-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="absolute right-0 top-0 h-2 w-1/2 rounded-tr-3xl bg-gradient-to-r from-purple-500 to-indigo-500" />

              <div className="flex flex-col items-center px-6 pb-6 pt-8">
                <div className="h-20 w-20 overflow-hidden rounded-full ring-4 ring-purple-100">
                  {/* Using next/image for optimization, fallback to gradient if fails */}
                  <div className="relative h-full w-full">
                    <Image
                      src={s.avatar}
                      alt={s.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <h3 className="mt-4 text-center text-xl font-semibold text-gray-900">
                  {s.name}
                </h3>

                <LogoPlaceholder label={s.company} />

                <div className="mt-6 flex w-full items-center justify-between gap-2 text-sm">
                  <div className="flex flex-col items-start">
                    <Badge type="before">Before</Badge>
                    <span className="mt-2 max-w-[10rem] text-gray-700">{s.before}</span>
                  </div>

                  <ChevronRight className="text-gray-400" />

                  <div className="flex flex-col items-start">
                    <Badge type="after">After</Badge>
                    <span className="mt-2 max-w-[10rem] text-gray-900 font-semibold">
                      {s.after}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="rounded-xl bg-purple-500 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-purple-600">
            View All Success Stories
          </button>
        </div>
      </div>
    </section>
  );
}