import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { LuArrowUpRightSquare } from "react-icons/lu";
import AddModal from "./AddModal";
import { MyContext } from "../context/ContextProvider";
import axios from "axios";

export default function Navbar() {
  const { categories, setCategories, fetchingError, setFetchingError } =
    useContext(MyContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const getData = () => {
    axios
      .get("http://localhost:4000/api/cards")
      .then((res) => {
        setCategories(res.data);
        setIsModalOpen(false);
      })
      .catch((err) => {
        console.log(err);
        setFetchingError(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <nav className="header">
      <AddModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        getData={getData}
      />
      <div className="header-container">
        <div className="logo">
          <LuArrowUpRightSquare
            color="black"
            size={20}
            style={{ backgroundColor: "white", borderRadius: 5, padding: 2 }}
          />
          Abstract | Help Center
        </div>
        <button className="submit-request-btn" onClick={handleOpenModal}>
          Submit a request
        </button>
      </div>
    </nav>
  );
}
