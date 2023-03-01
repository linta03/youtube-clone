import React from "react";
import "../styles/sidebar.css";
import { AiFillHome, AiFillLike } from "react-icons/ai";
import { MdOutlineSubscriptions, MdPlaylistAdd } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ ShowNavbar }) => {
  return (
    <div className={ShowNavbar ? "sidebar" : "sidebar tansform"}>
      <div className="sidebar_items">
        <ul>
          <Link to="/">
            <li>
              <AiFillHome size={20} />
              <p>Home</p>
            </li>
            </Link>
          <li>
            <MdOutlineSubscriptions size={20} />
            <p>Subscription</p>
          </li>
          <li>
            <FaHistory size={20} />
            <p>History</p>
          </li>
          <li>
            <MdPlaylistAdd size={25} />
            <p>Playlist</p>
          </li>
          <li>
            <AiFillLike size={20} />
            <p>Liked Videos</p>
          </li>
        </ul>
      </div>
      <hr color="gray" />
    </div>
  );
};

export default Sidebar;
