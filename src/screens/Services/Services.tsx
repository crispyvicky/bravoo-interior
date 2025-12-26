import { Button } from "../../components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
    {
        title: "Residential Interiors",
        description: "Your home is your sanctuary. We create warm, personalized living spaces that reflect your unique lifestyle and heritage.",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=1920&auto=format&fit=crop"
    },
    {
        title: "Commercial & Office",
        description: "Designing productive and inspiring environments that elevate your brand identity and foster creativity.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop"
    },
    {
        title: "Bespoke Furniture",
        description: "Custom-designed furniture manufactured to perfection, ensuring every piece fits your space and needs exactly.",
        image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1920&auto=format&fit=crop"
    }
];

export const Services = (): JSX.Element => {
    return (
        <div className="w-full bg-white">
            {/* Header */}
            <div className="py-24 px-4 text-center bg-secondary-05">
                <h1 className="font-heading-02 text-5xl md:text-7xl text-primary-01 mb-6">Our Expertise</h1>
                <p className="font-body-01 text-lg text-secondary-01 max-w-2xl mx-auto">
                    Comprehensive design solutions tailored to your vision.
                </p>
            </div>

            {/* Services List - Alternating Layout */}
            <div className="flex flex-col">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col md:flex-row h-[600px] md:h-[500px] group overflow-hidden">
                        {/* Image Side */}
                        <div className={`w-full md:w-1/2 h-full overflow-hidden relative ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        </div>

                        {/* Content Side */}
                        <div className={`w-full md:w-1/2 h-full bg-white flex flex-col justify-center px-8 md:px-16 lg:px-24 transition-colors duration-500 group-hover:bg-primary-01 group-hover:text-white ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                            <span className="text-sm tracking-[0.3em] font-light mb-4 opacity-50 block">0{index + 1}</span>
                            <h2 className="font-heading-02 text-3xl md:text-4xl mb-6 transition-colors duration-300 group-hover:text-white text-primary-01">
                                {service.title}
                            </h2>
                            <p className="font-body-01 text-lg mb-8 text-secondary-01 transition-colors duration-300 group-hover:text-gray-300">
                                {service.description}
                            </p>
                            <Button
                                variant="ghost"
                                className="w-fit p-0 hover:bg-transparent group-hover:text-white text-primary-01 flex items-center gap-2 tracking-widest text-sm"
                            >
                                LEARN MORE <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
