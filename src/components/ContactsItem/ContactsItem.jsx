import PropTypes from 'prop-types';
import { ContactsItemStyled } from './ContactsItem.styled';

export const ContactsItem = ({ contactName, contactNumber, contactDelete }) => {
  return (
    <ContactsItemStyled>
      <div>
        <span className="name">{contactName}</span>:{' '}
        <span>{contactNumber}</span>
      </div>
      <button type="button" onClick={() => contactDelete()}>
        Delete contact
      </button>
    </ContactsItemStyled>
  );
};

ContactsItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  contactDelete: PropTypes.func.isRequired,
};
