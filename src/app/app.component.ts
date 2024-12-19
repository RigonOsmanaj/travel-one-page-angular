import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DestinationsComponent } from './components/destinations/destinations.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    JumbotronComponent,
    AboutUsComponent,
    DestinationsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'travel-one-page-angular';
}
