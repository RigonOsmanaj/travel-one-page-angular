import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { DestinationsService } from '../../services/destionatoins.service';

@Component({
  selector: 'app-destinations',
  imports: [CardComponent],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.scss',
})
export class DestinationsComponent {
  destinations: any[] = [];

  constructor(private destinationsService: DestinationsService) {}

  ngOnInit(): void {
    this.destinationsService.getDestinations().subscribe(
      (data) => {
        this.destinations = data;
        console.log('Data got sucessfuly', data);
      },
      (error) => {
        console.error('Error fetching destinations data:', error);
      }
    );
  }

  chunkedDestinations(): any[][] {
    const chunkSize = 3;
    const chunks: any[][] = [];
    for (let i = 0; i < this.destinations.length; i += chunkSize) {
      chunks.push(this.destinations.slice(i, i + chunkSize));
    }
    console.log('The chunks of data', chunks);
    return chunks;
  }
}
