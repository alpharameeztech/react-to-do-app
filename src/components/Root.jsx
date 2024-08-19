import React from 'react'
import App from "./App";
import About from "./pages/About";
import NavigationBar from "./NavigationBar";

export default function Root() {
  return (
      <div className="todo-app-container">
        <NavigationBar />
          <div className="content">
              <App />
              {/*<About />*/}
          </div>
      </div>
  )
}
