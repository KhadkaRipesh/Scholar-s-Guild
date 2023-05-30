import React, { useEffect, useState } from "react";
import TopNav from "../../mini-components/TopNav/TopNav";
import axios from "axios";
import Admin from "../../../Admin/admin";

function Newsfeed() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/records")
      .then((response) => {
        const records = response.data.map((record) => {
          return {
            title: record.title,
            description: record.description,
            poster: record.poster
          };
        });
        setRecords(records);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <TopNav />
      <Admin />
    </>
  );
}

export default Newsfeed;
