import React, { useState } from "react";
import api from "./api";

export default function ItemForm({ item, onDone }) {
  const [title, setTitle] = useState(item.title || "");
  const [description, setDescription] = useState(item.description || "");

  const save = async (e) => {
    e.preventDefault();
    try {
      if (item.id) {
        await api.put(`/items/${item.id}/`, { title, description });
      } else {
        await api.post("/items/", { title, description });
      }
      onDone();
    } catch (error) {
      console.log(error);
      window.alert("Something went wrong !");
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-box">
        <h2 style={{ textAlign: "center", marginTop: 0 }}>
          {item.id ? "Edit Item" : "Add Item"}
        </h2>

        <form onSubmit={save}>
          <input
            placeholder="Title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div style={{ display: "flex", gap: "10px" }}>
            <button className="btn-primary" type="submit">
              Save
            </button>

            <button className="btn-secondary" type="button" onClick={onDone}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
