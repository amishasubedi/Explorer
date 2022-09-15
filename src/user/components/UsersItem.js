import React from "react";
import Design from "../../shared/components/UI/Design";
import Card from "../../shared/components/UI/Card";
import { Link } from "react-router-dom";

const UsersItem = (props) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/places`}>
          <div className="user-item__image">
            <Design image={props.image} alt={props.name} />
          </div>

          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UsersItem;
