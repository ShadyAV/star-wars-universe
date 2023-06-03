import { Component } from '@angular/core';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent {

  planets: any[] = [];

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
    this.swapiService.getPlanets()
      .subscribe((data: any) => {
        this.planets = data.results;
      });
  }


}
