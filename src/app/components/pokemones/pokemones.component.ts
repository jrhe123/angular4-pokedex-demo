import { Component, OnInit } from '@angular/core';

// Services
import { PokemonesService, PokemonRules } from '../../services/pokemones.service';

@Component({
	selector: 'app-pokemones',
	templateUrl: './pokemones.component.html',
	styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent implements OnInit {

	pokemones: PokemonRules[] = [];

	// Inject service in constructor
	constructor(
		private pokemonesService: PokemonesService
	) { }

	ngOnInit() {
		this.pokemones = this.pokemonesService.getPokemones();
	}

}
