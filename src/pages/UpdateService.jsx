import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateService = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [service, setService] = useState();
  const [category, setCategory] = useState(service?.category);
  const navigation = useNavigate();

  useEffect(() => {
    axios.get(`https://backend10-xi.vercel.app/services/${id}`).then((res) => {
      setService(res.data);
      setCategory(res.data.category);
    });
  }, [id]);

  console.log(service);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const category = form.category.value;
    const price = parseInt(form.price.value);
    const location = form.location.value;
    const description = form.description.value;
    const image = form.image.value;
    const date = form.date.value;
    const email = form.email.value;

    const formData = {
      name,
      category,
      price,
      location,
      description,
      image,
      date,
      email,
      createdAt: service?.createdAt,
    };
    console.log(formData);

    axios
      .put(`https://backend10-xi.vercel.app/update/${id}`, formData)
      .then((res) => {
        console.log(res.data);
        navigation("/my-services");
        toast.success("update successfully completed");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-10">
      <h2 className="text-2xl font-bold mb-4">Update Listing</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        {/* Product/Pet Name */}
        <div>
          <label className="block font-semibold mb-1">Product / Pet Name</label>
          <input
            defaultValue={service?.name}
            type="text"
            name="name"
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            placeholder="Enter name"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold mb-1">Category</label>
          <select
            value={category}
            name="category"
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Select category"
            required
          >
            <option>Select category</option>
            <option>Pets</option>
            <option>Food</option>
            <option>Accessories</option>
            <option>Care Products</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block font-semibold mb-1">Price</label>
          <input
            defaultValue={service?.price}
            name="price"
            type="number"
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            placeholder="Enter price"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-semibold mb-1">Location</label>
          <input
            defaultValue={service?.location}
            name="location"
            type="text"
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            placeholder="Enter location"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            defaultValue={service?.description}
            name="description"
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            rows="4"
            placeholder="Write description..."
            required
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-semibold mb-1">Image URL</label>
          <input
            defaultValue={service?.image}
            name="image"
            type="url"
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            placeholder="https://example.com/image.jpg"
            required
          />
        </div>

        {/* Date */}
        <div>
          <label className="block font-semibold mb-1">Pick-up Date</label>
          <input
            defaultValue={service?.date}
            name="date"
            type="date"
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            value={user?.email}
            name="email"
            type="email"
            className="w-full border px-4 py-2 rounded-lg bg-gray-100"
            readOnly
          />
        </div>

        {/* Submit Button */}
        <button
          name="submit"
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateService;
