import React from "react";
import "./AppNavbar.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleFalse } from "../../JS/actions/editAction";

const AppNavbar = () => {
  const dispatch = useDispatch();
  const handleSave = ()=>{
    dispatch(toggleFalse())
  }
  return (
    <div className="app_nav">
      <h2 className="app_name">Contact App</h2>
      <Link className="dom_links" to="/">
      <h3 className="btn_nav">Home</h3>
      </Link>
      <Link className="dom_links" to="/contacts">
      <h3 className="btn_nav">Contacts list</h3>
      </Link>
      <Link className="dom_links" onClick={handleSave} to="/add">
      <h3 className="btn_nav">Add Contact</h3>
      </Link>
    </div>
  );
};

export default AppNavbar;
