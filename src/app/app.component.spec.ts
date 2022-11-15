import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterLink, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { By } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';



describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      // para ignorar cualquier directiva que no conozca ↓
      schemas:[NO_ERRORS_SCHEMA],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pruebas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('pruebas');
  });
  it('Debe tener un router outlet', () => {
    const fixture = TestBed.createComponent( AppComponent );
    
    const debugElement = fixture.debugElement.query( By.directive(RouterOutlet) );
    
    expect(debugElement).not.toBeNull();
  });
  
  
  
});
