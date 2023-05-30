import styles from "./ClubList.module.css";
import { AiFillDelete } from "react-icons/ai";
function ClubList(props) {
  return (
    <>
      <tr>
        <td>
          <div className={styles.info}>
            <span>{props.name}</span>
            <span>{props.description}</span>
          </div>
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
export default ClubList;
