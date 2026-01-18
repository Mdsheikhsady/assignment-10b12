import React from 'react';

const reviews = [
    {
        id: 1,
        name: "Jessica Miller",
        role: "Cat Parent",
        text: "The medical care my cat received was top-notch. The vets here truly love animals and it shows in their work!",
        rating: 5,
        image: "https://i.pravatar.cc/150?u=jessica"
    },
    {
        id: 2,
        name: "David Chen",
        role: "Dog Owner",
        text: "Finding a reliable vet for my Husky was hard until I found this platform. Booking was incredibly easy and fast.",
        rating: 4,
        image: "https://i.pravatar.cc/150?u=david"
    },
    {
        id: 3,
        name: "Emily Watson",
        role: "Animal Rescuer",
        text: "The adoption process was so transparent. I've recommended this site to all my friends looking for a new furry friend.",
        rating: 5,
        image: "https://i.pravatar.cc/150?u=emily"
    }
];

const Testimonials = () => {
    return (
        <section className="py-16 bg-base-100">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-primary mb-2">Happy Pet Parents</h2>
                <p className="text-base-content/70 mb-10">Read what our community has to say about us</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div key={review.id} className="card bg-base-200 shadow-xl p-8 flex flex-col items-center">
                            {/* Customer Image */}
                            <div className="avatar mb-4">
                                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={review.image} alt={review.name} />
                                </div>
                            </div>

                            {/* Rating Stars */}
                            <div className="rating rating-sm mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <input 
                                        key={i}
                                        type="radio" 
                                        name={`rating-${review.id}`} 
                                        className={`mask mask-star-2 ${i < review.rating ? 'bg-orange-400' : 'bg-gray-300'}`} 
                                        disabled 
                                    />
                                ))}
                            </div>

                            {/* Quote Text */}
                            <p className="italic text-base-content/80 mb-6 flex-grow">
                                "{review.text}"
                            </p>

                            {/* Name and Role */}
                            <div>
                                <h4 className="font-bold text-lg">{review.name}</h4>
                                <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                                    {review.role}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;