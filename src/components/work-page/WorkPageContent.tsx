"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { WorkHero } from "./WorkHero";
import { ProjectFilterBar, ProjectFilterCategory } from "./ProjectFilterBar";
import { FeaturedProjectCard } from "./FeaturedProjectCard";
import { ProjectRadioWarehouse } from "./ProjectRadioWarehouse";
import { ProjectPlantaris } from "./ProjectPlantaris";
import { ProjectArchiveSection } from "./ProjectArchiveSection";
import { BehindTheWorkSection } from "./BehindTheWorkSection";
import { WorkCTA } from "./WorkCTA";

const ProjectDetailModal = dynamic(
  () => import("./ProjectDetailModal").then((mod) => mod.ProjectDetailModal),
  { ssr: false }
);

export const WorkPageContent: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterCategory>("ALL");
  const [modalProjectId, setModalProjectId] = useState<string | null>(null);

  // Determine visibility of projects based on filter
  const showMLHospital =
    activeFilter === "ALL" ||
    activeFilter === "HEALTHCARE" ||
    activeFilter === "SOFTWARE" ||
    activeFilter === "AUTOMATION" ||
    activeFilter === "BUSINESS SYSTEMS";

  const showRadioWarehouse =
    activeFilter === "ALL" ||
    activeFilter === "AUTOMOTIVE" ||
    activeFilter === "SOFTWARE" ||
    activeFilter === "BUSINESS SYSTEMS";

  const showPlantaris =
    activeFilter === "ALL" ||
    activeFilter === "AI" ||
    activeFilter === "COMPUTER VISION" ||
    activeFilter === "SOFTWARE";

  return (
    <>
      {/* 1. Archive Hero */}
      <WorkHero onSelectProject={(id) => setModalProjectId(id)} />

      {/* 2. Tactile Project Filter */}
      <ProjectFilterBar
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      {/* 3. Featured & Active Case Studies */}
      <div className="space-y-4">
        {showMLHospital && (
          <FeaturedProjectCard
            onOpenDetail={() => setModalProjectId("ml-hospital")}
          />
        )}

        {showRadioWarehouse && (
          <ProjectRadioWarehouse
            onOpenDetail={() => setModalProjectId("radio-warehouse")}
          />
        )}

        {showPlantaris && (
          <ProjectPlantaris
            onOpenDetail={() => setModalProjectId("plantaris")}
          />
        )}
      </div>

      {/* 4. Project Archive (Coming to the Archive) */}
      <ProjectArchiveSection />

      {/* 5. Behind The Work (The Aethel Approach) */}
      <BehindTheWorkSection />

      {/* 6. Work CTA */}
      <WorkCTA />

      {/* 7. Deep-Dive Case Study Journal Modal (Lazy-loaded) */}
      {modalProjectId && (
        <ProjectDetailModal
          projectId={modalProjectId}
          onClose={() => setModalProjectId(null)}
        />
      )}
    </>
  );
};
