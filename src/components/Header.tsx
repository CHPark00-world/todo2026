import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="header_data">{new Date().toDateString()}</div>
      <div className="header_quote">DREAM BIG, WORK HARD.</div>
    </div>
  );
};

export default Header;
