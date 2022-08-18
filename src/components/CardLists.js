import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CardLists(props) {
  console.log(props.data);
  // const [state, setstate] = useState(null)
  // setstate(props.data)

  return (
    <>
      <div className="container text-center">
        <div className="row cols-4 ">
          {props.data.map((a, index) => {
            const { title, imageLinks, authors } = a.volumeInfo;
            return (
              <div
                className="  col pt-3 d-flex justify-content-center text-center"
                key={index}
              >
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={imageLinks.thumbnail}
                    className="card-img-top"
                    height="200"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                      author :{" "}
                      {authors.map((a, i, author) => {
                        if (i + 1 === author.length) {
                          return a;
                        } else {
                          return a + ", ";
                        }
                      })}
                    </p>
                    <a href="#" className="btn btn-primary">
                      description
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
