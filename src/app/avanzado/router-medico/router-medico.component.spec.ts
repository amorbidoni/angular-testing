import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, EMPTY, of, Subject } from 'rxjs';

class FakeRouter {
  navigate(params:any){

  }
}

class FakeActivatedRoute{
  // params:Observable<any> = of( EMPTY )
  private subject = new Subject();
  
  get params(){ 
    return this.subject.asObservable()
  }
  push(valor:any){
    this.subject.next(valor);
  }
}
describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers:[{provide : Router, useClass : FakeRouter },
                 {provide : ActivatedRoute, useClass : FakeActivatedRoute}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe redireccionar a medico cuando se guarde', () => {
    
    const router = TestBed.inject(Router);
    const spy = spyOn( router, 'navigate' );
    
    component.guardarMedico();

    expect( spy ).toHaveBeenCalledWith(['medico', '123']);
  });
  
  it('Debe colocar el ID = nuevo', () => {
    component = fixture.componentInstance;
    const activateRout:FakeActivatedRoute = TestBed.get(ActivatedRoute);
    activateRout.push({id : 'nuevo'});
    expect(component.id).toBe('nuevo');
  });
  
});
