import React, { useState } from 'react';

const Sell = () => {
  const [product, setProduct] = useState({ name: '', description: '', price: '', category: '', images: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    // Here you would integrate with your Express API
  }

  return (
    <div>
      <h1>Sell a Product</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="text" name="description" placeholder="Description" onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
        <input type="text" name="category" placeholder="Category" onChange={handleChange} required />
        <input type="text" name="images" placeholder="Images" onChange={handleChange} />
        <button type="submit">Sell</button>
      </form>
    </div>
  );
}

export default Sell;
