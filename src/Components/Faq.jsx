import React from 'react';

const faqData = [
    {
        category: "Adoption",
        questions: [
            {
                q: "What is the process for adopting a pet?",
                a: "The process involves browsing our available pets, submitting an application, a brief interview with our coordinators, and a meet-and-greet. If everything goes well, you can take your new friend home after the paperwork is finalized!"
            },
            {
                q: "Are the pets vaccinated before adoption?",
                a: "Yes, all pets listed for adoption are up-to-date on age-appropriate vaccinations, have been dewormed, and are microchipped."
            }
        ]
    },
    {
        category: "Veterinary Services",
        questions: [
            {
                q: "How do I book an appointment with a specific vet?",
                a: "Visit the 'Meet Our Vets' section, click on the vet's profile, and select 'Book Appointment'. You can choose a time slot that fits your schedule."
            },
            {
                q: "Do you offer emergency 24/7 services?",
                a: "While our standard consultations are during business hours, we have a partner network of emergency clinics listed in our 'Emergency' tab for after-hours care."
            }
        ]
    },
    {
        category: "General",
        questions: [
            {
                q: "How can I donate or volunteer?",
                a: "We love our volunteers! You can head to the 'Support Us' page to find information on monetary donations, food drives, or signing up for shelter shifts."
            },
            {
                q: "Can I list a pet for rehoming?",
                a: "Yes, we have a 'Rehoming' portal where you can submit details. Our team reviews every listing to ensure the safety and well-being of the animal before it goes live."
            }
        ]
    }
];

const FAQ = () => {
    return (
        <section className="py-16 bg-base-100">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
                    <p className="text-base-content/70">Everything you need to know about our services and pet care.</p>
                </div>

                {faqData.map((section, idx) => (
                    <div key={idx} className="mb-8">
                        <h3 className="text-xl font-bold mb-4 text-primary border-b pb-2">
                            {section.category}
                        </h3>
                        <div className="space-y-3">
                            {section.questions.map((item, i) => (
                                <div key={i} className="collapse collapse-arrow bg-base-200 shadow-sm">
                                    <input type="radio" name="faq-accordion" /> 
                                    <div className="collapse-title text-lg font-medium">
                                        {item.q}
                                    </div>
                                    <div className="collapse-content"> 
                                        <p className="text-base-content/80">{item.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;