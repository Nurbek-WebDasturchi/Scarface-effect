import { Component } from "react";
import "./App.css";

class App extends Component {
  timer = () => {
    setTimeout(() => {
      window.location.reload();
    }, 4000);
  };
  getShot = () => {
    const effect = document.querySelector("#video");
    const title = document.querySelector("h2");
    title.classList.remove("d-none");
    effect.classList.remove("d-none");
    effect.play();
    this.timer();
  };
  render() {
    return (
      <>
        <div className="app">
          <h3 className="mt-5 text-primary">
            You're Tony Montana, just act like a him. Come on
          </h3>
          <button className="btn btn-primary mt-5" onClick={this.getShot}>
            SHOOT BY THE GUN LIKE A TONY!
          </button>
          <video width="100%" className="mt-5 d-none" id="video">
            <source
              src="/videos/SAY-HELLO-TO-MY-LITTLE-FRIEND.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <h2 className="mt-3 text-danger fs-1 d-none">
            SAY HELLO TO MY LITTLE FRIEND !
          </h2>
        </div>
      </>
    );
  }
}

export default App;
