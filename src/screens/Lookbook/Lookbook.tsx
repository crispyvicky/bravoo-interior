
export const Lookbook = (): JSX.Element => {
    return (
        <div className="w-full bg-white">
            {/* Editorial Hero */}
            <div className="w-full h-[80vh] relative flex items-center justify-center overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop"
                    alt="Lookbook Cover"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative z-10 text-center text-white px-4">
                    <p className="tracking-[0.5em] text-sm md:text-base mb-6 font-light uppercase">Curated Collections</p>
                    <h1 className="font-heading-01 text-6xl md:text-9xl italic">The Edit</h1>
                    <p className="font-heading-02 text-2xl md:text-3xl mt-4">2024 Design Trends</p>
                </div>
            </div>

            {/* Editorial Layouts */}
            <div className="container mx-auto py-24 px-4 space-y-32">

                {/* Section 1: Minimalist Luxury */}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-2/3 relative">
                        <img
                            src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1920&auto=format&fit=crop"
                            alt="Minimalist Bedroom"
                            className="w-full h-[600px] object-cover"
                        />
                        <div className="absolute -bottom-10 -right-10 bg-white p-8 max-w-sm hidden md:block shadow-xl">
                            <p className="font-heading-04 text-3xl mb-4 text-primary-01">Quiet Luxury</p>
                            <p className="text-secondary-01 text-sm leading-relaxed">Focusing on high-quality materials and understated elegance. Less noise, more texture.</p>
                        </div>
                    </div>
                    <div className="lg:w-1/3">
                        <h2 className="font-heading-02 text-5xl mb-6 text-primary-01">01.</h2>
                        <h3 className="font-heading-02 text-4xl mb-6">Minimalism Redefined</h3>
                        <p className="font-body-01 text-lg text-secondary-01 leading-relaxed">
                            We explore the shift towards warmer, more tactile minimalism. It's not about emptiness, but about making room for what truly matters.
                        </p>
                    </div>
                </div>

                {/* Section 2: Biophilic Design (Reversed) */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                    <div className="lg:w-2/3 relative">
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop"
                                alt="Green Living Room"
                                className="w-full h-[500px] object-cover mt-12"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1000&auto=format&fit=crop"
                                alt="Plant Detail"
                                className="w-full h-[500px] object-cover"
                            />
                        </div>
                    </div>
                    <div className="lg:w-1/3 text-right lg:text-left">
                        <h2 className="font-heading-02 text-5xl mb-6 text-primary-01">02.</h2>
                        <h3 className="font-heading-02 text-4xl mb-6">Nature Indoors</h3>
                        <p className="font-body-01 text-lg text-secondary-01 leading-relaxed">
                            Bringing the outside in wasn't just a pandemic trend. It's a lifestyle. Discover how we integrate living green walls and natural light.
                        </p>
                    </div>
                </div>

                {/* Section 3: Dark Academia / Moody */}
                <div className="relative w-full h-[800px]">
                    <img
                        src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1920&auto=format&fit=crop"
                        alt="Dark Living Room"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="text-center text-white border border-white/30 p-12 backdrop-blur-sm bg-white/10 max-w-2xl">
                            <h2 className="font-heading-01 text-6xl mb-4">Moody Tones</h2>
                            <p className="text-xl font-light">Embracing the dark side of color palettes for depth and drama.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
