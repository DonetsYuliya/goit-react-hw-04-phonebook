import { useState } from 'react';
import initialState from './shared/initialState';
import css from './style.module.css';
import PropTypes from 'prop-types';

const PhonebookForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleSubmit = evt => {
    evt.preventDefault();

    const result = onSubmit({ name, number });

    if (result === false) {
      return setState({ name: '', number: number });
    }
    return setState({ ...initialState });
  };

  const handleInput = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const { name, number } = state;

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        value={name}
        onChange={handleInput}
        className={css.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label htmlFor="number">Number</label>
      <input
        value={number}
        onChange={handleInput}
        className={css.input}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default PhonebookForm;

PhonebookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
