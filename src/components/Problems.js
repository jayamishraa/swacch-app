import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Button } from "@mui/material";
import API from "../api/api";
import SimpleModal from "./SimpleModal";

function Problems() {
  const [data, setData] = useState();
  const [showAll, setShowAll] = useState(false);
  const handleToggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  const [loading, setLoading] = useState(false);
  let count = 1;

  const [apiData, setApiData] = useState([]);
  const getApiData = async () => {
    setLoading(true);
    try {
      const res = await API.get("/All-problems");
      setApiData(res.data.problems);
      setLoading(false);
    } catch (err) {
      setApiData(err);
    }
  };

  const [modalOpenStates, setModalOpenStates] = useState([]);

  useEffect(() => {
    getApiData();
    // Initialize modalOpenStates with the same length as apiData, all set to false
    setModalOpenStates(Array(apiData.length).fill(false));
  }, []);

  // Function to open the modal for a specific item
  const handleOpenModal = (index) => {
    const newModalOpenStates = [...modalOpenStates];
    newModalOpenStates[index] = true;
    setModalOpenStates(newModalOpenStates);
  };

  // Function to close the modal for a specific item
  const handleCloseModal = (index) => {
    const newModalOpenStates = [...modalOpenStates];
    newModalOpenStates[index] = false;
    setModalOpenStates(newModalOpenStates);
  };

  return (
    <div className="problems">
      <h1>
        Problems
        <button onClick={handleToggleShowAll}>+</button>
      </h1>
      {showAll
        ? apiData.map((data, index) => {
            const { _id, name, location } = data;
            return (
              <div key={_id}>
                <div className="problems-tile">
                  <div>{count++}</div>
                  <b>{name}</b>
                  <div>{location}</div>
                  <div className="problems-tile-button">
                    <Button
                      variant="contained"
                      onClick={() => handleOpenModal(index)}
                    >
                      Expand
                    </Button>
                    
                    
                  </div>
                </div>
                <SimpleModal
                  id={_id}
                  open={modalOpenStates[index]}
                  setOpen={() => handleCloseModal(index)}
                />
              </div>
            );
          })
        : apiData.slice(0, 6).map((data, index) => {
            const { _id, name, location } = data;
            return (
              <div key={_id}>
                <div className="problems-tile">
                  <div>{count++}</div>
                  <b>{name}</b>
                  <div>{location}</div>
                  <div className="problems-tile-button">
                    <Button
                      variant="contained"
                      onClick={() => handleOpenModal(index)}
                    >
                      Expand
                    </Button>


                  </div>
                </div>
                <SimpleModal
                  id={_id}
                  open={modalOpenStates[index]}
                  setOpen={() => handleCloseModal(index)}
                />
              </div>
            );
          })}
      <Outlet />
    </div>
  );
}

export default Problems;
