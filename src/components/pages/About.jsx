import axios from "axios";
import React, { useEffect, useState } from "react";

const About = () => {
  const [data, setdata] = useState([]);

  async function fetchData() {
    let res = await axios.get("https://jsonplaceholder.typicode.com/todos");

    setdata(res.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data?.map((val, index) => (
        <>
          <h1>{val.id}</h1>
          <h2>{val.title}</h2>
        </>
      ))}
    </div>
  );
};

export default About;
