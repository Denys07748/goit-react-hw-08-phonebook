import styled from '@emotion/styled';
import { Form } from 'formik';

export const FormEl = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  input {
    margin-top: 6px;
  }

  div {
    color: #df0707;
  }
`;
