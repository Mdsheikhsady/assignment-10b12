import React from 'react';

const vets = [
    {
    id: 1,
    name: "Michael Luna",
    specialization: "Veterinary Surgeon",
    experience: "7 years",
    image: "https://animalfriendlylife.com.au/wp-content/uploads/2022/06/2022_04_12_PETSTOCK27420_pic_EugeneHyland-683x1024.jpg.webp"
  },
  {
    id: 2,
    name: "Ab Rahman",
    specialization: "Animal Nutrition Specialist",
    experience: "5 years",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdXsWE3ByHOXu6KsA48-m-oXi3IZckmS4leA&s"
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
                                <button className='btn btn-primary btn-sm mt-3'>See Details</button>

                            </div>
                        </div>
                    ))}

            </div>
                       
        </div>
    );
};

export default MeetOurVets;