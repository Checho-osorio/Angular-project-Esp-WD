import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { ServicesSectionComponent } from './components/utils/services-section/services-section.component';
import { PortafolioComponent } from './components/utils/portafolio/portafolio.component';
import { AboutComponent } from './components/utils/about/about.component';
import { ClientsComponent } from './components/utils/clientes/clients.component';
import { ContactoComponent } from './components/utils/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    NavComponent,
    ServicesSectionComponent,
    PortafolioComponent,
    AboutComponent,
    ClientsComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
