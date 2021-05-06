import React from "react";
import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = (props) => {
  const [showModal, setShowModal] = useState(false);

  const deleteHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {showModal && <Modal onCancel={closeModalHandler} />}
      {showModal && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
};

export default Todo;
