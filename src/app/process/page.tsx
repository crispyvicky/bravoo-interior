
export default function Process() {
    const steps = [
        {
            number: "01",
            title: "Discovery",
            description: "We begin by understanding your vision, lifestyle, and requirements. This includes site visits and detailed discussions to capture the essence of what you need.",
            image:"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1000&auto=format&fit=crop"
        },
        {
            number: "02",
            title: "Concept Design",
            description: "Our designers create initial mood boards, layouts, and 3D visualizations. We explore themes, colors, and materials to define the aesthetic direction.",
            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop"
        },
        {
            number: "03",
            title: "Development",
            description: "We refine the designs into technical drawings and detailed specifications. Every electrical point, joinery detail, and material finish is documented.",
            image: "https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=1000&auto=format&fit=crop"
        },
        {
            number: "04",
            title: "Execution",
            description: "Our skilled craftsmen bring the designs to life. We manage the entire build process, ensuring quality control and adherence to timelines.",
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop"
        },
        {
            number: "05",
            title: "Handover",
            description: "The final reveal. We style the space, ensure everything is perfect, and hand over the keys to your new dream environment.",
            image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    return (
        <div className="w-full bg-secondary-05">
            <div className="container mx-auto py-24 px-4">
                <div className="text-center mb-24">
                    <span className="text-secondary-02 tracking-[0.3em] uppercase text-sm block mb-4">How We Work</span>
                    <h1 className="font-heading-02 text-5xl md:text-7xl text-primary-01">Our Process</h1>
                </div>

                <div className="relative">
                    {/* Vertical Line for Desktop */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-[1px] h-full bg-primary-01/20 hidden md:block"></div>

                    <div className="flex flex-col gap-24">
                        {steps.map((step, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Image Side */}
                                <div className="w-full md:w-1/2 relative group">
                                    <div className="aspect-[4/3] overflow-hidden rounded-md shadow-lg">
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    {/* Number Circle (Desktop Center) */}
                                    <div className={`absolute top-1/2 transform -translate-y-1/2 w-16 h-16 bg-primary-01 text-white flex items-center justify-center rounded-full font-heading-04 text-2xl z-10 hidden md:flex ${index % 2 !== 0 ? '-left-8' : '-right-8'}`}>
                                        {step.number}
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                                    <div className="md:hidden text-primary-01 font-heading-04 text-4xl mb-4">{step.number}</div>
                                    <h2 className="font-heading-02 text-4xl mb-6 text-primary-01">{step.title}</h2>
                                    <p className="font-body-01 text-lg text-secondary-01 leading-relaxed max-w-md mx-auto md:mx-0 inline-block">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
