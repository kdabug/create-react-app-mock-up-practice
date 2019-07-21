import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Post title="My First Post" />
        <Post title="My Second Post" />
        <Footer />
      </main>
    </div>
  );
}

export default App;
