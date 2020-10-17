import React, { useState, useEffect } from "react";
import Axios from "axios";

const Landing = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await (await Axios.get("/api/user/list")).data;
      setState(response);
    }
    fetchData();
  }, []);

  console.log(state);

  return <div className="landing">landing page</div>;
};

export default Landing;
