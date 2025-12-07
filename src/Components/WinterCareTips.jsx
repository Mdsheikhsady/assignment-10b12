import React from 'react';

const tips =[
  {
    "id": 1,
    "image": "https://i.postimg.cc/wvXw9CLT/dog.png",
    "title": "Keep Your Pet Warm",
    "description": "Provide warm bedding and winter-appropriate clothing to protect your pet from cold temperatures."
  },
  {
    "id": 2,
    "image": "https://i.postimg.cc/YSk4JTrk/dog-(1).png",
    "title": "Protect Their Paws",
    "description": "Use paw balm or dog boots to prevent cracks and irritation from snow, ice, and salt."
  },
  {
    "id": 3,
    "image": "https://i.postimg.cc/LX8JsfZY/pet-care.png",
    "title": "Maintain Proper Hydration",
    "description": "Pets can get dehydrated in winter too, so ensure fresh water is always available and not frozen."
  },
  {
    "id": 4,
    "image": "https://i.postimg.cc/wxP161qC/animal-care.png",
    "title": "Limit Outdoor Time",
    "description": "Avoid long outdoor exposure during extremely cold weather to protect your pet from frostbite and hypothermia."
  }
]

const WinterCareTips = () => {
    return (
        <div className='py-12 bg-base-100'>
            <h2 className='text-3xl font-bold text-center text-primary mb-8'>
                Winter Care Tips for Pets
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4'>
                {
                    tips.map((tip) => (
                        <div key={tip.id} className='card bg-base-200 shadow-lg'> 
                            <figure>
                                <img src={tip.image}
                                alt={tip.name}
                                className='mt-10 w-10 h-10'/>
                            </figure>
                            <div className='card-body'>
                                <h3 className='card-title text-primary'>{tip.title}</h3>
                                <p className='opacity-70 text-sm'> {tip.description}</p>

                            </div>
                        </div>
                    ))}

            </div>
                       
        </div>
    );
};

export default WinterCareTips;