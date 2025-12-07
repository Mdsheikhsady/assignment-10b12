import React from 'react';

const tips =[
  {
    "id": 1,
    "image": "https://i.postimg.cc/wvXw9CLT/dog.png",
    "title": "Save a Life",
    "description": "Every adoption helps reduce the number of homeless animals and gives a deserving pet a second life chance."
  },
  {
    "id": 2,
    "image": "https://i.postimg.cc/YSk4JTrk/dog-(1).png",
    "title": "Find the Perfect Match",
    "description": "Choose from a wide variety of pets to find the one that fits your lifestyle and family best."
  },
  {
    "id": 3,
    "image": "https://i.postimg.cc/LX8JsfZY/pet-care.png",
    "title": "Trusted Adoption Process",
    "description": "Every pet is health-checked, and cared for with love before being listed for adoption."
  },
  {
    "id": 4,
    "image": "https://i.postimg.cc/wxP161qC/animal-care.png",
    "title": "Support After Adoption",
    "description": "Get guidance on food, training, and healthcare to ensure your new pet settles in comfortably."
  }
]

const PetAdopt = () => {
    return (
        <div className='py-12 bg-base-100'>
            <h2 className='text-3xl font-bold text-center text-primary mb-8'>
                Why Adopt from PetMart?
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

export default PetAdopt;