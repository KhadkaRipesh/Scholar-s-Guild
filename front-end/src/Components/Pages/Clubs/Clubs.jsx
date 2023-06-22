import React, { useState } from "react";
import TopNav from "../../mini-components/TopNav/TopNav";
import AddClub from "../../mini-components/AddClub/AddClub";
import ClubList from "../../mini-components/ClubList/ClubList";
import styles from "./Clubs.module.css";
const [clubs, setClubs] = useState([]);
useEffect(() => {
  axios
    .get("http://localhost:4000/api/records")
    .then((response) => {
      const clubs = response.data.map((record) => {
        return {
          image: record.image,
          name: record.name,
          description: record.description,
        };
      });
      setClubs(clubs);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

function Clubs() {
  return (
    <>
      <TopNav />
      <AddClub />
      <h1>CLubs List</h1>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.image}>Club Image</th>
            <th>Club Name</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {clubs.map((route, index) => {
            return (
              <ClubList
                key={index}
                image={route.image}
                name={route.name}
                description={route.description}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Clubs;
