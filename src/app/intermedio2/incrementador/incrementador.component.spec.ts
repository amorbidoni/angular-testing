import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe mostrar la leyenda', () => {

        component.leyenda = 'Progreso de carga';
        fixture.detectChanges() // Disparar la deteccion de cambios
        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

        expect( elem.innerHTML ).toContain('Progreso de carga');

    });


    it('Debe mostrar en el input el valor del progreso', ()=>{
    
        component.cambiarValor( 5 );
        fixture.detectChanges();

        // como el ciclo de deteccion de cambios suele demorar usamos whenstable.. una forma de 'async await'
        fixture.whenStable().then(()=>{
            const elem:HTMLInputElement = fixture.debugElement.query( By.css('input') ).nativeElement;    
            expect( elem.value ).toBe( '55' );
        })
    })

    it('Debe incrementar/decrementar en 5 con un click en el boton', ()=>{
        
        const btns = fixture.debugElement.queryAll( By.css('.btn-primary') )

        btns[0].triggerEventHandler('click', null);
        expect( component.progreso ).toBe( 45 );
        
        btns[1].triggerEventHandler('click', null);
        expect( component.progreso ).toBe( 50 );
    })

    it('El progreso debe restar 5 al apretar el btn restar', ()=>{
        
        const btns = fixture.debugElement.queryAll( By.css('.btn-primary') );
        const progress:HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

        btns[0].triggerEventHandler('click', null);

        fixture.detectChanges();

        fixture.whenStable().then(()=>{
            expect( progress.innerHTML ).toContain( '45' );
        })
    })

});
