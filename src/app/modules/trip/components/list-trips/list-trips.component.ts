import { Component } from '@angular/core';
import { ITrip } from '../../interfaces/trip.interface';
import { TripService } from '../../trip.service';

@Component({
  selector: 'list-trips',
  templateUrl: './list-trips.component.html',
  styleUrls: ['./list-trips.component.scss'],
  providers: [TripService]
})
export class ListTripsComponent {
  trips: ITrip[] = [];
  pageSize = 10;
  placeholders: any = [];
  pageToLoadNext = 1;
  loading = false;

  constructor(private tripService: TripService) {}

  loadNext() {
    if (this.loading) {
      return;
    }

    this.loading = true;
    this.placeholders = new Array(this.pageSize);
    this.tripService.fetch().subscribe({
      next: ({ data }) => {
        this.placeholders = [];
        this.trips = data.listTrips.data;
        this.pageToLoadNext++;
        this.loading = false;
      }
    });
  }

  ngOnInit(): void {
    this.loadNext();
  }
}
