import "./App.css";
import Home from "./component/home";
import Comment from "./component/comment";
import { Link } from "react-scroll";
function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <svg
              width="46"
              height="46"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 3h10c.644 0 1.11.696.978 1.33l-1.984 9.859A1.014 1.014 0 0 1 15 15h-2.254c-.308 0-.6.141-.793.382l-4.144 5.25C7.21 21.384 6 20.963 6 20V4c0-.564.44-1 1-1v0Z"></path>
              <path d="M12 9h5"></path>
            </svg>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#home">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 mt-5 d-flex justify-content-center align-items-center">
            <img
              src={require("./image/fruits5.jpg")}
              className="main-img"
            ></img>
          </div>
          <div className="col-md-6 mt-5">
            <h4 className="mt-5 pt-3">
              Even the all-powerful Pointing has<br></br> no control about the
              blind texts
            </h4>
            <p className="pt-4">
              Far far away, behind the word mountains, far from the <br></br>
              countries Vokalia and Consonantia, there live the blind <br></br>
              texts.
            </p>
            <Link to="Home" smooth={true} duration={2000}>
              <button className="main-button">Read more</button>
            </Link>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 mt-5 d-flex justify-content-center align-items-center">
            <img
              src={require("./image/fruits12.jpg")}
              className="main-img"
            ></img>
          </div>
          <div className="col-md-6 mt-5">
            <h4 className="mt-5 pt-3">
              Even the all-powerful Pointing has<br></br> no control about the
              blind texts
            </h4>
            <p className="pt-4">
              Far far away, behind the word mountains, far from the <br></br>
              countries Vokalia and Consonantia, there live the blind <br></br>
              texts.
            </p>
            <button className="main-button">Read more</button>
          </div>
        </div>
      </div>
      <Home></Home>
      <Comment></Comment>
    </div>
  );
}

export default App;
