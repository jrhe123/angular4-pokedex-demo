import { Component, OnInit } from '@angular/core';

// Route
import { ActivatedRoute } from '@angular/router';

// Services
import { PokemonesService, PokemonRules } from '../../services/pokemones.service';

@Component({
	selector: 'app-pokemon-info',
	templateUrl: './pokemon-info.component.html',
	styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {

	pokemon: PokemonRules;

	constructor(
		private activatedRoute: ActivatedRoute,
		private pokemonesService: PokemonesService
	) { }

	ngOnInit() {
		let id = this.activatedRoute.snapshot.params['id'];
		this.pokemon = this.pokemonesService.getPokemonById(id);
	}

}
