import React, { useContext, useState } from "react";

import Modal from '../../UI/Modal';
import Card from "../../UI/Card";
import Button from "../CustomButtons/Button";
import "./PlaceDescription.css";
import { AuthContext } from "../../context/auth-context";

const PlaceDescription = (props) => {
  const auth = useContext(AuthContext)
  const [showMap, setShowMap] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openMapHandler = () => {
    setShowMap(true);
  };

  const closeMapHandler = () => {
    setShowMap(false);
  };

  const showDeleteWarningHandler= () => {
    setShowModal(true);
  }

  const cancelDeleteHandler = () => {
    setShowModal(false);
  }

  const confirmDeleteHandler = () => {
    // remove data from db later
    setShowModal(false);
    console.log('DELETING......')
  }

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="pleace-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <h2>map</h2>
        </div>
      </Modal>

      <Modal show = {showModal} header = "Are you sure?" footerClass = "place-item__modal-actions" footer = {
        <React.Fragment>
          <Button inverse onClick = {cancelDeleteHandler}>CANCEL</Button>
          <Button danger onClick = {confirmDeleteHandler}>DELETE</Button>
        </React.Fragment>
      }>
        <p>Do you want to proceed and delete this place?</p>
        </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>

          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>

          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            {auth.isLoggedIn && (
              <Button to={`/places/${props.id}`}>EDIT</Button>
            )}

            {auth.isLoggedIn && (
              <Button danger onClick = {showDeleteWarningHandler}>DELETE</Button>
            )}
            
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceDescription;