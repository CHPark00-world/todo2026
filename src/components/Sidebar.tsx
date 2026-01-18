import logo from "../assets/logo.png";
import user from "../assets/user.png";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <h2>
        <img style={{ width: "50px" }} src={logo} />
        Planner Pro
      </h2>
      <div className="menu_bar">
        <Link to="/">
          <button>Dashboard</button>
        </Link>
        <Link to="/inbox">
          <button>Inbox</button>
        </Link>
        <Link to="/report">
          <button>Report</button>
        </Link>
        <Link to="/settings">
          <button>Settings</button>
        </Link>
      </div>
      <div className="profile_bar">
        <img src={user} style={{ width: "50px" }} />
        CH Park
      </div>
    </div>
  );
};

export default Sidebar;
