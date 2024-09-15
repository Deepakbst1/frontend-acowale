import { NavLink, useNavigate } from "react-router-dom";
import "./header.scss";
import { useState } from "react";

const Header = () => {
  const [input, setInput] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`/search?query=${input}`);
      setInput("");
    }
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleNavClick = (e) => {
      
    if (!selectedCountry || !selectedLanguage) { 
      e.preventDefault();
      alert("Please select both country and language!");
    } else {
      setShowMenu(false);
    }
  };

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleHomeOnClick = () => {
    navigate("/");
  };

  return (
    <div className="header">
      <div className="material-icons home" onClick={handleHomeOnClick}>home</div>
      <nav className={`links ${showMenu ? "show" : ""}`}>
        <NavLink
          to={`/category/general?country=${selectedCountry}&language=${selectedLanguage}`}
          onClick={handleNavClick}
          className={({ isActive }) => (isActive ? "active-link" : "")}
          style={{backgroundColor:'rgb(53, 52, 52)', color:'white'}}
        >
          General
        </NavLink>
        <NavLink
          to={`/category/world?country=${selectedCountry}&language=${selectedLanguage}`}
          onClick={handleNavClick}
          className={({ isActive }) => (isActive ? "active-link" : "")}
          style={{backgroundColor:'rgb(53, 52, 52)', color:'white'}}
        >
          World
        </NavLink>
        <NavLink
          to={`/category/nation?country=${selectedCountry}&language=${selectedLanguage}`}
          onClick={handleNavClick}
          className={({ isActive }) => (isActive ? "active-link" : "")}
          style={{backgroundColor:'rgb(53, 52, 52)', color:'white'}}
        >
          Nation
        </NavLink>
        <NavLink
          to={`/category/business?country=${selectedCountry}&language=${selectedLanguage}`}
          onClick={handleNavClick}
          className={({ isActive }) => (isActive ? "active-link" : "")}
          style={{backgroundColor:'rgb(53, 52, 52)', color:'white'}}
        >
          Business
        </NavLink>
        <NavLink
          to={`/category/technology?country=${selectedCountry}&language=${selectedLanguage}`}
          onClick={handleNavClick}
          className={({ isActive }) => (isActive ? "active-link" : "")}
          style={{backgroundColor:'rgb(53, 52, 52)', color:'white'}}
        >
          Technology
        </NavLink>
        <NavLink
          to={`/category/entertainment?country=${selectedCountry}&language=${selectedLanguage}`}
          onClick={handleNavClick}
          className={({ isActive }) => (isActive ? "active-link" : "")}
          style={{backgroundColor:'rgb(53, 52, 52)', color:'white'}}
        >
          Entertainment
        </NavLink>
        <NavLink
          to={`/category/sports?country=${selectedCountry}&language=${selectedLanguage}`}
          onClick={handleNavClick}
          className={({ isActive }) => (isActive ? "active-link" : "")}
          style={{backgroundColor:'rgb(53, 52, 52)', color:'white'}}
        >
          Sports
        </NavLink>
        <NavLink
          to={`/category/science?country=${selectedCountry}&language=${selectedLanguage}`}
          onClick={handleNavClick}
          className={({ isActive }) => (isActive ? "active-link" : "")}
          style={{backgroundColor:'rgb(53, 52, 52)', color:'white'}}
        >
          Science
        </NavLink>
        <NavLink
          to={`/category/health?country=${selectedCountry}&language=${selectedLanguage}`}
          onClick={handleNavClick}
          className={({ isActive }) => (isActive ? "active-link" : "")}
          style={{backgroundColor:'rgb(53, 52, 52)', color:'white'}}
        >
          Health
        </NavLink>
        <div className="dropdowns">
        <select style={{backgroundColor:'rgb(53, 52, 52)', color:'white', border:'none'}} value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select Country</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="in">India</option>
        </select>

        <select style={{backgroundColor:'rgb(53, 52, 52)', color:'white',border:'none'}} value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="">Select Language</option>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
      </div>
      </nav>
      <div style={{backgroundColor:'rgb(53, 52, 52)', color:'white'}} className="input">
        <input
          placeholder="search your query"
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          value={input}
          type="text"
        />
      </div>
      <div onClick={handleToggleMenu} className="material-icons ham-menu">menu</div>
    </div>
  );
};

export default Header;
