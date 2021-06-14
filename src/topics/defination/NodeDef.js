import React from "react";
import Style from "./Style.module.css";
function NodeDef() {
  return (
    <div className="container">
      <h3 className={Style.h3}>What is Node Js ?</h3>
      <p>
        Node.js is a cross-platform environment and library for running JavaScript applications which is used to create
        networking and server-side applications.
      </p>
      <p>
        Node.js: JavaScript run-time environment that executes JavaScript code outside of a browser (such as a server).
      </p>
    </div>
  );
}

export default NodeDef;
