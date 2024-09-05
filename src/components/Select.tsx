import { useTranslation } from 'react-i18next';
import { Text, InputSelect } from '@pentabd/ui';
import { useFormContext, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { SelectionType } from '@pentabd/ui/build/atoms/select/types';

interface OptionType {
  label: string;
  value: string;
  customComponent?: JSX.Element | JSX.Element[];
}

interface SelectProps {
  title: string;
  subtitle?: string;
  options: OptionType[];
  disabled?: boolean;
  registerName: string;
}
const Select = ({ title, subtitle, registerName, options }: SelectProps) => {
  const { t } = useTranslation();

  const {
    formState: { errors },
    control,
  } = useFormContext();
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
        <Controller
          control={control}
          name={registerName}
          render={({ field }) => (
            <InputSelect
              name={registerName}
              onSelectItem={(data: SelectionType) => field.onChange(data)}
              defaultValue={field.value}
              options={options}
              isSearchable={true}
            />
          )}
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
export default Select;
