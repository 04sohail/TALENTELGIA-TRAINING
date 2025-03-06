class Validation {



    // ON BLUR VALIDATION //
    OnBlurValidate(event: Event, warningElement: HTMLElement): void {
        const inputTarget = event.target as HTMLInputElement
        const value: string | null = inputTarget.value?.trim();
        if (value.length == 0) {
            warningElement.innerHTML = "<small>This Field Is Required !!! </small>"
            warningElement.style.display = "block";
        }
    };
    // ON INPUT VALIDATION //
    OnInputValidateName(event: Event, regex: RegExp, warningElement: HTMLDivElement): void {
        const eventTarget = event.target as HTMLInputElement
        const value: string = eventTarget.value.trim();
        console.log(value);

        if (value.length > 15) {
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = "<small>Name Should Not be Greater Than 15 Letters </small>"
            warningElement.style.display = "block"
        } else if (!regex.test(value)) {
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = "<small>Name Should Be Alphabet</small>"
            warningElement.style.display = "block"

        } else {
            eventTarget.classList.remove("is-invalid");
            eventTarget.classList.add("is-valid");
            warningElement.innerHTML = "<small>This Field Is Required !!! </small>"
            warningElement.style.display = "none"
        }
    };
    OnInputValidateEmail(event: Event, regex: RegExp, warningElement: HTMLDivElement): void {
        const eventTarget = event.target as HTMLInputElement
        const value: string = eventTarget.value.trim();
        if (regex.test(value)) {
            warningElement.style.display = "none"
            eventTarget.classList.remove("is-invalid");
            eventTarget.classList.add("is-valid");
        } else {
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = "<small>Invalid Email !!! </small>"
            warningElement.style.display = "block"
        }
    };
    OnInputValidatePhone(event: Event, regex: RegExp, warningElement: HTMLDivElement): void {
        const eventTarget = event.target as HTMLInputElement
        const value: string = eventTarget.value.trim();
        if (regex.test(value)) {
            if (value.length > 10) {
                eventTarget.classList.remove("is-valid");
                eventTarget.classList.add("is-invalid");
                warningElement.innerHTML = "<small>Number Should Be 10 Digit</small>"
                warningElement.style.display = "block"
            }
            else {
                eventTarget.classList.add("is-valid");
                eventTarget.classList.remove("is-invalid");
                warningElement.innerHTML = "<small>This Field Is Required !!! </small>"
                warningElement.style.display = "none"
            }
        } else {
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = "<small>Invalid Number !!!</small>"
            warningElement.style.display = "block"
        }
    }
    OnInputValidateHNumber(event: Event, regex: RegExp, warningElement: HTMLDivElement): void {
        const maxLength = 30;
        const eventTarget = event.target as HTMLInputElement
        const value: string = eventTarget.value.trim();
        if (value.length > maxLength) {
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = `<small>House number cannot exceed ${maxLength} characters. Please shorten it.</small>`
            warningElement.style.display = "block"
        } else {
            eventTarget.classList.add("is-valid");
            eventTarget.classList.remove("is-invalid");
            warningElement.innerHTML = `<small>House number cannot exceed ${maxLength} characters. Please shorten it.</small>`
            warningElement.style.display = "none"
        }
        if (!regex.test(value)) {
            if (/[^A-Za-z0-9\s/#-]/.test(value)) {
                eventTarget.classList.remove("is-valid");
                eventTarget.classList.add("is-invalid");
                warningElement.innerHTML = "<small>House number can only contain letters, numbers, spaces, and the symbols `-`, `/`, or `#`.</small>"
                warningElement.style.display = "block"
            }
            else if (/[-/#]{2,}/.test(value)) {
                eventTarget.classList.remove("is-valid");
                eventTarget.classList.add("is-invalid");
                warningElement.innerHTML = "<small>House number cannot have consecutive special characters like `--` or `##`.</small>"
                warningElement.style.display = "block"
            }
            else if (/^[-/#]|[-/#]$/.test(value)) {
                eventTarget.classList.remove("is-valid");
                eventTarget.classList.add("is-invalid");
                warningElement.innerHTML = "<small>House number cannot start or end with `-`, `/`, or `#`.</small>"
                warningElement.style.display = "block"
            }
            else if (/^\s+$/.test(value)) {
                eventTarget.classList.remove("is-valid");
                eventTarget.classList.add("is-invalid");
                warningElement.innerHTML = "<small>House number cannot be empty or consist of only spaces.</small>"
                warningElement.style.display = "block"
            }
            else {
                eventTarget.classList.add("is-valid");
                eventTarget.classList.remove("is-invalid");
                warningElement.innerHTML = `<small>This Field Is Required !!! </small>`
                warningElement.style.display = "none"
            }
        }
    }
    OnInputValidateStreet(event: Event, regex: RegExp, warningElement: HTMLDivElement): void {
        const maxLength = 50;
        const eventTarget = event.target as HTMLInputElement
        const value: string = eventTarget.value.trim();
        if (value.length > maxLength) {
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = `<small>Street name cannot exceed ${maxLength} characters. Please shorten it.</small>`
            warningElement.style.display = "block"
        } else if (!regex.test(value)) {
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = "<small>Street name can only contain letters, numbers, spaces, and the symbols `.,#/-`. </small>"
            warningElement.style.display = "block"
        }
        else {
            eventTarget.classList.add("is-valid");
            eventTarget.classList.remove("is-invalid");
            warningElement.innerHTML = `<small>This Field Is Required !!! </small>`
            warningElement.style.display = "none"
        }
    }
    OnInputValidateCity(event: Event, regex: RegExp, warningElement: HTMLDivElement): void {
        const maxLength = 50;
        const eventTarget = event.target as HTMLInputElement
        const value: string = eventTarget.value.trim();
        if (value.length > maxLength) {
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = `<small>City name cannot exceed ${maxLength} characters.</small>`
            warningElement.style.display = "block"
        } else if (value.startsWith('.') || value.startsWith('-')) {
            console.log("INSIDE");
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = `<small>Can't Start With (-) Or (-)</small>`
            warningElement.style.display = "block"
        }
        else if (!regex.test(value)) {
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = "<small>Only letters, spaces, (.), and(-) allowed</small>"
            warningElement.style.display = "block"
        }
        else {
            eventTarget.classList.add("is-valid");
            eventTarget.classList.remove("is-invalid");
            warningElement.innerHTML = `<small>This Field Is Required !!! </small>`
            warningElement.style.display = "none"
        }
    }
    OnInputValidatePinCode(event: Event, regex: RegExp, warningElement: HTMLDivElement): void {
        const maxLength = 6;
        const eventTarget = event.target as HTMLInputElement
        const value: string = eventTarget.value.trim();
        if (value.length !== maxLength) {
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = `<small>Pincode must be exactly 6 digits.</small>`
            warningElement.style.display = "block"
        } else if (value[0] === "0") {
            console.log("INSIDE");
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = `<small>Pincode cannot start with 0.</small>`
            warningElement.style.display = "block"
        } else if (!regex.test(value)) {
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = "<small>Invalid pincode.</small>"
            warningElement.style.display = "block"
        } else {
            eventTarget.classList.add("is-valid");
            eventTarget.classList.remove("is-invalid");
            warningElement.innerHTML = `<small>This Field Is Required !!! </small>`
            warningElement.style.display = "none"
        }
    }
    OnInputValidateCompanyName(event: Event, regex: RegExp, warningElement: HTMLDivElement): void {
        const maxLength = 100;
        const eventTarget = event.target as HTMLInputElement
        const value: string = eventTarget.value.trim();
        if (value.length > maxLength) {
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = `<small>Company name cannot exceed 100 characters.</small>`
            warningElement.style.display = "block"
        } else if (!regex.test(value)) {
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = "<small>Invalid company name.</small>"
            warningElement.style.display = "block"
        }
        else {
            eventTarget.classList.add("is-valid");
            eventTarget.classList.remove("is-invalid");
            warningElement.innerHTML = `<small>This Field Is Required !!! </small>`
            warningElement.style.display = "none"
        }
    }
    OnInputValidateCompanyWeb(event: Event, regex: RegExp, warningElement: HTMLDivElement): void {
        const eventTarget = event.target as HTMLInputElement
        const value: string = eventTarget.value.trim();
        if (!regex.test(value)) {
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
            warningElement.innerHTML = "<small>Invalid website URL.</small>"
            warningElement.style.display = "block"
        } else {
            eventTarget.classList.add("is-valid");
            eventTarget.classList.remove("is-invalid");
            warningElement.innerHTML = `<small>This Field Is Required !!! </small>`
            warningElement.style.display = "none"
        }
    }
    OnInputValidatePassword(event: Event, warningElement: HTMLDivElement): void {
        const eventTarget = event.target as HTMLInputElement;
        const value: string = eventTarget.value.trim();

        if (value.length < 8) {
            warningElement.innerHTML = "<small>Password must be at least 8 characters long.</small>";
            warningElement.style.display = "block";
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
        } else if (!/[a-z]/.test(value)) {
            warningElement.innerHTML = "<small>Password must contain at least one lowercase letter.</small>";
            warningElement.style.display = "block";
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
        } else if (!/[A-Z]/.test(value)) {
            warningElement.innerHTML = "<small>Password must contain at least one uppercase letter.</small>";
            warningElement.style.display = "block";
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
        } else if (!/[0-9]/.test(value)) {
            warningElement.innerHTML = "<small>Password must contain at least one number.</small>";
            warningElement.style.display = "block";
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
            warningElement.innerHTML = "<small>Password must contain at least one special character.</small>";
            warningElement.style.display = "block";
            eventTarget.classList.remove("is-valid");
            eventTarget.classList.add("is-invalid");
        } else {
            warningElement.style.display = "none";
            eventTarget.classList.remove("is-invalid");
            eventTarget.classList.add("is-valid");
        }
    }
    // VALIDATE ADD EMPTY FIELD
    ValidateAddEmptyField(inputField: HTMLInputElement, warningElement: HTMLDivElement): boolean {
        if (inputField.value) {
            return true
        } else {
            console.log("FOCUS");
            inputField.focus();
            warningElement.innerHTML = "<small>This Field Is Required !!! </small>"
            warningElement.style.display = "block";
            return false;
        }
    };
    // VALIDATE REGEX
    ValidateRegex(input: HTMLInputElement, regex: RegExp): boolean {
        const value = input.value.trim();
        console.log(value);
        console.log(regex.test(value));
        if (regex.test(value)) {
            return true;
        } else {
            return false;
        }
    }
}
