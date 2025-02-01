import React from 'react';

function App() {
  const restaurants = [
    {
      id: 1,
      name: 'The Italian Place',
      cuisine: 'Italian',
      description: 'Authentic Italian cuisine with a cozy atmosphere.',
    },
    {
      id: 2,
      name: 'Spice Route',
      cuisine: 'Indian',
      description: 'A journey through the flavors of India.',
    },
    {
      id: 3,
      name: 'Sushi Bar',
      cuisine: 'Japanese',
      description: 'Fresh and delicious sushi and Japanese dishes.',
    },
  ];

  return (
    <div className="container">
      <h1>Welcome to Our Restaurants</h1>
      <div className="restaurant-list">
        {restaurants.map(restaurant => (
          <div key={restaurant.id} className="restaurant-card">
            <h2>{restaurant.name}</h2>
            <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
            <p>{restaurant.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
