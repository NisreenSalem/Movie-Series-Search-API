import React, { useContext, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { ShowsContext } from "../../context/ShowContext";

import noImg from "../../assets/images/no-img.png";

const ShowsItem = ({ show, match }) => {
  const { activeShow, getActiveShow } = useContext(ShowsContext);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (match.params.id && match.params.id == show.id) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [activeShow]);

  return (
    <Link
      to={`/shows/${show.id}`}
      className="show-item"
      onClick={() => getActiveShow(show.id)}
    >
      <div className={isActive ? "show-item_img active" : "show-item_img"}>
        <img
          src={show.image && show.image.medium ? show.image.medium : noImg}
          alt={show.name ? show.name : "show image"}
        />
        <div className="show-item_img-hover">
          <div className="rating">
            {show.rating && show.rating.average ? (
              <>
                <span>⭐️</span> {show.rating.average}{" "}
              </>
            ) : null}
          </div>
          <h3 className="title"> {show.name ? show.name : "No Title"} </h3>
        </div>
      </div>
    </Link>
  );
};

export default withRouter(ShowsItem);
