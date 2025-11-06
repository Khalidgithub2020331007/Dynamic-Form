import type { Rule } from 'antd/es/form';
import type { ValidationsType } from '../types/FieldTypes';

// ✅ validations is optional
export const getValidationRules = (validations?: ValidationsType[]): Rule[] => {
  if (!validations) return [];

  return validations.map((v) => {
    switch (v.rule) {
      case 'required':
        return { required: true, message: v.message };
      case 'email':
        return { type: 'email', message: v.message };
      case 'minLength':
        return { min: Number(v.value), message: v.message };
      case 'maxLength':
        return { max: Number(v.value), message: v.message };
      case 'pattern':
        return { pattern: new RegExp(v.value as string), message:v.message}
      
      default:
        return {};
    }
  });
};
