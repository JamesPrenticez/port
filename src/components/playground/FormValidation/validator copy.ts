
type IValidationResult = { isValid: boolean; errorMessage?: string };

type ValidatorFn<T> = (value: T) => IValidationResult;

type ValidatorFactoryType<T> = {
  validate: ValidatorFn<T>;
  string?: (errorMessage?: string) => ValidatorFactoryType<string>;
  number?: (errorMessage?: string) => ValidatorFactoryType<number>;
  email?: (errorMessage?: string) => ValidatorFactoryType<string>;
  required?: (errorMessage?: string) => ValidatorFactoryType<any>;
  minLength?: (minLength?: number, errorMessage?: string,) => ValidatorFactoryType<string>;
  positive?: (errorMessage?: string) => ValidatorFactoryType<number>;
};

//  ========================================================================================
//  Form Validator Class with Chainable Validation Methods
//  ========================================================================================
class FormValidator {
  private validators: ValidatorFn<any>[] = [];

  static create(): FormValidator {
    return new FormValidator();
  }

  private addValidator<T>(validator: ValidatorFn<T>): this {
    this.validators.push(validator as ValidatorFn<any>);
    return this;
  }

  validate(value: any): IValidationResult {
    for (const validator of this.validators) {
      const result = validator(value);
      if (!result.isValid) {
        return result;
      }
    }
    return { isValid: true, errorMessage: "" };
  }

  required(errorMessage?: string): ValidatorFactoryType<any> {
    return this.addValidator<any>((value) => ({
      isValid: value !== null && value !== undefined && value !== '',
      errorMessage: errorMessage ? errorMessage : 'This field is required'
    }));
  }

  string(errorMessage?: string): ValidatorFactoryType<string> {
    return this.addValidator<string>((value) => ({
      isValid: typeof value === 'string',
      errorMessage: errorMessage ? errorMessage : 'Must be a string'
    }));
  }

  number(errorMessage?: string): ValidatorFactoryType<number> {
    return this.addValidator<number>((value) => ({
      isValid: typeof value === 'number',
      errorMessage: errorMessage ? errorMessage : 'Must be a number'
    }));
  }

  boolean(errorMessage?: string): ValidatorFactoryType<boolean> {
    return this.addValidator<boolean>((value) => ({
      isValid: typeof value === 'boolean',
      errorMessage: errorMessage ? errorMessage : 'Must be a boolean'
    }));
  }

  email(errorMessage?: string): ValidatorFactoryType<string> {
    return this.addValidator<string>((value) => {
      // Check for leading and trailing whitespaces
      if (value.trim() !== value) {
        return {
          isValid: false,
          errorMessage: errorMessage ? errorMessage : 'Email should not have leading or trailing spaces'
        };
      }
  
      // Check for multiple "@" symbols
      if (value.split('@').length - 1 !== 1) {
        return {
          isValid: false,
          errorMessage: errorMessage ? errorMessage : 'Email should contain only one "@" symbol'
        };
      }
  
      // Check if there is a domain name after "@"
      const atIndex = value.indexOf('@');
      if (atIndex === -1 || atIndex === value.length - 1) {
        return {
          isValid: false,
          errorMessage: errorMessage ? errorMessage : 'Email must contain a domain name after "@"'
        };
      }
  
      // Check for valid domain with a dot
      const domainPart = value.substring(atIndex + 1);
      if (!domainPart.includes('.') || domainPart.endsWith('.')) {
        return {
          isValid: false,
          errorMessage: errorMessage ? errorMessage : 'Email must contain a "." after "@" with a valid domain'
        };
      }
  
      // Additional checks can be added here if needed
  
      return {
        isValid: true,
        errorMessage: ''
      };
    });
  }

  minLength(minLength: number = 2, errorMessage?: string): ValidatorFactoryType<string> {
    return this.addValidator<string>((value) => ({
      isValid: value.length >= minLength,
      errorMessage: errorMessage ? errorMessage : `Length must be at least ${minLength} characters`
    }));
  }

  positive(errorMessage?: string): ValidatorFactoryType<number> {
    return this.addValidator<number>((value) => ({
      isValid: value >= 0,
      errorMessage: errorMessage ? errorMessage : 'Value must be positive'
    }));
  }
}

const formValidator = FormValidator.create();

//  ========================================================================================
//  Validation Schema
//  ========================================================================================
interface IValidationSchema {
  [field: string]: any;
}

function createValidationSchema(schemaDefinition: IValidationSchema): IValidationSchema {
  return schemaDefinition;
}

//  ========================================================================================
//  Resolver Function
//  ========================================================================================
function resolver(data: Record<string, any>, schema: Record<string, FormValidator>): Record<string, IValidationResult> {
  const validationResult: Record<string, IValidationResult> = {};

  for (const key in schema) {
    if (schema.hasOwnProperty(key)) {
      const validator = schema[key];
      const value = data[key];

      const result = validator.validate(value);

      validationResult[key] = {
        isValid: result.isValid,
        errorMessage: result.errorMessage
      };
    }
  }

  return validationResult;
}

export {
  formValidator as v,
  createValidationSchema,
  resolver,
};

// resolveField

// function resolveField(data: Record<string, any>, schema: Record<string, FormValidator>, fieldName: string): IValidationResult {
//   if (!schema.hasOwnProperty(fieldName)) {
//     throw new Error(`Field '${fieldName}' is not defined in the schema`);
//   }

//   const validator = schema[fieldName];
//   const value = data[fieldName];

//   return validator.validate(value);
// }