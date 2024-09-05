import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { ErrorMessage } from '@hookform/error-message';

import { InputText, Text } from '@pentabd/ui';

interface InputProps {
  title: string;
  subtitle?: string;
  disabled?: boolean;
  registerName: string;
  value?: string;
  placeholder?: string;
}
const Input = ({
  title,
  subtitle,
  registerName,
  disabled,
  value,
  placeholder,
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { t } = useTranslation();
  return (
    <div className="row mb-8">
      <div className="col-3">
        <Text weight="medium" size="sm" color="title">
          {t(title)}
        </Text>
        <br />
        {subtitle && (
          <Text weight="medium" size="xs" color="subtitle2">
            {t(subtitle)}
          </Text>
        )}
      </div>
      <div className="col-9 col-lg-7">
        <InputText
          {...register(registerName)}
          placeholder={placeholder && t(placeholder)}
          disabled={disabled}
          value={value}
        />
        <div className="py-3">
          <ErrorMessage
            errors={errors}
            name={registerName}
            render={({ message }) => <Text color="danger">{message}</Text>}
          />
        </div>
      </div>
    </div>
  );
};
export default Input;
