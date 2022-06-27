import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjk2MDU0MmFlZTRhNmQwZjViZDE2MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjMyNTI0NSwiZXhwIjoxNjU2NzU3MjQ1fQ.JZKpLZdqzXW1f-5Zd7QSOkUwWn3KW9dplwqGszhcyBs",
            },
          }
        );
        console.log(res);
        // setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      {/* <img
          width="100%"
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          /> */}
      <Featured type={type} />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
