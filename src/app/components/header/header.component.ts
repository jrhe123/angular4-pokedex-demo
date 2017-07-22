import { Component, OnInit } from '@angular/core';

// Router
import { Router } from '@angular/router';


@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	constructor(
		private router: Router
	) { }

	ngOnInit() {
	}

	// Collapse settings
	isIn = false;
    toggleState() {
        let bool = this.isIn;
        this.isIn = bool === false ? true : false; 
    }

    searchPokemon(val: string){
    	this.router.navigate(['search',val]);
    }

}
