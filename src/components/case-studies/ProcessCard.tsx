
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Process } from "@/data/caseStudies";

interface ProcessCardProps {
  process: Process;
  index: number;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ process, index }) => {
  return (
    <Card
      key={process.title}
      className="overflow-hidden card-hover animate-slide-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {process.image && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={process.image}
            alt={process.title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      <CardContent className="p-4">
        <h4 className="font-bold text-lg mb-2">
          {process.title}
        </h4>
        <p className="text-sm text-muted-foreground">
          {process.description}
        </p>
      </CardContent>
    </Card>
  );
};

export default ProcessCard;
