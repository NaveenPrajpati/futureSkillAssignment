import React, { useState } from "react";
import axios from "axios";
import "./AddModal.css";
import { addCard } from "../services/operations";

const AddModal = ({ isOpen, onClose, getData }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      setError("Both title and description are required");
      return;
    }

    addCard(
      {
        id: Date.now(),
        title,
        description,
      },
      getData,
      setError
    );
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Add New Card</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <div className="modal-actions">
            <button
              type="button"
              onClick={() => {
                setTitle("");
                setDescription("");
                setError("");
                onClose();
              }}
            >
              Cancel
            </button>
            <button type="submit">Add Card</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModal;
