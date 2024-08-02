import { useFetch } from "../hooks/useFetch";
import { useParams, useNavigate } from "react-router-dom";
import DefaultImage from "/NoImage.png";

const SingleMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, data } = useFetch(`&i=${id}`);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  const {
    Poster = DefaultImage,
    Title,
    Plot,
    Year,
    Country,
    Director,
    Released,
    Runtime,
  } = data;
  const image = Poster === "N/A" ? DefaultImage : Poster;

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="single-movie">
      <button onClick={handleBack} className="back-button">
        Back to Search Results
      </button>
      <img src={image} alt={Title} />
      <div className="single-info">
        <h2>{Title}</h2>
        <p>{Plot}</p>
        <p>
          <strong>Country:</strong> {Country}
        </p>
        <p>
          <strong>Director:</strong> {Director}
        </p>
        <p>
          <strong>Released:</strong> {Released}
        </p>
        <p>
          <strong>Runtime:</strong> {Runtime}
        </p>
        <p>
          <strong>Year:</strong> {Year}
        </p>
      </div>
    </div>
  );
};

export default SingleMovie;
