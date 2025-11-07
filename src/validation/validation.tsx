import type { Rule } from 'antd/es/form';
import type { ValidationsType } from '../types/FieldTypes';

export const getValidationRules = (validations?: ValidationsType[]): Rule[] => {
  if (!validations) return [];

  return validations.map((v) => {
    switch (v.rule) {
      case 'required':
        return { required: true, message: v.message };
      case 'email':
        return { type: 'email', message: v.message };
      case 'minLength':
        return { type: 'string', min: Number(v.value), message: v.message };

      case 'maxLength':
        return { type: 'string', max: Number(v.value), message: v.message };
      case 'min':
        return {
          validator: (_, value) => {
            if (value === undefined || value === null || value === '') return Promise.resolve();
            return Number(value) >= Number(v.value)
              ? Promise.resolve()
              : Promise.reject(new Error(v.message));
          },
        };

      case 'max':
        return {
          validator: (_, value) => {
            if (value === undefined || value === null || value === '') return Promise.resolve();
            return Number(value) <= Number(v.value)
              ? Promise.resolve()
              : Promise.reject(new Error(v.message));
          },
        };

      case 'pattern':
        return { pattern: new RegExp(v.value as string), message:v.message}
      
      default:
        return {};
    }
  });
};
