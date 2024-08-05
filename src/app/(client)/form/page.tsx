"use client";
import React, { useState } from "react";

export default function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address_line1: "",
    address_line2: "",
    city: "",
    state: "",
    country: "",
    postal_code: "",
    role: "provider",
    profile_picture_url: "",
  });

  // Handler for input elements
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    console.log(formData);
  };

  // Handler for select elements
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Submit logic here

    console.log(formData);
  };

  const response = async () => {
    await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          name: formData.name,
          email: formData.email,
          password_hash: formData.password, // Hash the password on the server
          phone: formData.phone,
          role: formData.role,
          profile_picture_url: formData.profile_picture_url,
        },
        address: {
          address_line1: formData.address_line1,
          address_line2: formData.address_line2,
          city: formData.city,
          state: formData.state,
          country: formData.country,
          postal_code: formData.postal_code,
        },
      }),
    });
  };

  // const result = (async() = await response.json());
  // if (response.ok) {
  //   console.log("User created successfully:", result);
  // } else {
  //   console.error("Error creating user:", result);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Name"
        required
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
        type="email"
        required
      />
      <input
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Password"
        type="password"
        required
      />
      <input
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        placeholder="Phone"
      />
      <input
        name="profile_picture_url"
        value={formData.profile_picture_url}
        onChange={handleInputChange}
        placeholder="Profile Picture URL"
      />

      <h2>Address Information</h2>
      <input
        name="address_line1"
        value={formData.address_line1}
        onChange={handleInputChange}
        placeholder="Address Line 1"
        required
      />
      <input
        name="address_line2"
        value={formData.address_line2}
        onChange={handleInputChange}
        placeholder="Address Line 2"
      />
      <input
        name="city"
        value={formData.city}
        onChange={handleInputChange}
        placeholder="City"
        required
      />
      <input
        name="state"
        value={formData.state}
        onChange={handleInputChange}
        placeholder="State"
        required
      />
      <input
        name="country"
        value={formData.country}
        onChange={handleInputChange}
        placeholder="Country"
        required
      />
      <input
        name="postal_code"
        value={formData.postal_code}
        onChange={handleInputChange}
        placeholder="Postal Code"
        required
      />

      <select name="role" value={formData.role} onChange={handleSelectChange}>
        <option value="provider">Provider</option>
        <option value="renter">Renter</option>
        <option value="admin">Admin</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}
