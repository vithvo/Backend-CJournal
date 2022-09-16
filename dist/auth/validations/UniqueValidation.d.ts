import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class UniqueOnDatabaseExistConstraint implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments): Promise<boolean>;
}
export declare function UniqueOnDatabase(entity: Function, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
