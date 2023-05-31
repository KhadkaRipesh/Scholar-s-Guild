import styles from "./EventList.module.css";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
function EventList(props) {
  return (
    <>
      <tr>
        <td>
          <div className={styles.info}>
            <span>{props.name}</span>
            <span>{props.description}</span>
          </div>
        </td>
        <td>
          <span>{props.date}</span>
        </td>
        <td>
          <span>{props.time}</span>
        </td>
        <td>
          <span>{props.location}</span>
        </td>
        <td className={styles.edi}>
          <a href="">
            <button
              type="button"
              className={styles.close}
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <AiFillEdit />
              </span>
            </button>
          </a>
        </td>
        <td className={styles.del}>
          <a href="">
            <button
              type="button"
              className={styles.close}
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <AiFillDelete />
              </span>
            </button>
          </a>
        </td>
      </tr>
    </>
  );
}
export default EventList;
