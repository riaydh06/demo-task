import * as yup from 'yup';

import { FORM_FIELDS } from '@constants/form';

const SIGN_UP = FORM_FIELDS.SIGN_UP;

export const signUpValidation = yup.object().shape({
  [SIGN_UP.EMAIL]: yup.string().required(),
  [SIGN_UP.PASSWORD]: yup.string().required(),
});
