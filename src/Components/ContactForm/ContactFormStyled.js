import styled from 'styled-components';

const ContactFormStyled = styled.div`
  form {
    border: 1px solid black;
    padding: 20px;
    width: fit-content;
  }
  label {
    display: block;
  }
  input {
    display: block;
    margin-bottom: 20px;
  }
  button {
    cursor: pointer;
    background: none;
    border-radius: 5px;
    &:hover {
      background-color: blue;
      color: white;
    }
  }
`;

export default ContactFormStyled;
