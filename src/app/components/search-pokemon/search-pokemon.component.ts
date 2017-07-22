import { Component, OnInit } from '@angular/core';


// Route
import { ActivatedRoute } from '@angular/router';

// Services
import { PokemonesService, PokemonRules } from '../../services/pokemones.service';

@Component({
	selector: 'app-search-pokemon',
	templateUrl: './search-pokemon.component.html',
	styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit {

	pokemones: PokemonRules[] = [];

	constructor(
		private activatedRoute:ActivatedRoute,
		private pokemonesService:PokemonesService
	) { 
		this.activatedRoute.params.subscribe(params=>{
			this.pokemones = this.pokemonesService.searchPokemon(params['name']);
		})
	}

	ngOnInit() {
	}

}
