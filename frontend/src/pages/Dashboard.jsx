import React, { useContext, useState } from "react";
import "./Dashboard.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MyContext } from "../context/ContextProvider";
import axios from "axios";

export default function Dashboard() {
  const { categories, setCategories, fetchingError } = useContext(MyContext);
  const [searchParam, setSearchParam] = useState("");
  const [incommingdata, setIncommingData] = useState();
  const [error, setError] = useState("");
  function findByTitle() {
    axios
      .get("http://localhost:4000/api/cards/" + searchParam)
      .then((res) => {
        console.log(res.data);
        setIncommingData(res.data);
        setError("");
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.error);
      });
  }

  if (fetchingError) {
    return (
      <div className="server-error">
        <h2>Server Error</h2>
      </div>
    );
  }

  return (
    <div style={{ flex: 1 }}>
      <div className="search-section">
        <h1>How can we help?</h1>
        <div className="search-bar">
          <input
            type="text"
            onChange={(e) => {
              setSearchParam(e.target.value);
              setError("");
              setIncommingData({});
            }}
            placeholder="Search"
          />
          <IoIosArrowRoundForward
            size={25}
            color="black"
            onClick={findByTitle}
          />
        </div>
        <p style={{ color: "red" }}>{error}</p>

        {incommingdata?.id && (
          <div className="category-card searchCard">
            <div className="title">Id: {incommingdata.id}</div>
            <div style={{ height: 1, backgroundColor: "#ddd" }}></div>
            <div className="desc">{incommingdata.description}</div>
          </div>
        )}
      </div>
      {categories.length ? (
        <div className="categories-section">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <div className="title">{category.title}</div>
              <div style={{ height: 1, backgroundColor: "#ddd" }}></div>
              <div className="desc">{category.description}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-list">List is Empty </div>
      )}
    </div>
  );
}
