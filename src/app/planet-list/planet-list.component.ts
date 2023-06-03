import { Component } from '@angular/core';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent {

  planets: any[] = [];
  page: number = 1;

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
    this.swapiService.getPlanets(this.page)
      .subscribe((data: any) => {
        this.planets = data.results;
      });
  }

  getPlanets(id: number) {
    this.swapiService.getPlanets(id)
      .subscribe((data: any) => {
        this.planets = data.results;
      });
  }

  nextPage() {
    if (this.page !== 6) {
      this.page++;
    }
  }

  prevPage() {
    if (this.page !== 1) {
      this.page--;
    }
  }

}
