import * as yup from 'yup';

import { FORM_FIELDS } from '@constants/form';

const EVENTS = FORM_FIELDS.EVENTS;

export const eventValidation = yup.object().shape({
  // [EVENTS.NAME]: yup.string().required(),
  [EVENTS.LOCATION]: yup.string().required(),
  [EVENTS.DATE]: yup.string().required('dfkdfkdkf'),
  // [EVENTS.SELECT]: yup
  //   .object()
  //   .shape({
  //     value: yup.string().required('dfkdfkdkf'),
  //   })
  //   .default(undefined) // 👈
  //   .required(),
  // [EVENTS.DESCRIPTION]: yup.string().required('dfjkkdfjkdfj'),
  // [EVENTS.CHECK]: yup.string().required(),
  // [EVENTS.ACTIVE]: yup.string().required(),
  // [EVENTS.RADIO]: yup.string().required(),
});
