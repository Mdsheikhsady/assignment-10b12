import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddService = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
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
    };
    console.log(formData);

    axios
      .post("https://backend10-xi.vercel.app/services", formData)
      .then((res) => {
        console.log(res);

        if (res.data.acknowledged) {
          Swal.fire({
            title: "Service is Created Successfully!",
            icon: "success",
            draggable: true,
          });
          form.reset();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-10">
      <h2 className="text-2xl font-bold mb-4">Create Listing</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product/Pet Name */}
        <div>
          <label className="block font-semibold mb-1">Product / Pet Name</label>
          <input
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
            name="category"
            className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            placeholder="Select category"
          >
            <option value="">Select category</option>
            <option value="Pets">Pets</option>
            <option value="Food">Food</option>
            <option value="Accessories">Accessories</option>
            <option value="Care Products">Care Products</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block font-semibold mb-1">Price</label>
          <input
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddService;
