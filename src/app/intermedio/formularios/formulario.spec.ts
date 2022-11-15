import { Formulario } from './formulario';
import { FormBuilder } from '@angular/forms'
describe('Pruebas en Formulario', ()=>{
    
        let component:Formulario; 
        
        beforeEach(()=>{
            component = new Formulario( new FormBuilder());
        }
        )

        it('Debe crear un formulario con dos campos', ()=>{

            expect( component.form.contains('email') ).toBeTruthy();
            expect( component.form.contains('password') ).toBeTruthy();

            }
        )

        it('El email debe ser obligatorio', ()=>{
            
            const control = component.form.get('email');
            control!.setValue('');
            expect( control?.valid ).toBeFalsy(); 

            }
        )

        it('El email debe ser un correo valido', ()=>{
            
            const control = component.form.get('email');
            control!.setValue('asd@asd.com');
            expect( control?.valid ).toBeTruthy(); 

            }
        )
    }   
)