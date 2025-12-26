export interface Project {
    id: string;
    slug: string;
    title: string;
    category: "Residential" | "Commercial" | "Renovation" | "Interiors" | "Hospitality";
    heroImage: string;
    images: string[];
    description: string;
    client: string;
    location: string;
    budget: string;
    area: string;
    timeline: string;
    story: string;
    transformation: string;
    designElements: string[];
}

export const projects: Project[] = [
    {
        id: "1",
        slug: "jubilee-hills-villa",
        title: "Jubilee Hills Villa",
        category: "Residential",
        heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1920",
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000",
            "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1000"
        ],
        description: "A blend of traditional grandeur and modern minimalism in the heart of Hyderabad.",
        client: "The Reddy Family",
        location: "Jubilee Hills, Hyderabad",
        budget: "₹3.5 Cr",
        area: "4,500 sq ft",
        timeline: "14 Weeks",
        story: "The clients, a family deeply rooted in Hyderabad's heritage, wanted a home that spoke of their legacy while embracing the future. They found the original structure too compartmentalized and dark. Our goal was to open up the spaces, allowing light to flood in, while maintaining distinct zones for privacy and social gatherings.",
        transformation: "We removed three non-load-bearing walls to create a fluid living-dining-kitchen axis. The traditional 'courtyard' concept was reimagined as a central double-height light well. We used Italian marble flooring offset by warm teak wood accents to balance luxury with comfort.",
        designElements: ["Italian Marble Flooring", "Teak Wood Cladding", "Double-height Atrium", "Custom Chandelier"]
    },
    {
        id: "2",
        slug: "tech-park-office",
        title: "Tech Park Office",
        category: "Commercial",
        heroImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1920",
        images: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000",
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1000",
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000"
        ],
        description: "A collaborative workspace designed for innovation and productivity.",
        client: "InnovateTech Solutions",
        location: "Hitech City, Hyderabad",
        budget: "₹85 Lakhs",
        area: "2,500 sq ft",
        timeline: "8 Weeks",
        story: "InnovateTech needed a space that fostered collaboration without sacrificing focus. The challenge was a rigid rectangular floor plan with low ceilings. They wanted an 'industrial chic' vibe that felt energetic yet professional.",
        transformation: "We exposed the HVAC ducts and painted the ceiling charcoal black to create an illusion of height. The central spine of the office became a 'collaboration graphics' wall. Pod-style seating was introduced for focused work, interspersed with open lounge areas for impromptu meetings.",
        designElements: ["Exposed Ceiling", "Acoustic Pods", "Biophilic Design", "Industrial Lighting"]
    },
    {
        id: "3",
        slug: "modern-penthouse",
        title: "Modern Penthouse",
        category: "Residential",
        heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1920",
        images: [
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1000",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000"
        ],
        description: "Sky-high luxury with panoramic views and bespoke interiors.",
        client: "Private Client",
        location: "Financial District, Hyderabad",
        budget: "₹2.2 Cr",
        area: "3,200 sq ft",
        timeline: "12 Weeks",
        story: "With sweeping views of the city, this penthouse needed to feel like a sanctuary in the sky. The client desired a 'hotel-like' luxury with the warmth of a home.",
        transformation: "We maximized the views by orienting all major seating towards the windows. A neutral palette of greys and creams served as a canvas for the changing colors of the sky. Automated lighting and blinds were integrated for seamless control.",
        designElements: ["Smart Home Automation", "Bespoke Furniture", "Floor-to-ceiling Windows", "Minimalist Art"]
    },
    {
        id: "4",
        slug: "banjara-hills-apt",
        title: "Banjara Hills Apt",
        category: "Renovation",
        heroImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1920",
        images: [
            "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=1000",
            "https://images.unsplash.com/photo-1595514020180-272d89694766?q=80&w=1000"
        ],
        description: "Revitalizing a 90s apartment into a contemporary family home.",
        client: "Mr. & Mrs. Rao",
        location: "Banjara Hills, Hyderabad",
        budget: "₹55 Lakhs",
        area: "1,800 sq ft",
        timeline: "10 Weeks",
        story: "This older apartment had great bones but tired finishes. The challenge was updating the plumbing and electricals without destroying the vintage charm of the layout.",
        transformation: "We gutted the kitchen and bathrooms completely. The closed-off kitchen was opened up with a breakfast counter. We restored the original mosaic flooring in the balcony while laying new vitrified tiles indoors for a clean look.",
        designElements: ["Open Kitchen", "Restored Mosaic", "Pastel Color Palette", "Custom Joinery"]
    },
    {
        id: "5",
        slug: "gachibowli-villa",
        title: "Gachibowli Villa",
        category: "Residential",
        heroImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1920",
        images: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?q=80&w=1000"],
        description: "A sprawling villa designed for a large joint family.",
        client: "The Gupta Family",
        location: "Gachibowli, Hyderabad",
        budget: "₹4.0 Cr",
        area: "6,000 sq ft",
        timeline: "16 Weeks",
        story: "Designing for a joint family means balancing privacy with shared spaces. This villa needed to cater to three generations under one roof.",
        transformation: "We created multiple 'breakout' zones on each floor so different generations could host friends simultaneously. The ground floor remains the heart of the home with a massive dining table seating 12.",
        designElements: ["Multi-generational Zoning", "Grand Dining", "Terrace Garden", "Home Theatre"]
    },
    {
        id: "6",
        slug: "hitech-city-office",
        title: "Hitech City Office",
        category: "Commercial",
        heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920",
        images: ["https://images.unsplash.com/photo-1504384308090-c54be3853247?q=80&w=1000"],
        description: "A corporate headquarters that exudes authority and trust.",
        client: "Nexus Corp",
        location: "Hitech City, Hyderabad",
        budget: "₹1.2 Cr",
        area: "3,500 sq ft",
        timeline: "9 Weeks",
        story: "Nexus Corp wanted their HQ to impress international clients. They needed an aesthetic that was serious, timeless, and global.",
        transformation: "We used a palette of deep blues, walnut wood, and leather. The reception area features a statement stone wall. Boardrooms are equipped with state-of-the-art conferencing tech hidden behind sleek paneling.",
        designElements: ["Executive Boardrooms", "Premium Materials", "Brand Color Integration", "Acoustic Treatments"]
    },
    {
        id: "7",
        slug: "manikonda-home",
        title: "Manikonda Home",
        category: "Interiors",
        heroImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1920",
        images: ["https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000", "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=1000"],
        description: "A cozy and chic interior design for a young family's first home.",
        client: "The Verma Family",
        location: "Manikonda, Hyderabad",
        budget: "₹45 Lakhs",
        area: "1,500 sq ft",
        timeline: "6 Weeks",
        story: "The Vermas wanted a home that felt spacious and uncluttered despite the compact footprint. Storage was a priority, but not at the cost of aesthetics.",
        transformation: "We utilized vertical storage solutions and multi-functional furniture. A light color palette with pops of mustard yellow made the space feel vibrant and airy.",
        designElements: ["Vertical Storage", "Multi-functional Furniture", "Vibrant Accents", "Efficient Planning"]
    },
    {
        id: "8",
        slug: "kondapur-modern",
        title: "Kondapur Modern",
        category: "Renovation",
        heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1920",
        images: ["https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000"],
        description: "Transforming a dated structure into a modern architectural statement.",
        client: "Mr. Saxena",
        location: "Kondapur, Hyderabad",
        budget: "₹60 Lakhs",
        area: "3,000 sq ft",
        timeline: "12 Weeks",
        story: "Mr. Saxena inherited an old property that felt disconnected from the modern vibe of Kondapur. He wanted a complete facelift.",
        transformation: "We redesigned the facade with contemporary cladding and expanded the windows to let in more natural light. The interior layout was opened up to create a seamless flow between rooms.",
        designElements: ["Facade Facelift", "Expanded Fenestration", "Open Layout", "Contemporary Cladding"]
    },
    {
        id: "9",
        slug: "financial-district-interiors",
        title: "Financial District",
        category: "Interiors",
        heroImage: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=1920",
        images: ["https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=1000"],
        description: "Luxurious interiors for a high-rise apartment.",
        client: "Mrs. Alisha",
        location: "Financial District, Hyderabad",
        budget: "₹1.5 Cr",
        area: "2,800 sq ft",
        timeline: "10 Weeks",
        story: "Mrs. Alisha wanted her home to reflect her travels and love for art. The space needed to be a gallery as much as a home.",
        transformation: "We created dedicated art walls with gallery lighting. The furniture was selected to be sculptural and distinct. Rich textures like velvet and silk were used to add depth.",
        designElements: ["Gallery Lighting", "Sculptural Furniture", "Art Curation", "Rich Textures"]
    }
];
