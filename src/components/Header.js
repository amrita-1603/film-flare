import React from "react";
import "../styles.css";
function Header() {
  return (
    <header className="header">
    <img src="logo.png" alt="Logo" className="logo" />
      <h2 className="app-subtitle">It's time for popcorn! Find your next movie here.</h2>
    </header>
  );
}
export default Header;
// This code defines a React functional component named Header.
// It imports React and a CSS file for styling. The component returns a header element
// containing a title and a description. The class names used in the JSX correspond to styles defined in the imported CSS file.
// The component can be used in other parts of the application to display a consistent header across different pages or components.
// The header includes a main title and a brief description, making it suitable for use in a web application to introduce the app's purpose or content.
// The component is exported as the default export, allowing it to be easily imported and used in other files within the React application.