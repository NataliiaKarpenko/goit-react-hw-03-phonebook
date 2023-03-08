import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FormInputStyled, LabelStyled } from './FormInput.styled';

export class FormInput extends Component {
  state = {
    name: '',
    number: '',
  };

  handleEnteringInfo = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const contact = {
      name: this.state.name,
      number: this.state.number,
    };

    this.props.onFormSubmit(contact);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <FormInputStyled onSubmit={this.handleSubmit}>
        <LabelStyled>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Enter a name"
            required
            autoComplete="off"
            value={this.state.name}
            onChange={this.handleEnteringInfo}
          />
        </LabelStyled>
        <LabelStyled>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Enter a telephone number"
            autoComplete="off"
            required
            value={this.state.number}
            onChange={this.handleEnteringInfo}
          />
        </LabelStyled>
        <button type="submit">Add the contact</button>
      </FormInputStyled>
    );
  }
}

FormInput.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
