import React, { useEffect, useState } from "react";
import api from "./api";
import ItemForm from "./ItemForm";
import Weather from "./Weather";

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadItems = async () => {
    setLoading(true);
    try {
      const res = await api.get("/items/");
      setItems(res.data);
    } catch (error) {
      console.log(
        error?.message || "Something went wrong while fetching items !"
      );
      window.alert("Something went wrong !");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  const deleteItem = async (id) => {
    try {
      await api.delete(`/items/${id}/`);
      loadItems();
    } catch (error) {
      console.log(error);
      window.alert("Something went wrong !");
    }
  };

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          marginBottom: 20,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Weather />
        <div style={{display:"flex", alignItems: "center"}}>
          <button className="btn-primary" onClick={() => setEditing({})}>
            + Add New Item
          </button>
        </div>
      </div>

      {editing && (
        <ItemForm
          item={editing}
          onDone={() => {
            setEditing(null);
            loadItems();
          }}
        />
      )}

      {loading && (
        <h3 style={{ textAlign: "center", color: "#555" }}>Loading...</h3>
      )}

      {!loading &&
        items.map((item) => (
          <div key={item.id} className="item-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <div className="item-actions">
              <button
                className="btn-secondary"
                onClick={() => setEditing(item)}
              >
                Edit
              </button>
              <button
                className="btn-danger"
                onClick={() => deleteItem(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
