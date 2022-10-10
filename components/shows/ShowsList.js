import React, { useContext, useEffect } from "react";

import ShowsItem from "./ShowsItem";
import Loader from "../utilites/Loader";

import { ShowsContext } from "../../context/ShowContext";

const ShowsList = () => {
  const { loading, shows } = useContext(ShowsContext);

  return (
    <section className="shows">
      <div className="container">
        <div className="row py-2 justify-between">
          {loading && (
            <div className="col-full">
              <Loader />
            </div>
          )}

          {shows.length === 0 && !loading ? (
            <div className="col-full">
              <div className="not-found"> Show Not Found </div>
            </div>
          ) : (
            <>
              {shows.map((el, ix) => (
                <div className="col-1-5" key={el.show.id}>
                  <ShowsItem show={el.show} />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShowsList;
