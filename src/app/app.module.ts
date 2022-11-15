import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicosComponent } from './intermedio/espias/medicos.component';
import { MedicoComponent } from './intermedio2/medico/medico.component';
import { HospitalComponent } from './intermedio2/hospital/hospital.component';
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from './intermedio2/incrementador/incrementador.component';
import { RouterModule } from '@angular/router';
import { RUTAS } from './avanzado/app.routes';
import { NavBarComponent } from './avanzado/nav-bar/nav-bar.component';
import { RouterMedicoComponent } from './avanzado/router-medico/router-medico.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavBarComponent,
    RouterMedicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(RUTAS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
