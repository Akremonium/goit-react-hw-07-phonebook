import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../Redux/phonebook-actions";
import { getVisibleContacts } from "../../Redux/phonebook-selectors";

import PropTypes from "prop-types";
import styles from "./ContactList.module.scss";

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(deleteContact(id));

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.listItem}>
          <p className={styles.contact}>
            {name}: <span className={styles.number}>{number}</span>
          </p>
          <button
            className={styles.button}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactList;
