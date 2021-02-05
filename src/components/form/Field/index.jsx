import React, { useEffect } from 'react';
import { any, func, object, string } from 'prop-types';
import { Form } from 'antd';

const Field = ({
  name,
  component: Input,
  onChange,
  item,
  validate,
  label,
  options,
  ...rest
}) => {
  const changeValue = (value, error) => {
    onChange({ name, value, error, touched: true });
  };

  const handleOnChange = (e) => {
    const val = e.target ? e.target.value : e;
    const error = validate ? validate(val) : null;
    changeValue(val, error);
  };

  const handleOnBlur = () => {
    const error = validate ? validate(item?.value) : null;
    changeValue(item?.value, error);
  };

  useEffect(() => {
    if (item.value) handleOnChange(item.value);
  }, []);

  const getStatus = () => {
    if (item?.value) {
      return item?.error ? 'error' : 'success';
    }
    return null;
  };

  return (
    <Form.Item
      label={label}
      validateStatus={getStatus()}
      help={item?.error}
      {...options}
    >
      <Input
        name={name}
        value={item?.value}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        {...rest}
      />
    </Form.Item>
  );
};

Field.propTypes = {
  name: string.isRequired,
  component: any.isRequired,
  onChange: func.isRequired,
  item: any,
  validate: func,
  label: string,
  options: object,
};

Field.defaultProps = {
  validate: null,
  item: undefined,
  label: undefined,
  options: {},
};

export default Field;
