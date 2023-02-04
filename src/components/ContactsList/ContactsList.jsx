import PropTypes from 'prop-types';
import ContactsListItem from './ContactsListItem';

const ContactItem = ({ contacts, removeContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactsListItem
            key={id}
            id={id}
            name={name}
            number={number}
            removeContact={removeContact}
          />
        );
      })}
    </ul>
  );
};

export default ContactItem;

ContactItem.defaultProps = {
  contacts: [],
};

ContactItem.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
