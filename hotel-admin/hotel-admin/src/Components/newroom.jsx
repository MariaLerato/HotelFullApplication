import React, { useState, useEffect, Fragment } from "react";
import "./Styles.css";
import k from "../images/male.png";
import { Link, useParams, useNavigate } from "react-router-dom";
import { GuestListCard } from "./GuestListCard";
import "bootstrap";
import BackendInfo from "./service/guest";
import Guests from "./guestlist";
import HotelList from "./hotelList";

const SearchGuest = ({ users }) => {

  const [hotels, setGuest] = useState([]);
  const [email, setEmail] = useState("");
  console.log("users--->", users);

  const retrieveGuest = (e) => {
    BackendInfo.getAll().then((res) => {
      console.log(res.data);
      setGuest(res.data);
    });
  };

  useEffect(() => {
    retrieveGuest();
  }, []);
  const Check = (e) => {
    e.preventDefault();
    setEmail(users);
    console.log("matched");
  };
  return (
    <div className="hotels-container" style={{ backgroundColor: "#f2f9f8" }}>
      <div
        className="guestlist"
        style={{
          padding: "auto",
          margin: "auto",
          width: "80%",
          border: "0.4px solid #dcf8f4",
          marginTop: "0%",
          paddingTop: "2%",
        }}
      >
        <div className="list-hotels">
          <h2 style={{ fontFamily: "", color: "#57a99a", fontSize: "45px" }}>
            Please Select Your Hotel From The List Below{" "}
          </h2>
          <div className="cards">
            {hotels.map((data) => (
              <>
               
                  <HotelList data={data} Check={Check} users={users} />
              
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchGuest;

