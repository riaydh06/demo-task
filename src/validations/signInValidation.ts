import * as yup from 'yup';

import { FORM_FIELDS } from '@constants/form';

const SIGN_IN = FORM_FIELDS.SIGN_IN;

export const signInValidation = yup.object().shape({
  [SIGN_IN.EMAIL]: yup.string().required(),
  [SIGN_IN.PASSWORD]: yup.string().required(),
});
