import {
    AbstractControl,
    FormControl,
    ValidationErrors,
    FormGroup,
} from '@angular/forms';
import { Constants } from './const';

declare var $: any;

export class CustomValidators {
    static mcNumberInvalid() {
        const isValid = false;
        const message = {
            mcNumberInvalid: { message: Constants.valInvalid },
        };
        return isValid ? null : message;
    }
    static emailAddress(c: FormControl) {
        // tslint:disable-next-line:max-line-length
        const regexp = new RegExp(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        const isValid = c.value ? regexp.test(c.value) : true;
        const message = {
            emailAddress: { message: Constants.valInvalid },
        };
        return isValid ? null : message;
    }

    static password(c: FormControl) {
        const regexp = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{4,80}$/);
        const isValid = c.value ? regexp.test(c.value) : true;
        const message = {
            password: { message: Constants.valPassword },
        };
        return isValid ? null : message;
    }

    static address(c: FormControl) {
        const regexp = new RegExp(/^[^ ][ a-zA-Z0-9-,.]*$/);
        const isValid = c.value ? regexp.test(c.value) : true;
        const message = {
            address: { message: Constants.valAlphaNumeric },
        };
        return isValid ? null : message;
    }

    static alphabetic(c: FormControl) {
        const regexp = new RegExp(/^[^ 0-9][ a-zA-Z.-]*$/);
        const isValid = c.value ? regexp.test(c.value) : true;
        const message = {
            alphabetic: { message: Constants.valAlphabetic },
        };
        return isValid ? null : message;
    }

    static alphanumeric(c: FormControl) {
        // Regex for allowing alphanumeric,-,_ and space ( /^[a-z\d\-_\s]+$/i )
        const regexp = new RegExp(/^[a-z\d]+$/i);
        const isValid = c.value ? regexp.test(c.value) : true;
        const message = {
            alphabetic: { message: Constants.valAlphaNumeric },
        };
        return isValid ? null : message;
    }

    static numeric(c: FormControl) {
        const regexp = new RegExp(/^[0-9]*$/);
        const isValid = c.value ? regexp.test(c.value) : true;
        const message = {
            numeric: { message: Constants.valNumeric },
        };
        return isValid ? null : message;
    }

    static numericGreaterThanZero(c: FormControl) {
        const regexp = new RegExp(/^[1-9,][0-9,]*$/);
        const isValid = c.value ? regexp.test(c.value) : true;
        const message = {
            numericGreaterThanZero: { message: Constants.valNumericGreaterThanZero },
        };
        return isValid ? null : message;
    }

    static url(c: FormControl) {
        const regexp = new RegExp('https?://.+');
        const isValid = c.value ? regexp.test(c.value) : true;
        const message = {
            url: { message: Constants.valUrl },
        };
        return isValid ? null : message;
    }

    static numericDecimal(c: FormControl) {
        const regexp = new RegExp(/^(\d*\.)?\d+$/);
        const isValid = c.value ? regexp.test(c.value) : true;
        const message = {
            numericDecimal: { message: Constants.valNumericDecimal },
        };
        return isValid ? null : message;
    }

    static passwordMatcher(form: FormGroup) {
        const newPassword = form.get('password.newPassword');
        const confirmPassword = form.get('password.confirmPassword');
        if (newPassword !== null && confirmPassword !== null) {
            const newPasswordControl = newPassword;
            const confirmPasswordCotrol = confirmPassword;
            let isValid = true;
            if (!newPasswordControl.value || !confirmPasswordCotrol.value) {
                return null;
            }
            if (newPasswordControl.value === confirmPasswordCotrol.value) {
                return null;
            } else {
                isValid = false;
                const message = {
                    passwordMatcher: { message: Constants.valPasswordNotMatch },
                };
                return isValid ? null : message;
            }
        } else {
            return null;
        }
    }

    // custom validator to check that two fields match
    static MustMatch(controlName: string, matchingControlName: string) {
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];

