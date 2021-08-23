import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContacts, deleteContact } from "../../Redux/phonebook-operations";
import { getVisibleContacts } from "../../Redux/phonebook-selectors";

import PropTypes from "prop-types";
import styles from "./ContactList.module.scss";

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  // const loading = useSelector(isLoading);
  const contacts = useSelector(getVisibleContacts);
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
