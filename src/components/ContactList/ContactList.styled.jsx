import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  background: rgba(11, 9, 26, 0.808);
  max-width: 440px;
  outline: 2px solid gray;
  border-radius: 8px;
  padding: 15px;
`;

export const ContactEl = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  p {
    margin: 0;
    margin-right: 10px;
  }
`;
