import { Component } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent {

  planets: any[] = [];
  page: number = 1;
  planetId: number = 1;

  constructor(private swapiService: SwapiService, private route: ActivatedRoute, private router: Router) { }

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

  showPlanetDetails(url: string) {
    const id = url.split('/')[5];
    this.router.navigate(['/planets', id]);
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
