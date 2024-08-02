import DefaultImage from "/NoImage.png";
import { Link } from "react-router-dom";

const ItemMovie = ({ id, title, type, year, poster }) => {
  const image = poster === "N/A" ? DefaultImage : poster;

  return (
    <Link
      to={`/movies/${id}`}
      style={{ color: "inherit", textDecoration: "inherit" }}
    >
      <article
        className="item-movie"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="info">
          <h4>{title}</h4>
          <p className="row-info">
            <span>{type}</span>
            <span>{year}</span>
          </p>
        </div>
      </article>
    </Link>
  );
};

export default ItemMovie;
