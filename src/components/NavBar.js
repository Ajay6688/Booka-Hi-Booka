import React from "react";
import CardLists from "./CardLists";
import { useRef } from "react";
import axios from "axios";

export default function NavBar() {
  const [state, setstate] = React.useState(null);

  const inputRef = useRef(null);
  const apiKey = "AIzaSyCJcK2NxXCLnCy1f3FZc9Rv1MbKWRApImQ";
  let searchInput = localStorage.getItem("searchInput");
  const baseURL = `https://www.googleapis.com/books/v1/volumes?q=${searchInput ||"reactjs"}:keyes&key=${apiKey}`;
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setstate(response.data.items);
    });
  }, []);
  if (!state) return null;

  // useEffect(() => {
  //   localStorage.setItem('dataKey', JSON.stringify(data));
  // }, [data]);

  function search(e) {
    e.preventDefault();
    localStorage.setItem('searchInput', JSON.stringify(inputRef.current.value));
    const apiKey = "AIzaSyCJcK2NxXCLnCy1f3FZc9Rv1MbKWRApImQ";
    const baseURL = `https://www.googleapis.com/books/v1/volumes?q=${
      inputRef.current.value ? inputRef.current.value : "reactjs"
    }:keyes&key=${apiKey}`;

    axios.get(baseURL).then((response) => {
      setstate(response.data.items);
    });
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Booka Hi Booka
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li> */}
            </ul>
            <form className="d-flex w-50">
              <input
                ref={inputRef}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success text-white border-white"
                type="submit"
                onClick={(e) => {
                  search(e);
                }}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <CardLists data={state ? state : "reactjs"} />
    </>
  );
}
