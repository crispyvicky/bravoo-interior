"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project } from "@/data/projects";

interface ProjectDetailClientProps {
    project: Project;
    nextProject: Project;
}

export default function ProjectDetailClient({ project, nextProject }: ProjectDetailClientProps) {
    const router = useRouter();

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative w-full h-[80vh] md:h-screen">
                <div className="absolute inset-0 bg-black/30 z-10" />
                <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover fixed top-0 left-0 -z-0"
                />
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                    <span className="text-white/80 tracking-[0.3em] uppercase text-sm md:text-base mb-4 animate-fade-in">
                        {project.category}
                    </span>
                    <h1 className="font-heading-01 text-5xl md:text-7xl lg:text-9xl text-white mb-6 animate-fade-up">
                        {project.title}
                    </h1>
                    <div className="w-1 h-24 bg-white/50 animate-fade-up" style={{ animationDelay: "0.2s" }}></div>
                </div>
            </div>

            {/* Content Container (White Background sliding over fixed hero) */}
            <div className="relative z-30 bg-white w-full">
                {/* Project Meta Data Grid */}
                <div className="container mx-auto px-4 py-16 -mt-20 relative z-40">
                    <div className="bg-secondary-05 p-8 md:p-12 shadow-2xl grid grid-cols-2 lg:grid-cols-4 gap-8 border-t-4 border-primary-01">
                        <div>
                            <span className="block text-secondary-02 text-xs tracking-widest uppercase mb-2">Location</span>
                            <p className="font-heading-04 text-lg text-primary-01">{project.location}</p>
                        </div>
                        <div>
                            <span className="block text-secondary-02 text-xs tracking-widest uppercase mb-2">Client</span>
                            <p className="font-heading-04 text-lg text-primary-01">{project.client}</p>
                        </div>
                        <div>
                            <span className="block text-secondary-02 text-xs tracking-widest uppercase mb-2">Area</span>
                            <p className="font-heading-04 text-lg text-primary-01">{project.area}</p>
                        </div>
                        <div>
                            <span className="block text-secondary-02 text-xs tracking-widest uppercase mb-2">Timeline</span>
                            <p className="font-heading-04 text-lg text-primary-01">{project.timeline}</p>
                        </div>
                    </div>
                </div>

                {/* Narrative Section */}
                <div className="container mx-auto px-4 py-16 md:py-24">
                    <div className="max-w-4xl mx-auto space-y-24">

                        {/* The Story */}
                        <div className="flex flex-col md:flex-row gap-12 items-start">
                            <div className="md:w-1/3">
                                <h2 className="font-heading-02 text-4xl text-primary-01 sticky top-32">The Vision</h2>
                            </div>
                            <div className="md:w-2/3">
                                <p className="font-body-01 text-lg text-secondary-01 leading-relaxed first-letter:text-5xl first-letter:font-heading-01 first-letter:text-primary-01 first-letter:float-left first-letter:mr-4">
                                    {project.story}
                                </p>
                            </div>
                        </div>

                        {/* The Transformation */}
                        <div className="flex flex-col md:flex-row-reverse gap-12 items-start">
                            <div className="md:w-1/3">
                                <h2 className="font-heading-02 text-4xl text-primary-01 sticky top-32">The Process</h2>
                            </div>
                            <div className="md:w-2/3">
                                <p className="font-body-01 text-lg text-secondary-01 leading-relaxed">
                                    {project.transformation}
                                </p>
                                <div className="mt-8 flex flex-wrap gap-3">
                                    {project.designElements.map((el, i) => (
                                        <span key={i} className="px-4 py-2 bg-secondary-05 text-primary-01 text-sm tracking-wide rounded-full border border-primary-01/10">
                                            {el}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Gallery */}
                <div className="w-full bg-secondary-05 py-24">
                    <div className="container mx-auto px-4">
                        <span className="block text-center text-secondary-02 tracking-[0.4em] uppercase text-sm mb-12">Visual Journey</span>
                        <div className="columns-1 md:columns-2 gap-8 space-y-8">
                            {project.images.map((img, index) => (
                                <div key={index} className="break-inside-avoid shadow-lg hover:shadow-2xl transition-shadow duration-500">
                                    <img src={img} alt={`${project.title} detail ${index + 1}`} className="w-full h-auto" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Next Project Footer */}
                <div className="w-full bg-primary-01 text-white py-32 px-4 text-center relative overflow-hidden group cursor-pointer" onClick={() => router.push(`/projects/${nextProject.slug}`)}>
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    <div className="relative z-10">
                        <span className="text-white/60 tracking-widest uppercase text-xs mb-4 block">Next Project</span>
                        <h2 className="font-heading-01 text-4xl md:text-6xl lg:text-8xl group-hover:scale-105 transition-transform duration-700">
                            {nextProject.title}
                        </h2>
                        <div className="mt-8 flex justify-center">
                            <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-white/50 group-hover:translate-x-4 transition-transform duration-500" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
