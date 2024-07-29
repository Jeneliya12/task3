import { useState } from "react";
import "./App.css";

function App() {
  //define inline styles as a Javascript object
  const navItemStyle = {
    marginRight: "10px",
    backgroundColor: "#98FB98",
    width: "100px",
    height: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",
    textAlign: "center",
    borderRadius: "50px",
  };

  return (
    <>
      <header>
        <h1 style={{ textAlign: "center", backgroundColor: "aqua" }}>
          Jeneliya Gurung
        </h1>
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            listStyleType: "none",
          }}
        >
          <li style={navItemStyle}>About Me</li>
          <li style={navItemStyle}>Projects</li>
          <li style={navItemStyle}>Contact</li>
        </nav>
      </header>
      <br /> <br />
      <main>
        <section
          style={{
            display: "flex",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "20px",
          }}
        >
          <div
            className="cardone"
            style={{
              textAlign: "center",
              backgroundColor: "aquamarine",
              width: "500px",
              height: "200px",
              marginRight: "20px",
            }}
          >
            <h2>Header One</h2>
            <p>
              Use inline styles in React JSX to apply CSS styling to the
              semantic components.
            </p>
          </div>
          <div
            className="cardtwo"
            style={{
              textAlign: "center",
              backgroundColor: "#87CEFA",
              width: "500px",
              height: "200px",
              marginRight: "20px",
            }}
          >
            <h2>Header two</h2>
            <p>
              Use inline styles in React JSX to apply CSS styling to the
              semantic components.
            </p>
          </div>
          <div
            className="cardthree"
            style={{
              textAlign: "center",
              backgroundColor: "yellow",
              width: "500px",
              height: "200px",
            }}
          >
            <h3>Header three</h3>
            <p>
              Use inline styles in React JSX to apply CSS styling to the
              semantic components.
            </p>
          </div>
        </section>{" "}
        <br />
        <article
          style={{
            textAlign: "center",
            backgroundColor: "lightpink",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <h2>How to Optimize Your Website for Seo</h2>
          <p>Posted by Jeneliya Gurung on July 27, 2024</p>
          <p>
            Use inline styles in React JSX to apply CSS styling to the semantic
            components.
          </p>
        </article>
        <aside>
          <h2 style={{ textAlign: "center" }}>Useful Links</h2>
          <ul
            style={{
              display: "flex",
              listStyleType: "none",
              justifyContent: "center",
            }}
          >
            <li style={{ marginRight: "10px" }}>
              <a href="https://example.com">Example Site</a>
            </li>
            <li tyle={{ marginRight: "10px" }}>
              <a href="https://another-example.com">Another Example</a>
            </li>
          </ul>
        </aside>
        <footer>
          <p
            style={{
              paddingTop: "30px",
              textAlign: "center",
              backgroundColor: "#FFDAB9",
              height: "50px",
            }}
          >
            &copy; Jeneliya Gurung. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}

export default App;
