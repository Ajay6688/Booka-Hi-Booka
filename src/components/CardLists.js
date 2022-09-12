import React from "react";
import { useNavigate } from "react-router-dom";

export default function CardLists(props) {
  const navigate = useNavigate();
  const navToBooksDes = (e, data) => {
    e.preventDefault();
    console.log(data);
    navigate("/Booka-Hi-Booka/books-description", { state: data });
  };

  console.log(props.data)

  return (
    <>
      <div className="container text-center">
        <div className="row cols-5 ">
          {props.data.map((a, index) => {
            let { title, imageLinks, authors, description } = a.volumeInfo;
            if(authors === undefined || authors=== null ){
                authors = ["undefined"];
            }
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
                    alt="https://depositphotos.com/vector-images/no-image-available.html"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                      author :{" "}
                      
                      {authors.map((a, i, author) => {
                        if (i + 1 == author.length) {
                          return a;
                        } else {
                          return a + ", ";
                        }
                      })}
                    </p>
                    <button
                      onClick={(e) => {
                        const { description, authors, title } = a.volumeInfo;
                        const data = {
                          description: description,
                          authors: authors,
                          title: title,
                        };
                        navToBooksDes(e, data);
                      }}
                      className="btn btn-primary"
                    >
                      description
                    </button>
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
