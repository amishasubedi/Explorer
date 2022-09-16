import React from "react";

import PlaceDescription from "./PlaceDescription";
import "./PlaceList.css";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>
            No places found to show, maybe create one?
            <button>Share Place</button>
          </h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceDescription
          key={place.id}
          id={place.id}
          image={place.image}
          title={(place, title)}
          description={place.des}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};
