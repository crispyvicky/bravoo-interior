
import { Button } from "@/components/ui/button";

export default function Contact() {
    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row relative bg-primary-01 text-white">
            {/* Visual Side (Left) */}
            <div className="w-full md:w-1/2 relative h-[500px] md:h-auto md:min-h-screen overflow-hidden flex-shrink-0">
                <img
                    src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1920&auto=format&fit=crop"
                    alt="Luxury Abstract Texture"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:bg-gradient-to-r md:from-primary-01/90 md:to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-20 z-10">
                    <h2 className="font-heading-02 text-3xl md:text-5xl mb-4 md:mb-6 leading-tight">INFINITY Interiors</h2>
                    <address className="not-italic text-gray-300 text-base md:text-lg space-y-1 md:space-y-2 leading-relaxed opacity-90">
                        <p>Plot No. 123, Road No. 45</p>
                        <p>Yellamabanda, Hyderabad</p>
                        <p>Telangana, India 500033</p>
                        <br />
                        <p className="text-white font-medium text-lg">+91 98765 43210</p>
                        <p>hello@infinityinteriors.com</p>
                    </address>
                </div>
            </div>

            {/* Form Side (Right) */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-6 py-12 md:p-16 lg:p-24 bg-primary-01 relative z-10">
                <div className="w-full max-w-lg">
                    <span className="text-[#d4af37] tracking-[0.3em] text-xs md:text-sm uppercase mb-3 md:mb-4 block">Let's Create</span>
                    <h1 className="font-heading-02 text-3xl md:text-5xl mb-8">Start Your Project</h1>

                    <form className="space-y-6">
                        <div className="group relative z-0 w-full mb-6">
                            <input type="text" name="name" className="block py-4 px-0 w-full text-base md:text-lg text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-[#d4af37] peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-base md:text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#d4af37] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                        </div>

                        <div className="group relative z-0 w-full mb-6">
                            <input type="email" name="email" className="block py-4 px-0 w-full text-base md:text-lg text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-[#d4af37] peer" placeholder=" " required />
                            <label className="peer-focus:font-medium absolute text-base md:text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#d4af37] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                        </div>

                        <div className="group relative z-0 w-full mb-6">
                            <textarea name="message" rows={4} className="block py-4 px-0 w-full text-base md:text-lg text-white bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-[#d4af37] peer" placeholder=" " required></textarea>
                            <label className="peer-focus:font-medium absolute text-base md:text-lg text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#d4af37] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tell us about your space</label>
                        </div>

                        <Button className="w-full bg-[#d4af37] text-black hover:bg-white hover:text-black transition-colors py-6 text-sm md:text-lg tracking-widest mt-8 font-bold">
                            SEND INQUIRY
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
