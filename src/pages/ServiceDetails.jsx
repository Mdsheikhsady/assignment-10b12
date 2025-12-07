import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const ServiceDetails = () => {
  const [service, setService] = useState([]);
  const { myId } = useParams();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://backend10-xi.vercel.app/services/${myId}`)
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch((err) => console.log(err));
  }, [myId]);

  const handleOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const buyerName = form.buyerName.value;
    const buyerEmail = form.buyerEmail.value;
    const quantity = parseInt(form.quantity.value);
    const price = parseInt(form.price.value);
    const address = form.address.value;
    const phone = form.phone.value;
    const note = form.note.value;

    const formData = {
      productId: myId,
      productName,
      buyerName,
      buyerEmail,
      quantity,
      price,
      address,
      phone,
      note,
      date: new Date(),
    };
    axios
      .post("https://backend10-xi.vercel.app/orders", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!service)
    return (
      <p class className="text-center p-10">
        Loading...
      </p>
    );

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="shadow-lg rounded-xl p-5 border bg-white">
        <img src={service?.image} alt="" className="w-full rounded-lg mb-4" />
        <h2 className="text-2xl font-bold mb-2">{service?.name}</h2>
        <p>
          <strong>Category: </strong>
          {service?.category}
        </p>
        <p>
          <strong>Price: </strong>
          {service?.price}
        </p>
        <p>
          <strong>Description: </strong>
          {service?.description}
        </p>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Adapt/Order
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>

            {/* copied from daisyui order */}
            <form
              onSubmit={handleOrder}
              className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4"
            >
              <legend className="fieldset-legend">Order details</legend>

              <label className="label">Product Name</label>
              <input
                readOnly
                defaultValue={service?.name}
                name="productName"
                type="text"
                className="input w-full"
                placeholder="Product Name"
              />

              <label className="label">Buyer Name</label>
              <input
                defaultValue={user?.displayName}
                name="buyerName"
                type="text"
                className="input w-full"
                placeholder="Name"
              />

              <label className="label">Buyer email</label>
              <input
                readOnly
                defaultValue={user?.email}
                name="buyerEmail"
                type="email"
                className="input w-full"
                placeholder="Email"
              />

              <label className="label">Quantity</label>
              <input
                required
                type="number"
                name="quantity"
                className="input w-full"
                placeholder="Quantity"
              />

              <label className="label">Price</label>
              <input
                readOnly
                defaultValue={service?.price}
                name="price"
                type="number"
                className="input w-full"
                placeholder="Price"
              />

              <label className="label">Address</label>
              <input
                required
                name="address"
                type="text"
                className="input w-full"
                placeholder="Address"
              />

              <label className="label">Phone</label>
              <input
                required
                name="phone"
                type="text"
                className="input w-full"
                placeholder="Phone"
              />

              <label className="label">Additional Note</label>
              <textarea
                name="note"
                type="text"
                className="input w-full"
                placeholder="Additional Note"
              />

              <button type="submit" className="btn btn-primary">
                Order
              </button>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default ServiceDetails;
