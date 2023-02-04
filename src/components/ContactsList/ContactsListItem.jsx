import css from '../style.module.css';
import PropTypes from 'prop-types';

const ContactsListItem = ({ id, name, number, removeContact }) => {
  return (
    <li className={css.item}>
      {name}: {number}{' '}
      <button type="button" onClick={() => removeContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactsListItem;

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
};
