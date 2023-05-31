import React from "react";
import TopNav from "../../mini-components/TopNav/TopNav";
import AddClub from "../../mini-components/AddClub/AddClub";
import ClubList from "../../mini-components/ClubList/ClubList";
import styles from "./Clubs.module.css";
const clubs = [
  {
    image: "blob:http://localhost:5173/5d2770c3-6a4b-47d4-a7ed-05d0c8088fbe",
    name: "Coder's Club",
    description: "This is a coders club",
  },
  {
    image: "blob:http://localhost:5173/5d2770c3-6a4b-47d4-a7ed-05d0c8088fbe",
    name: "Sport's Club",
    description: "This is a sports club.",
  },
];
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
      {/* map use garera club details line 
      components using props ClubList and Display the clubs list.*/}
    </>
  );
}

export default Clubs;
