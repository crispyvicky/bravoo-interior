
export const Portfolio = (): JSX.Element => {
    const projects = [
        { title: "Jubilee Hills Villa", category: "Residential", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1920&auto=format&fit=crop", height: "h-[400px]" },
        { title: "Tech Park Office", category: "Commercial", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1920&auto=format&fit=crop", height: "h-[600px]" },
        { title: "Modern Penthouse", category: "Residential", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1920&auto=format&fit=crop", height: "h-[500px]" },
        { title: "Banjara Hills Apt", category: "Renovation", img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1920&auto=format&fit=crop", height: "h-[450px]" },
        { title: "Luxury Bedroom", category: "Residential", img: "https://images.unsplash.com/photo-1616594039964-408e404a65cc?q=80&w=1920&auto=format&fit=crop", height: "h-[550px]" },
        { title: "Minimalist Kitchen", category: "Residential", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1920&auto=format&fit=crop", height: "h-[400px]" },
    ];

    return (
        <div className="w-full bg-white">
            <div className="py-24 px-4 text-center">
                <h1 className="font-heading-02 text-5xl md:text-7xl text-primary-01 mb-6">Selected Works</h1>
                <div className="flex flex-wrap justify-center gap-6 mt-8">
                    {["ALL", "RESIDENTIAL", "COMMERCIAL", "HOSPITALITY"].map((filter, i) => (
                        <button key={i} className={`text-sm tracking-[0.2em] hover:text-primary-01 transition-colors ${i === 0 ? "text-primary-01 font-bold border-b-2 border-primary-01" : "text-gray-400"}`}>
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 pb-24">
                {/* Simple Masonry-like Grid */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {projects.map((project, index) => (
                        <div key={index} className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-sm">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                                <span className="text-secondary-02 text-xs tracking-[0.3em] uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {project.category}
                                </span>
                                <h3 className="text-white font-heading-04 text-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                    {project.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
