import PropTypes from 'prop-types';
import ContactsListItem from './ContactsListItem';

const ContactsList = ({ contact, removeContact }) => {
  return (
    <ul>
      {contact.map(({ id, name, number }) => {
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

export default ContactsList;

ContactsList.defaultProps = {
  contacts: [],
};

ContactsList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
