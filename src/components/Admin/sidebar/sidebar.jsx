import "../sidebar/sidebar.css";
import logo from "../../../assets/Logo.png";
import { useState } from "react";

function Sidebar({ changePage, activePage }) {
  return (
    <div>
      <div className="sidenav">
        <img src={logo} alt="Logo" />
        <ul>
          <li
            className={activePage === "overview" ? "active-button" : ""}
            onClick={() => {
              changePage("overview");
            }}
          >
            Overview
          </li>
          <li
            className={activePage === "customers" ? "active-button" : ""}
            onClick={() => {
              changePage("customers");
            }}
          >
            Customers
          </li>
          <li
            className={activePage === "sellers" ? "active-button" : ""}
            onClick={() => {
              changePage("sellers");
            }}
          >
            Sellers
          </li>
          <li
            className={activePage === "settings" ? "active-button" : ""}
            onClick={() => {
              changePage("settings");
            }}
          >
            Settings
          </li>
          <li
            className={activePage === "account" ? "active-button" : ""}
            onClick={() => {
              changePage("account");
            }}
          >
            Account
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
