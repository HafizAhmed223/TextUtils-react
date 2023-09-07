import "./App.css";
// import PropTypes from "prop-types";

import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
function App() {
  return (
    <>
      <Navbar
        title="TextUtils"
        homeTextutils="Home TextUtils"
        aboutTextutils="About TextUtils"
      />
      <div className="container my-3">
        <TextForm heading="Enter the text to Analyze" />
      </div>
    </>
  );
}

export default App;

// Navbar.PropTypes = { title: PropTypes.string.isRequired };
// Navbar.PropTypes = { aboutTextutils: PropTypes.string.isRequired };
// Navbar.PropTypes = { homeTextutils: PropTypes.string.isRequired };

// Navbar.defaultProps = {
//   title: "Set title here",
//   homeTextutils: "Home button here",
//   aboutTextutils: "About Us here",
// };
