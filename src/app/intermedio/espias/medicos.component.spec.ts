import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { EMPTY, from, of, throwError } from 'rxjs';




describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null!);
    let espia!:any;

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });


    it('NgOnInit debe cargar los mêdicos', () => {

        // espias para ahcer peticiones falsas

        spyOn(servicio, 'getMedicos').and.callFake(()=>{
                return from(['Medico 1', 'Medico 2', 'Medico 3']);
            }
        );
      
        componente.ngOnInit();
        
        expect( componente.medicos.length ).toBeGreaterThan(0);
        
    }); 
    
    
    it('Debe llamar al servidor para agregar un medico',  ()=>{
        
        espia =  spyOn(servicio, 'agregarMedico').and.callFake(medico => of(EMPTY))
    
        componente!.agregarMedico()
    
        expect( espia ).toHaveBeenCalled()
    });   

        
    it('Debe agregar un nuevo medico al arreglo de medicos', ()=>{
            const medico = {id:'123', nombre: 'Andres'};

            spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));

            componente.agregarMedico();

            expect( componente.medicos.length ).toBe( 1 );
            expect( componente.medicos.indexOf(medico) ).toBeGreaterThanOrEqual( 0 );

        }
    )

    it('Si falla la adición el mensaje de error debe ser igual al error del servicio', ()=>{

        const miError = 'No se pudo agregar el medico';

        spyOn(servicio, 'agregarMedico').and.returnValue( throwError(()=> miError));
        
        componente.agregarMedico();

        expect( componente.mensajeError ).toBe(miError);

    })

    it('Debe llamar al servidor para borrar medico', ()=>{

        // para simular una confirmacion del usuario
        spyOn(window, 'confirm').and.returnValue(true);

        espia = spyOn(servicio, 'borrarMedico').and.returnValue(of(EMPTY))

        componente.borrarMedico('1');

        expect( espia ).toHaveBeenCalledWith('1')
     })

     it('No debe llamar al servidor para borrar medico si el usuario no confirma', ()=>{

        // para simular una cancelacion del usuario
        spyOn(window, 'confirm').and.returnValue(false);

        espia = spyOn(servicio, 'borrarMedico').and.returnValue(of(EMPTY))

        componente.borrarMedico('1');

        expect( espia ).not.toHaveBeenCalledWith('1')
     })

});
