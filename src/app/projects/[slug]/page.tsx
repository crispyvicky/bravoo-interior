import React from "react";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

// Required for static export
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    // Find next project for navigation
    const currentIndex = projects.findIndex((p) => p.slug === slug);
    const nextProject = projects[(currentIndex + 1) % projects.length];

    return <ProjectDetailClient project={project} nextProject={nextProject} />;
}
