import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import UsersList from '../components/Users/UsersList';
import './NewPlaces.css';

const Users = () => {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      title: 'Exhilarating Wilderness',
      description: 'Experience the thrill of an adventure in the wilderness.'
    },
    {
      src: 'https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
      title: 'Majestic Landscapes',
      description: 'Discover the breathtaking landscapes of the world.'
    },
    {
      src: 'https://images.unsplash.com/photo-1522878129833-838a904a0e9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Vibrant City Life',
      description: 'Explore the vibrant life of bustling cities.'
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current => (current + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const dummyUsers = [
    {
      id: 'u1',
      name: 'Max Schwarz',
      image: images[current].src,
      placeCount: 3,
    },
  ];

  return (
    <div>
      <div className="slideshow-container">
      {images.map((image, index) => (
        <div className={index === current ? 'slide active' : 'slide'} key={index}>
          {index === current && (
            <div className="image-container">
              <img src={image.src} alt='travel location' className="image" />
              <div className="image-description">
                <h2>{image.title}</h2>
                <p>{image.description}</p>
              </div>
            </div>
          )}
        </div>
      ))}
      </div>
      <div className="users-container">
        <UsersList items={dummyUsers} />
      </div>
    </div>
  );
};

export default Users;