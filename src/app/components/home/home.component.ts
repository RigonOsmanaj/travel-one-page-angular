import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { JumbotronComponent } from '../jumbotron/jumbotron.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { DestinationsComponent } from '../destinations/destinations.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    JumbotronComponent,
    AboutUsComponent,
    DestinationsComponent,
    ContactUsComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
