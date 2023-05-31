import React from "react";
import TopNav from "../../mini-components/TopNav/TopNav";
import AddEvent from "../../mini-components/AddEvent/AddEvent";
import EventList from "../../mini-components/EventList/EventList";
import styles from "./Calender.module.css";
import { DatePicker, Space } from "antd";
const clubs = [
  {
    name: "IIC Quest",
    description: "This is a 4 days event",
    date: "12 APR/2023",
    time: "9:00",
    location: "Guild Hall",
  },
  {
    name: "FYP Session",
    description: "This is a demo session.",
    date: "12 APR/2023",
    time: "12:00",
    location: "Royal Albert Hall",
  },
];
function Calender() {
  return (
    <>
      <TopNav />
      <AddEvent />
      <h1>Events List</h1>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Event Name</th>
            <th>Event Date</th>
            <th>Event Time</th>
            <th>Event Location</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {clubs.map((route, index) => {
            return (
              <EventList
                key={index}
                name={route.name}
                description={route.description}
                date={route.date}
                time={route.time}
                location={route.location}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Calender;
