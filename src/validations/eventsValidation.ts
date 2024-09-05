import * as yup from 'yup';

import { FORM_FIELDS } from '@constants/form';

const EVENTS = FORM_FIELDS.EVENTS;

export const eventValidation = yup.object().shape({
  [EVENTS.NAME]: yup.string().required(),
  [EVENTS.DESCRIPTION]: yup.string().required(),
});
