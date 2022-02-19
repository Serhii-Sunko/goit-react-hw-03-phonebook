import styled from 'styled-components';

const ContactItemStyled = styled.li`
  margin-bottom: 20px;
  span {
    display: inline-block;
    margin-right: 10px;
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

export default ContactItemStyled;
