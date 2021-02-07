import React from 'react';
import { mount } from 'enzyme';
import { Input } from 'antd';
import Field from './index';

describe('Field component', () => {
  describe('With no value', () => {
    let component;

    const noValProps = {
      name: 'name',
      component: Input,
      onChange: jest.fn(),
      item: { value: undefined, error: undefined },
      validate: jest.fn(),
      label: 'Awesome label',
    };

    beforeEach(() => {
      component = mount(<Field {...noValProps} />);
    });

    describe('should render properly', () => {
      it('should render correct label', () => {
        const label = component.find('label');
        expect(label.length).toBe(1);
      });
    });
  });
});
