
import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { CaseStudy } from "@/data/caseStudies";
import ProcessCard from "./ProcessCard";

interface CaseStudyContentProps {
  study: CaseStudy;
}

const CaseStudyContent: React.FC<CaseStudyContentProps> = ({ study }) => {
  return (
    <TabsContent
      key={study.id}
      value={study.id}
      className="animate-fade-in"
    >
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold">Overview</h3>
              <p className="mt-2 text-muted-foreground">
                {study.overview}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Challenge</h3>
              <p className="mt-2 text-muted-foreground">
                {study.challenge}
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold">Solution</h3>
              <p className="mt-2 text-muted-foreground">
                {study.solution}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Outcome</h3>
              <p className="mt-2 text-muted-foreground">
                {study.outcome}
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <h3 className="text-2xl font-bold mb-6">Design Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {study.processes.map((process, index) => (
              <ProcessCard key={process.title} process={process} index={index} />
            ))}
          </div>
        </div>
      </div>
    </TabsContent>
  );
};

export default CaseStudyContent;
