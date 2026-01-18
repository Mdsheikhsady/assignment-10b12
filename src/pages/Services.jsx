import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Services = () => {
  const [services, setServices] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const query = category ? `?category=${category}` : "";
    fetch(`https://backend10-xi.vercel.app/services${query}`)
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, [category]);

  console.log(category);

  return (
    <div>
      <div className="mt-20 text-right mr-10">
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="select"
        >
          <option value="">All categories</option>
          <option value="Pets">Pets</option>
          <option value="Food">Food</option>
          <option value="Accessories">Accessories</option>
          <option value="Care Products">Care Products</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-6 md:gap-3 max-w-6xl mx-auto px-4 mt-20">
        {services.map((service) => (
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

export default Services;
