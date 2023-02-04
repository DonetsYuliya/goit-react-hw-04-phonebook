import css from './style.module.css';
import PropTypes from 'prop-types';

const ContactsFilter = ({ handleFilter }) => {
  return (
    <div className={css.filterWrapper}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        onChange={handleFilter}
        className={css.input}
        type="text"
        name="filter"
      />
    </div>
  );
};

export default ContactsFilter;

ContactsFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
