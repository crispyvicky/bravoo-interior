"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X, Check } from "lucide-react";

interface ServiceDetail {
    title: string;
    description: string;
    image: string;
    details: {
        materials: string[];
        styles: string[];
        process: string;
        idealFor: string;
    };
}

const services: ServiceDetail[] = [
    {
        title: "Residential Interiors",
        description: "Your home is your sanctuary. We create warm, personalized living spaces that reflect your unique lifestyle and heritage.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop",
        details: {
            materials: ["Italian Marble", "Teak Wood", "Brass Accents", "Natural Stone"],
            styles: ["Modern Minimalist", "Contemporary Luxury", "Traditional Fusion", "Indo-Western"],
            process: "We start with a deep-dive lifestyle analysis to understand your daily routines. Design concepts are then crafted to balance aesthetics with extreme functionality.",
            idealFor: "Villas, Luxury Apartments, Penthouses"
        }
    },
    {
        title: "Commercial & Office",
        description: "Designing productive and inspiring environments that elevate your brand identity and foster creativity.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop",
        details: {
            materials: ["Acoustic Panels", "Glass Partitions", "Ergonomic Furniture", "Sustainable Wood"],
            styles: ["Industrial Chic", "Corporate Modern", "Biophilic Design", "Open Plan"],
            process: "Our focus is on workflow optimization and brand storytelling. We design spaces that boost employee morale and impress clients from the moment they walk in.",
            idealFor: "Corporate HQs, Startups, Co-working Spaces"
        }
    },
    {
        title: "Bespoke Furniture",
        description: "Custom-designed furniture manufactured to perfection, ensuring every piece fits your space and needs exactly.",
        image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1920&auto=format&fit=crop",
        details: {
            materials: ["Solid Walnut", "Premium Leather", "Velvet Upholstery", "Gunmetal Finish"],
            styles: ["Art Deco", "Mid-Century Modern", "Avant-Garde", "Classic Revivals"],
            process: "Each piece is hand-sketched and prototyped. We work with master craftsmen to ensure joinery, finish, and comfort are world-class.",
            idealFor: "Statement Pieces, Custom Wardrobes, Signature Seating"
        }
    }
];

export default function Services() {
    const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

    return (
        <div className="w-full bg-white relative">
            {/* Header */}
            <div className="py-24 px-4 text-center bg-secondary-05 animate-fade-in">
                <h1 className="font-heading-02 text-5xl md:text-7xl text-primary-01 mb-6">Our Expertise</h1>
                <p className="font-body-01 text-lg text-secondary-01 max-w-2xl mx-auto">
                    Comprehensive design solutions tailored to your vision.
                </p>
            </div>

            {/* Services List - Alternating Layout */}
            <div className="flex flex-col">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row h-auto md:h-[500px] group overflow-hidden animate-fade-up"
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        {/* Image Side */}
                        <div className={`w-full md:w-1/2 h-[300px] md:h-full overflow-hidden relative ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        </div>

                        {/* Content Side */}
                        <div className={`w-full md:w-1/2 min-h-[300px] md:h-full bg-white flex flex-col justify-center p-8 md:px-16 lg:px-24 transition-colors duration-500 group-hover:bg-primary-01 group-hover:text-white ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                            <span className="text-sm tracking-[0.3em] font-light mb-4 opacity-50 block">0{index + 1}</span>
                            <h2 className="font-heading-02 text-3xl md:text-4xl mb-6 transition-colors duration-300 group-hover:text-white text-primary-01">
                                {service.title}
                            </h2>
                            <p className="font-body-01 text-lg mb-8 text-secondary-01 transition-colors duration-300 group-hover:text-gray-300">
                                {service.description}
                            </p>
                            <Button
                                variant="ghost"
                                onClick={() => setSelectedService(service)}
                                className="w-fit p-0 hover:bg-transparent group-hover:text-white text-primary-01 flex items-center gap-2 tracking-widest text-sm"
                            >
                                LEARN MORE <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Full Screen Stats Overlay */}
            {selectedService && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        onClick={() => setSelectedService(null)}
                    />

                    {/* Content Card */}
                    <div className="relative w-full max-w-6xl h-full md:h-auto md:max-h-[90vh] bg-white text-primary-01 overflow-y-auto animate-in slide-in-from-bottom-10 zoom-in-95 duration-500 shadow-2xl flex flex-col md:flex-row">

                        <button
                            onClick={() => setSelectedService(null)}
                            className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-black/10 rounded-full transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Image Column */}
                        <div className="w-full md:w-2/5 h-[300px] md:h-auto relative">
                            <img
                                src={selectedService.image}
                                alt={selectedService.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-primary-01/20" />
                            <div className="absolute bottom-8 left-8 text-white">
                                <span className="text-xs tracking-[0.3em] uppercase opacity-80 mb-2 block">Service Detail</span>
                                <h2 className="font-heading-02 text-4xl">{selectedService.title}</h2>
                            </div>
                        </div>

                        {/* Details Column */}
                        <div className="w-full md:w-3/5 p-8 md:p-12 lg:p-16 bg-white overflow-y-auto">
                            <div className="space-y-12">

                                {/* Process Section */}
                                <div>
                                    <h3 className="font-label-medium text-xs tracking-widest text-secondary-02 mb-4 uppercase">Our Process</h3>
                                    <p className="font-body-01 text-lg md:text-xl text-secondary-01 leading-relaxed">
                                        {selectedService.details.process}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    {/* Styles */}
                                    <div>
                                        <h3 className="font-label-medium text-xs tracking-widest text-secondary-02 mb-6 uppercase">Design Styles</h3>
                                        <ul className="space-y-3">
                                            {selectedService.details.styles.map((style, i) => (
                                                <li key={i} className="flex items-center gap-3 text-primary-01 font-medium">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary-02" />
                                                    {style}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Materials */}
                                    <div>
                                        <h3 className="font-label-medium text-xs tracking-widest text-secondary-02 mb-6 uppercase">Key Materials</h3>
                                        <ul className="space-y-3">
                                            {selectedService.details.materials.map((mat, i) => (
                                                <li key={i} className="flex items-center gap-3 text-secondary-01">
                                                    <Check className="w-4 h-4 text-green-600/60" />
                                                    {mat}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Ideal For */}
                                <div className="p-6 bg-secondary-05 border-l-4 border-primary-02">
                                    <span className="block text-xs font-bold text-primary-02 uppercase tracking-wider mb-1">Perfect For</span>
                                    <p className="text-primary-01 font-heading-04 italic text-xl">
                                        {selectedService.details.idealFor}
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}
