import { FormGroup } from '@angular/forms';
export function PasswordChecker( controlName:string,compareControlName:string){
    // return the result to the formgroup
    return (formGroup:FormGroup)=>{
        const password =formGroup.controls[controlName];
        const confirmPassword =formGroup.controls[compareControlName];

        // if both fileds
        if(password.value !== confirmPassword.value){
            confirmPassword.setErrors({mustmatch:true});
        }else{
            confirmPassword.setErrors(null);
        }
    }
}
