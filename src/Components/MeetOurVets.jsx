import React from 'react';

const vets = [
    {
    id: 1,
    name: "Dr. Michael Thompson",
    specialization: "Veterinary Surgeon",
    experience: "7 years",
    image: "https://i.postimg.cc/m2Yvp9Ks/vitaly-gariev-VAvk-Pt-F4HJI-unsplash.jpg"
  },
  {
    id: 2,
    name: "Dr. Ab Rahman",
    specialization: "Animal Nutrition Specialist",
    experience: "5 years",
    image: "https://i.postimg.cc/TYf7w4H3/usman-yousaf-PVjf-Lss3b-c-unsplash.jpg"
  },
  {
    id: 3,
    name: "Dr. Sofia Khan",
    specialization: "Pet Dermatology & Skin Care",
    experience: "9 years",
    image: "https://i.postimg.cc/s2QKqd1M/bermix-studio-ODM-Vs-TM2QQ-unsplash.jpg"
  }
]

const MeetOurVets = () => {


    return (
        <div className='py-12 bg-base-100'>
            <h2 className='text-3xl font-bold text-center text-primary mb-8'>
                Meet Our Pet Heroes
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4'>
                {
                    vets.map((vet) => (
                        <div key={vet.id} className='card bg-base-200 shadow-lg'> 
                            <figure>
                                <img src={vet.image}
                                alt={vet.name}
                                className='h-48 w-full object-cover'/>
                            </figure>
                            <div className='card-body'>
                                <h3 className='card-title text-primary'>{vet.name}</h3>
                                <p className='text-sm font-semibold'>{vet.specialization}</p>
                                <p className='opacity-70 text-sm'>Experience: {vet.experience}</p>
                                <button className='btn btn-primary btn-sm mt-3'>Book Appointment</button>

                            </div>
                        </div>
                    ))}

            </div>
                       
        </div>
    );
};

export default MeetOurVets;