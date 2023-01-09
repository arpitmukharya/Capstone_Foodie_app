import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function checkEmail():ValidatorFn{
    return (control:AbstractControl):ValidationErrors | null=>{
        let regex=new RegExp(/^\w+([\.-]?\w+)*@[a-z]*(\.\w{2,3})+$/);
        let valid=regex.test(control.value);
       if(valid){
        return null;
       }else{
        return {checkEmail:{value:control.value}}
       }
    }
}