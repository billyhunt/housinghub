import React from "react";
import { Modal, Button } from 'react-bootstrap'
import PropertyForm from './PropertyForm'
import { addProperty } from "../actions/property";
import { searchProperties } from "../actions/search";


const addPropertyAndClose = (setShowModal) => {
  addProperty();
  setShowModal(false);
  searchProperties();
};

const PropertyModal = ({ showModal, setShowModal, formValues, setFormValues }) => {

  return (
    <>
      <Modal size="lg" show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header className="bg-info" closeButton>
          <Modal.Title className="text-light">Property Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PropertyForm formValues={formValues} setFormValues={setFormValues} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={() => addPropertyAndClose(setShowModal)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PropertyModal