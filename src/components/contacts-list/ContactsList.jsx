import PropTypes from 'prop-types';
import { ContactsItem } from '../contacts-item/ContactsItem';

export const ContactsList = ({ contacts, onContactDelete }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <ContactsItem
              contactName={contact.name}
              contactNumber={contact.number}
              contactDelete={() => onContactDelete(contact.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onContactDelete: PropTypes.func.isRequired,
};
