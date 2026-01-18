import React from 'react';

const NewsletterCTA = () => {
  return (
    <div className="max-w-6xl mx-auto my-16 px-4">
      <div className="bg-primary text-secondary-content rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-md">
          <h2 className="text-4xl font-bold mb-4">Join our Pet Community</h2>
          <p>Get the latest pet care tips and adoption alerts straight to your inbox.</p>
        </div>
        <div className="flex flex-col w-full max-w-sm gap-2">
          <div className="join w-full">
            <input className="input input-bordered join-item w-full text-base-content" placeholder="Email Address"/>
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
          <p className="text-xs opacity-70 mt-2 text-center">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </div>
    </div>
  );
};
export default NewsletterCTA;