import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function HiringPartners() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            300+ Companies Have hired
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
            PurpleLane Learners
          </h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 mb-12">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-muted rounded-lg flex items-center justify-center"
            >
              <span className="text-xs text-muted-foreground">Logo {i + 1}</span>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-text-white px-8 py-4 rounded-lg font-semibold text-base flex items-center gap-2 mx-auto"
          >
            Request a Call Back
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}