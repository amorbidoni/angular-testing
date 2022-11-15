import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

import { NavBarComponent } from './nav-bar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarComponent ],
      imports:[RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('Debe tener un link a la pagina de medicos', () => {
    fixture = TestBed.createComponent( NavBarComponent );
    const debubElements = fixture.debugElement.queryAll( By.directive(RouterLinkWithHref) );
  
    let existe:boolean = false;
    for(const element of debubElements){
      if(element.attributes['routerLink']=== '/medicos'){
        existe  = true; 
        break;
      }      
    }
    expect(existe).toBeTruthy()
  });
});
