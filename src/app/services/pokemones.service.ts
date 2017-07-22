import { Injectable } from '@angular/core';

@Injectable()
export class PokemonesService {

	pokemones: PokemonRules[] = [
	{
		"id":"0",
		"name":"Bulbasaur",
		"image":"001.png",
		"type":"Planta",
		"desc":"Bulbasaur es fácil verle echándose una siesta al sol. La semilla que tiene en el lomo va creciendo cada vez más a medida que absorbe los rayos del sol."
	},
	{
		"id":"1",
		"name":"Charmander",
		"image":"002.png",
		"type":"Fuego",
		"desc":"La llama que tiene en la punta de la cola arde según sus sentimientos. Llamea levemente cuando está alegre y arde vigorosamente cuando está enfadado."
	},
	{
		"id":"2",
		"name":"Squirtle",
		"image":"003.png",
		"type":"Agua",
		"desc":"El caparazón de Squirtle no le sirve de protección únicamente. Su forma redondeada y las hendiduras que tiene le ayudan a deslizarse en el agua y le permiten nadar a gran velocidad."
	},
	{
		"id":"3",
		"name":"Pikachu",
		"image":"004.png",
		"type":"Elétrico",
		"desc":"Cada vez que un Pikachu se encuentra con algo nuevo, le lanza una descarga eléctrica. Cuando se ve alguna baya chamuscada, es muy probable que sea obra de un Pikachu, ya que a veces no controlan la intensidad de la descarga."
	}
	];

	constructor() { }

	getPokemones(){
		return this.pokemones;
	}

	getPokemonById(id: string){
		return this.pokemones.slice(0).find(pok => pok.id == id);
	}

	searchPokemon(val: string){
		
		let out = [];
		val = val.toLowerCase();
		for(let pok of this.pokemones){
			
			let name = pok.name.toLowerCase();
			if(name.indexOf(val) != -1){
				out.push(pok);
			}
		}
		return out;
	}

}

export interface PokemonRules{
	id: string;
	name: string;
	image: string;
	type: string;
	desc: string;
}