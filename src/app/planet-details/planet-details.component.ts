import { Component } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent {
  planet: any = {};
  characters: any[] = [];
  filter: string = 'all';

  constructor(private route: ActivatedRoute, private swapiService: SwapiService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.swapiService.getPlanet(+id)
        .subscribe((data: any) => {
          this.planet = data;
        });
      this.swapiService.getResidents(+id).subscribe(residents => {
        this.characters = residents;
      });
    }
  }

  getFilteredCharacters() {
    if (this.filter === 'all') {
      return this.characters;
    } else {
      return this.characters.filter((character) => {
        return character.gender.toLowerCase() === this.filter;
      });
    }
  }
}
