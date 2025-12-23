import { FormArray, FormGroup, ValidationErrors } from "@angular/forms";



export class FormUtils{
  //Expresiones regulares
  static namePattern = '([a-zA-Z]+) ([a-zA-Z]+)';
  static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  static notOnlySpacesPattern = '^[a-zA-Z0-9]+$';

 static isValidField(form:FormGroup ,fieldName: string):boolean|null{
    return (
      !!form.controls[fieldName].errors &&
      form.controls[fieldName].touched
    )};


    static getTexErrors(errors: ValidationErrors){
       for( const key of Object.keys(errors)){

      switch (key){
        case 'required':
          return 'Este campo es requerido'

        case 'minlength':
          return `Minimo de ${ errors['minlength'].requiredLength} caracteres`

        case 'min':
          return `Valor minimo de ${ errors['min'].min}`

        case 'email':
          return 'El valor ingresado no es un correo electrónico'

        case 'pattern':
          if(errors['pattern'].requiredPattern === FormUtils.emailPattern){
            return 'El valor ingresado no luce como un correo electronico'
          }
          return 'Error de patron contra expresion regular'

        default:
          return 'Error de validacíon no controlado'
        }
      }
      return null
    }

  static getFiledError(form: FormGroup, fieldName: string): string|null{
    if(!form.controls[fieldName].errors) return null

    const errors = form.controls[fieldName].errors ?? {};
      return FormUtils.getTexErrors(errors);

  }

   static isValidFieldInArray(formArray: FormArray, index:number){
    return(
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  }


  static getFiledErrorInArray(formArray: FormArray, index: number): string|null{
    if(formArray.controls.length === 0) return null;

    const errors = formArray.controls[index].errors ?? {};
    return FormUtils.getTexErrors(errors);
  }


}
