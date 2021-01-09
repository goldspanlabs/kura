import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import TabInputs from "./TabInputs";

const EditTransactionModal = ({
  show,
  selectedTrans,
  accounts,
  handleClose,
  handleCloseAndUpdate,
}) => {
  const [cache, setCache] = useState({ id: selectedTrans.id, object: {} });

  return (
    <Modal show={show} onHide={handleClose} size={"sm"} centered>
      <Modal.Header>
        <Modal.Title>Edit Transaction</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {selectedTrans && selectedTrans.option_type ? (
          <TabInputs
            transaction={selectedTrans}
            cache={cache}
            accounts={accounts}
            handleChange={(cache) => {
              setCache({ ...cache, id: selectedTrans.id });
            }}
            isOption={true}
          />
        ) : (
          <TabInputs
            transaction={selectedTrans}
            cache={cache}
            accounts={accounts}
            handleChange={(cache) => {
              setCache({ ...cache, id: selectedTrans.id });
            }}
            isOption={false}
          />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          as="input"
          type="button"
          variant="secondary"
          onClick={handleClose}
          value="Close"
        />
        <Button
          as="input"
          variant="primary"
          onClick={() => {
            handleCloseAndUpdate(cache);
          }}
          type="submit"
          value="Save Changes"
        />
      </Modal.Footer>
    </Modal>
  );
};

export default EditTransactionModal;
