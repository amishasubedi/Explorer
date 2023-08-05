import React from "react";

import { useParams } from "react-router";
import PlaceList from "../components/Places/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Gringotts Bank",
    description: "Banks for wizard",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/21/Diagon_Alley3.jpg",
    address: "6000 Universal Blvd, Orlando, FL 32819",
    location: {
      lat: 28.4740008,
      lng: -81.4657363,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId); // seperate places based on user id
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;