            if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
                // return if another validator has already found an error on the matchingControl
                return;
            }

            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            } else {
                matchingControl.setErrors(null);
            }
        };
    }

    static numericDecimalWithDollarAndComma(c: FormControl) {
        const regexp = new RegExp(/^[+-]?(\d*|\d{1,3}(,\d{3})*)(\.\d+)?\b$/);
        const isValid = c.value ? regexp.test(c.value) : true;
        const message = {
            numericDecimal: { message: Constants.valNumericDecimal },
        };
        return isValid ? null : message;
    }

    static noWhiteSpace(c: FormControl) {
        const regexp = new RegExp(/[^\s]+(\s+[\s]+)*/);
        const isValid = c.value ? regexp.test(c.value) : true;
        const message = {
            noWhiteSpace: { message: Constants.valReqField },
        };
        return isValid ? null : message;
    }

    static prefixText(c: FormControl) {
        const regexp = new RegExp(
            /^((MC[a-zA-Z0-9 ,\./<>\?;\':""[\]\\{}\|`~!@#\$%\^&\*()-_=\+]*))$/
        );
        const isValid = c.value ? regexp.test(c.value) : true;
        const message = {
            prefixText: { message: Constants.mcValInvalid },
        };
        return isValid ? null : message;
    }

    static minDate(c: FormControl) {
        const currentDate = new Date();
        const isValid = c.value
            ? Date.parse(c.value) < Date.parse(currentDate.toDateString())
                ? false
                : true
            : true;
        const message = {
            minDate: { message: Constants.minExpiryDateInvalid },
        };
        return isValid ? null : message;
    }

    static maxDate(c: FormControl) {
        const currentDate = new Date();
        const isValid = c.value
            ? Date.parse(currentDate.toDateString()) < Date.parse(c.value)
                ? false
                : true
            : true;
        const message = {
            maxDate: { message: Constants.maxExpiryDateInvalid },
        };
        return isValid ? null : message;
    }
    static equalCharacter(c: FormControl) {
        const isValid =
            c.value && c.value.length === Constants.mcNumberValidationLength
                ? true
                : false;
        const message = {
            equalCharacter: { message: Constants.valEqualLengthCharacter },
        };
        return isValid ? null : message;
    }
    static equalValidator(allowCharacter: number, strValidationMsg: string) {
        return (control: AbstractControl): { [key: string]: boolean } | null => {
            let message = {};
            if (
                control.value !== undefined &&
                control.value !== '' &&
                control.value !== null &&
                control.value.length > 0 &&
                control.value.length !== allowCharacter
            ) {
                message = {
                    equalValidator: { message: strValidationMsg },
                };
                return message;
            }
            return null;
        };
    }

    static range(min: number, max: number, strValidationMsg: string) {
        return (control: AbstractControl): { [key: string]: boolean } | null => {
            let message = {};
            const regexp = new RegExp(/^[a-zA-Z0-9_\.]*$/);
            const isValid = regexp.test(control.value);
            const value = +control.value;
            if (
                control.value !== undefined &&
                control.value !== '' &&
                control.value !== null &&
                (value < min || value > max || isNaN(control.value) || !isValid)
            ) {
                message = {
                    range: { message: strValidationMsg },
                };
                return message;
            }
            return null;
        };
    }

    static zipInvalid() {
        const isValid = false;
        const message = {
            zipInvalid: { message: Constants.zipInvalid },
        };
        return isValid ? null : message;
    }

    // Used below method to check MC#, Pro# from database
    static checkNumberValidity() {
        const isValid = false;
        const message = {
            checkNumberValidity: { message: Constants.valInvalid },
        };
        return isValid ? null : message;
    }
    static duplicateValidator(
        firstString: string,
        secondString: string,
        strValidationMsg: string
    ): any {
        return (): { [key: string]: boolean } | null => {
            let message = {};
            if (firstString === secondString) {
                message = {
                    duplicateValidator: { message: strValidationMsg },
                };
                return message;
            }
            return null;
        };
    }
    static customRequiredValidation(valMessage: any): any {
        return (): { [key: string]: boolean } | null => {
            let message = {};

            message = {
                customRequiredValidation: { message: valMessage },
            };
            return message;
        };
    }
    static temperatureValidation(c: FormControl) {
        const regexp = new RegExp(/^-?[0-9]\d*(\.\d{1,2})?$/);
        const isValid = c.value ? regexp.test(c.value) : true;
        const message = {
            temperatureValidation: { message: Constants.valInvalid },
        };
        return isValid ? null : message;
    }
    static positiveNonDecimalValidation(c: FormControl) {
        const regexp = new RegExp(/^[+]?\d*$/);
        const isValid = c.value ? regexp.test(c.value) : true;
        const message = {
            positiveNonDecimalValidation: { message: Constants.valInvalid },
        };
        return isValid ? null : message;
    }
    static positiveNonDecimalGreaterZeroValidation(c: FormControl) {
        // const regexp = new RegExp(/^[1-9]\d*$/);
        // "/[1-9]+[0-9]*/" used for not allow single 0 but allow 0100 //
        const regexp = new RegExp(/[1-9]+[0-9]*/);
        const isValid = c.value ? regexp.test(c.value) : true;
        const message = {
            positiveNonDecimalGreaterZeroValidation: {
                message: Constants.valInvalid,
            },
        };
        return isValid ? null : message;
    }
    static writeOffDiscountValidation(isValid: any, value: any) {
        let message: any = null;
        if (!isValid) {
            message = {
                writeOffDiscountValidation: {
                    message: Constants.msgInvalidDiscount + value,
                },
            };
            return message;
        } else {
            return null;
        }
    }

    static numericWithZeroRequired(c: FormControl) {
        const isValid =
            c.value && c.value !== 0 && c.value !== '0' && c.value > 0 ? true : false;
        const message = {
            numValReqField: { message: Constants.valReqField },
        };
        return isValid ? null : message;
    }
    static allNumbersTwoDecimalValidation(c: FormControl) {
        const regexp = new RegExp(/^-?[0-9](\d|,)*(\.\d{1,2})?$/);
        const isValid = c.value ? regexp.test(c.value) : true;
        const message = {
            allNumbersTwoDecimalValidation: { message: Constants.valInvalid },
        };
        return isValid ? null : message;
    }
    static latitudeValidation(c: FormControl) {
        const regexp = new RegExp(/^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}$/);
        const isValid = c.value ? regexp.test(c.value) : true;
        const message = {
            latitudeValidation: { message: Constants.valLatitude },
        };
        return isValid ? null : message;
    }
    static longitudeValidation(c: FormControl) {
        const regexp = new RegExp(
            /^-?([1]?[0-7][0-9]|[1]?[1-8][0]|[1-9]?[0-9])\.{1}\d{1,6}$/
        );
        const isValid = c.value ? regexp.test(c.value) : true;
        const message = {
            longitudeValidation: { message: Constants.valLongitude },
        };
        return isValid ? null : message;
    }
    static duplicateReference() {
        const isValid = false;
        const message = {
            duplicateReference: { message: Constants.msgRefDuplicateValidation },
        };
        return isValid ? null : message;
    }
    static referenceNumRequired() {
        const isValid = false;
        const message = {
            referenceNumRequired: {
                message: Constants.msgReferenceNumRequiredValidation,
            },
        };
        return isValid ? null : message;
    }
    static percentageValidation(c: FormControl) {
        const isValid =
            !c.value || (c.value && +c.value >= 0 && +c.value <= 100) ? true : false;
        const message = {
            percentageValidation: { message: Constants.percentageValidation },
        };
        return isValid ? null : message;
    }

    static noWhiteSpaceandSpecialChar(c: FormControl) {
        const regexp = new RegExp('^[0-9a-zA-Z\b]+$');
        const isValid = c.value ? regexp.test(c.value) : true;
        const message = {
            noWhiteSpace: { message: Constants.valAlphaNumeric },
        };
        return isValid ? null : message;
    }
}
