import { ArrowBackOutlined } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  const movie = location.movie;
  console.log(movie);
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      {/* <video className="video" autoPlay progress controls src={movie.video} /> */}
      {/* <iframe
        width="560"
        height="315"
        src={movie.video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */}
      {/* <Link to={movie.video}> */}
        {/* Miegw */}
      {/* </Link> */}
      {/* {console.log(movie.video)} */}
    </div>
  );
}
