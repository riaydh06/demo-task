import { useEffect } from 'react';
import dayjs from 'dayjs';
import { Button, InputText, InputTextArea, Text } from '@pentabd/ui';
import * as yup from 'yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEvents } from '@hooks/useEvents';
import { FORM_FIELDS } from '@constants/form';
import { eventValidation } from '@validations/eventsValidation';

const EVENTS = FORM_FIELDS.EVENTS;

type FormData = yup.InferType<typeof eventValidation>;

function CreateEvent() {
  const { createRequested, createSuccess, createEvents } = useEvents({});
  const {
    handleSubmit,
    formState: { errors },
    reset,

    register,
  } = useForm<FormData>({
    resolver: yupResolver(eventValidation),
  });

  const onSubmit: SubmitHandler<FormData> = (data: any) => {
    const postData = {
      ...data,
      like: 0,
      date: dayjs().format('L'),
    };
    createEvents(postData);
  };

  useEffect(() => {
    if (createSuccess) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createSuccess]);

  return (
    <>
      <Text color="primary">Lets create an event</Text>
      <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
        <InputText
          {...register(EVENTS.NAME)}
          placeholder="Name"
          error={errors ? errors?.[EVENTS.NAME]?.message : ''}
        />

        <InputTextArea
          {...register(EVENTS.DESCRIPTION)}
          placeholder="Description"
          error={errors ? errors?.[EVENTS.DESCRIPTION]?.message : ''}
        />

        <Button
          loading={createRequested}
          type="primary"
          htmlType="submit"
          className="primary-semi-middark"
        >
          Submit
        </Button>
      </form>
    </>
  );
}

export default CreateEvent;
