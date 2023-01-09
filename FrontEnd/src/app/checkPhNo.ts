import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function checkPhNo():ValidatorFn{
    return (control:AbstractControl):ValidationErrors | null =>{
        let regex=new RegExp(/^[6-9].[0-9]{8}$/);
        let valid=regex.test(control.value);
        if(valid){
         return null;
        }else{
         return {checkPhNo:{value:control.value}}
        }

    }
}