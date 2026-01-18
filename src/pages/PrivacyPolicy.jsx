import React from 'react';


const PrivacyPolicy = () => {
    const lastUpdated = "January 18, 2026";

    const sections = [
        {
            title: "1. Information We Collect",
            content: "We collect personal information that you provide to us, such as your name, email address, and phone number. We also collect specific pet data, including pet names, breeds, vaccination records, and medical histories to provide better care."
        },
        {
            title: "2. How We Use Your Data",
            content: "Your information is used to facilitate pet adoptions, schedule veterinary appointments, and send health reminders. We may also use data for internal analytics to improve our pet hero services."
        },
        {
            title: "3. Sharing with Third Parties",
            content: "We do not sell your personal data. We only share information with trusted partners, such as licensed veterinarians and payment processors, solely to fulfill the services you request."
        },
        {
            title: "4. Your Rights & Choices",
            content: "You have the right to access, correct, or delete your personal information at any time. You can also opt-out of our community newsletter by clicking the 'unsubscribe' link in any email."
        },
        {
            title: "5. Data Security",
            content: "We implement industry-standard security measures, including SSL encryption and secure server hosting, to protect your and your pet's sensitive information."
        }
    ];

    return (
        <section className="py-16 bg-base-100 min-h-screen">
            <div className="max-w-4xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-primary mb-2">Privacy Policy</h1>
                    <p className="text-base-content/60 italic">Last Updated: {lastUpdated}</p>
                </div>

                <div className="prose prose-lg max-w-none text-base-content/80">
                    <p className="mb-8">
                        At <strong>PetHero</strong>, we are committed to protecting the privacy of both our human users and their furry companions. This policy outlines our practices regarding data collection and usage.
                    </p>

                    <div className="space-y-8">
                        {sections.map((section, index) => (
                            <div key={index} className="border-l-4 border-primary pl-6 py-2">
                                <h2 className="text-2xl font-bold text-base-content mb-3">
                                    {section.title}
                                </h2>
                                <p className="leading-relaxed">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-6 bg-base-200 rounded-2xl text-center">
                        <h3 className="text-xl font-bold mb-2">Have questions about your data?</h3>
                        <p className="mb-4">Contact our Data Protection Officer at:</p>
                        <a href="mailto:privacy@pethero.com" className="btn btn-primary btn-outline">
                            privacy@petmart.com
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;