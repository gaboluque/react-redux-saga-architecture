import React from 'react';
import { any, arrayOf, func, object, shape, string } from 'prop-types';
import { Button, Col, Form, Modal, Row } from 'antd';
import Field from '../Field';
import useForm from '../../../hooks/useForm';

const FormGenerator = ({ fields, onSubmit, layout }) => {
  const [handleChange, formValues, errors, form] = useForm(fields);

  const handleSubmit = () => {
    if (!errors.length) {
      onSubmit(formValues);
    } else {
      Modal.error({
        title: 'Oops!',
        content: `Looks like there are some errors on the form, 
                  check them out and try again!`,
      });
    }
  };

  return (
    <Form layout="vertical" className="form-generator">
      <Row {...layout}>
        {fields.map(
          ({
            component,
            name,
            placeholder,
            label,
            validate,
            options,
            layout: { col } = {},
          }) => (
            <Col {...col} key={name}>
              <Field
                component={component}
                name={name}
                placeholder={placeholder}
                label={label || placeholder}
                item={form[name]}
                validate={validate}
                options={options}
                onChange={handleChange}
              />
            </Col>
          )
        )}
      </Row>
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
};

FormGenerator.propTypes = {
  fields: arrayOf(
    shape({
      name: string,
      component: any,
      placeholder: string,
      label: string,
      validate: func,
    })
  ).isRequired,
  onSubmit: func.isRequired,
  layout: object,
};

FormGenerator.defaultProps = {
  layout: {},
};

export default FormGenerator;
