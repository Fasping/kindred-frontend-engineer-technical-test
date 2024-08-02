import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";

const FormSearch = () => {
  const [title, setTitle] = useState("");
  const { setQuery, error } = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(title);
  };

  return (
    <div className="form-search">
      <h2>Kindred Movie Explorer</h2>
      <form onSubmit={handleSubmit}>
        <input
          id="movie-title"
          name="title"
          type="text"
          placeholder="Title of movie"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {error && <p className="error">The movie does not exist</p>}
    </div>
  );
};

export default FormSearch;
