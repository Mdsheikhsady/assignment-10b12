import React from 'react';

const TermsOfUse = () => {

    const lastUpdated = "January 18, 2026";

    const terms = [
        {
            title: "1. Acceptance of Terms",
            content: "By accessing and using PetHero, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site."
        },
        {
            title: "2. Medical Disclaimer",
            content: "The content on PetHero, including text, graphics, and images, is for informational purposes only. It is not a substitute for professional veterinary advice, diagnosis, or treatment. Always seek the advice of your veterinarian with any questions regarding a pet's medical condition."
        },
        {
            title: "3. User Responsibilities",
            content: "Users are responsible for providing accurate information when booking vet appointments or applying for adoptions. Any misuse of the platform, including providing false documentation or harassing staff/vets, will result in immediate account termination."
        },
        {
            title: "4. Adoption Policy",
            content: "Submitting an adoption application does not guarantee approval. PetHero and its partner shelters reserve the right to deny any application that does not meet the safety requirements for the specific animal."
        },
        {
            title: "5. Limitation of Liability",
            content: "PetHero shall not be held liable for any damages arising out of the use or inability to use the materials on our website, even if PetHero or an authorized representative has been notified of the possibility of such damage."
        },
        {
            title: "6. Modifications",
            content: "PetHero may revise these terms of use for its website at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these Terms of Use."
        }
    ];

    return (
        <section className="py-16 bg-base-100 min-h-screen">
            <div className="max-w-4xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-primary mb-2">Terms of Use</h1>
                    <p className="text-base-content/60 italic">Last Updated: {lastUpdated}</p>
                </div>

                {/* Content Container */}
                <div className="bg-base-200 p-8 rounded-3xl shadow-inner border border-base-300">
                    <p className="mb-8 text-lg leading-relaxed">
                        Welcome to PetHero. Please read these terms carefully before using our platform. These terms govern your use of our website and services.
                    </p>

                    <div className="space-y-10">
                        {terms.map((item, index) => (
                            <div key={index} className="group">
                                <h2 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
                                    <span className="bg-primary text-primary-content w-8 h-8 rounded-full flex items-center justify-center text-sm">
                                        {index + 1}
                                    </span>
                                    {item.title}
                                </h2>
                                <p className="text-base-content/80 leading-relaxed pl-10">
                                    {item.content}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-base-300 text-center">
                        <p className="text-sm opacity-60">
                            If you have any questions regarding these terms, please contact us at 
                            <span className="text-primary font-semibold ml-1">support@petmart.com</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TermsOfUse;