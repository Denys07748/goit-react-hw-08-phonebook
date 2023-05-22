import styled from '@emotion/styled';
import { Form } from 'formik';

export const FormEl = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 300px;
  border-radius: 8px;
  padding: 10px;
  margin: auto;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  input {
    margin-top: 6px;
    outline: none;
  }

  div {
    color: #df0707;
  }
`;
