import { useEffect, useMemo, useState } from 'react';

const formInitializer = (fields) =>
  fields.reduce(
    (initialForm, { name, initialValue }) => ({
      ...initialForm,
      [name]: {
        value: initialValue,
        error: undefined,
        touched: !!initialValue,
      },
    }),
    {}
  );

const useForm = (fields) => {
  const [form, setForm] = useState(formInitializer(fields));
  const [errors, setErrors] = useState(false);

  const formValues = useMemo(
    () =>
      Object.entries(form).reduce((fv, [key, { value }]) => {
        return { ...fv, [key]: value };
      }, {}),
    [form]
  );

  useEffect(() => {
    setErrors(
      Object.values(form)
        .map(({ error }) => error)
        .filter((err) => !!err)
    );
  }, [form]);

  const handleChange = (updatedItem) => {
    setForm({
      ...form,
      [updatedItem.name]: updatedItem,
    });
  };

  return [handleChange, formValues, errors, form];
};

export default useForm;
