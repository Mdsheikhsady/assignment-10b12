import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const PopularSection = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://backend10-xi.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="lg:px-20 md:px-10 mt-8">
      <div>
        <h3 className="font-bold text-3xl text-center text-primary">
          Featured Services
        </h3>
      </div>

      {/* card */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-4 md:gap-3 max-w-6xl mx-auto px-4 mt-20">
        {services.slice(0, 6).map((service) => (
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{
              scale: 1,
              transition: { duration: 1 },
            }}
            className="card bg-base-100 w-80 shadow-sm"
          >
            <figure>
              <img
                className="w-full h-70 object-cover"
                src={service?.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service?.name}</h2>
              <div className="flex justify-between">
                <p>Price: {service?.price} $</p>
                <p>Category: {service?.category}</p>
              </div>
              <div className="card-actions justify-end">
                <Link to={`/details/${service?._id}`}>
                  <button className="btn btn-primary">View Details</button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PopularSection;
