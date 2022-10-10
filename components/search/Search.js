import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import Alert from "../utilites/Alert";

import homeBg from "../../assets/images/home-bg.jpg";

import { ShowsContext } from "../../context/ShowContext";
import { AlertContext } from "../../context/AlertContext";

const Search = (props) => {
  const { loading, searchShows } = useContext(ShowsContext);
  const { alert, setAlert } = useContext(AlertContext);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (props.location.search && props.location.search.includes("key")) {
      let key = props.location.search.split("key=")[1];
      if (key && key.includes("&")) {
        key = key.split("&")[0];
      }
      if (key) {
        key = decodeURIComponent(key);
        setSearchTerm(key);
        searchShows(key);
      }
    }
  }, []);

  const handleSearchForm = (e) => {
    e.preventDefault();

    props.history.replace(`/search?key=${searchTerm}`);
    if (searchTerm.trim()) {
      searchShows(searchTerm);
    } else {
      setAlert("Search Bar is empty !", "danger");
    }
  };

  const styleClasses =
    props.size === "large"
      ? "col-2-4 search-content mx-auto mh-100"
      : "col-2-4 search-content mx-auto pt-6 pb-2";

  return (
    <section className="search" style={{ background: `url(${homeBg})` }}>
      <div className="container">
        <div className="row">
          <div className={styleClasses}>
            {props.size == "large" ? (
              <>
                <h1>Find your next Show</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </>
            ) : null}
            <form className="search-form" onSubmit={handleSearchForm}>
              <input
                type="search"
                placeholder="search for tv show"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {!loading ? "search" : "loading ..."}
              </button>
            </form>
            {alert ? <Alert type={alert.type} message={alert.message} /> : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(Search);
