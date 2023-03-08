import PropTypes from 'prop-types';
import { FilterStyled } from './Filter.styled';

export const Filter = ({ value, contactFilter }) => {
  return (
    <FilterStyled>
      Find contacts by name
      <input
        type="text"
        placeholder="Enter a name"
        value={value}
        onChange={contactFilter}
      />
    </FilterStyled>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  contactFilter: PropTypes.func.isRequired,
};
