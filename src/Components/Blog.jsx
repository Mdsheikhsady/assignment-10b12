
import React, { useState } from 'react';

const blogPosts = [
    {
        id: 1,
        title: "Top 5 Summer Care Tips for Dogs",
        author: "Dr. Michael Luna",
        date: "June 15, 2025",
        image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1000&auto=format&fit=crop",
        excerpt: "Keeping your furry friend cool during the scorching summer heat is vital for their health...",
        content: "Keeping your furry friend cool during the scorching summer heat is vital for their health. Always ensure they have access to fresh water, avoid walking them on hot pavement which can burn their paws, and never leave them in a parked car. Consider frozen treats and cooling mats to help regulate their body temperature."
    },
    {
        id: 2,
        title: "The Ultimate Guide to Cat Nutrition",
        author: "Ab Rahman",
        date: "December 02, 2025",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop",
        excerpt: "What should your cat really be eating? We dive deep into protein requirements and wet vs dry food...",
        content: "What should your cat really be eating? We dive deep into protein requirements and wet vs dry food. Cats are obligate carnivores, meaning they need meat-based proteins to thrive. Taurine is a critical amino acid for their heart and eye health. Consult with our nutritionists to find a balanced diet tailored to your cat's age and activity level."
    },
    {
        id: 3,
        title: "Why Regular Vet Checkups Matter",
        author: "Dr. Sofia Khan",
        date: "January 12, 2026",
        image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=1000&auto=format&fit=crop",
        excerpt: "Preventive care is the best way to ensure a long, happy life for your pet. Don't wait for symptoms...",
        content: "Preventive care is the best way to ensure a long, happy life for your pet. Don't wait for symptoms to appear; regular blood work and physical exams can catch issues like kidney disease or dental problems before they become severe. Early detection saves lives and reduces long-term medical costs."
    }
];

const BlogCard = ({ post }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="card bg-base-100 shadow-xl overflow-hidden border border-base-300">
            <figure className="relative h-56">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 badge badge-primary p-3 uppercase text-xs font-bold">
                    Health
                </div>
            </figure>
            <div className="card-body">
                <div className="flex items-center gap-2 text-xs opacity-60 mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>By {post.author}</span>
                </div>
                <h2 className="card-title text-2xl mb-3">{post.title}</h2>
                
                <p className="text-base-content/80 leading-relaxed">
                    {isExpanded ? post.content : post.excerpt}
                </p>

                <div className="card-actions justify-start mt-4">
                    <button 
                        onClick={() => setIsExpanded(!isExpanded)} 
                        className="btn btn-outline btn-primary btn-sm"
                    >
                        {isExpanded ? "Show Less" : "View More Details"}
                    </button>
                </div>
            </div>
        </div>
    );
};

const Blogs = () => {
    return (
        <section className="py-16 bg-base-200">
            <div className="max-w-6xl mx-auto px-4 text-center mb-12">
                <h2 className="text-4xl font-bold text-primary mb-4">Pet Care Journal</h2>
                <p className="max-w-2xl mx-auto text-base-content/70">
                    Stay updated with the latest tips, tricks, and medical advice from our professional veterinary team.
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </section>
    );
};

export default Blogs;