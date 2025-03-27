
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { caseStudies } from "@/data/caseStudies";
import CaseStudyContent from "./case-studies/CaseStudyContent";

const CaseStudies = () => {
  const [activeStudy, setActiveStudy] = useState(caseStudies[0].id);

  return (
    <section id="case-studies" className="bg-secondary/30">
      <div className="section-container">
        <h2 className="section-title">Case Studies</h2>
        <p className="section-subtitle">
          In-depth examinations of selected projects, detailing the problems, processes, and solutions.
        </p>

        <Tabs
          defaultValue={caseStudies[0].id}
          value={activeStudy}
          onValueChange={setActiveStudy}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 mb-8">
            {caseStudies.map((study) => (
              <TabsTrigger
                key={study.id}
                value={study.id}
                className="text-sm md:text-base"
              >
                {study.title}
                <span className="ml-2 text-xs text-muted-foreground hidden md:inline">
                  {study.subtitle}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {caseStudies.map((study) => (
            <CaseStudyContent key={study.id} study={study} />
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CaseStudies;
