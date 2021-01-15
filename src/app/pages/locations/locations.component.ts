import { LocationsService } from './../../shared/services/locations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  locations: any;

  constructor(private LocationsService: LocationsService) { }

  ngOnInit(): void {
    this.getLocations(1);
  }
  getLocations(page: any){
    this.LocationsService.getLocations(page).subscribe((res: any) => {
      this.locations = res.results
      console.log(res);
  });
  }

}
