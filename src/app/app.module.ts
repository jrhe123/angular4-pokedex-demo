// Default Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Router
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonesComponent } from './components/pokemones/pokemones.component';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component'
import { SearchPokemonComponent } from './components/search-pokemon/search-pokemon.component';

// Services
import { PokemonesService } from './services/pokemones.service';

// Modules



const appRoutes = [
	{path: "home", component: HomeComponent},
	{path: "pokemon", component: PokemonesComponent},
	{path: "pokemon/:id", component: PokemonInfoComponent},
	{path: "search/:name", component: SearchPokemonComponent},
	{path: "**", redirectTo: "home", pathMatch: "full"}
];

@NgModule({
	// Components
	declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent,
		PokemonesComponent,
		PokemonInfoComponent,
		SearchPokemonComponent
	],
	// Modules
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(appRoutes)
	],
	// Services
	providers: [
		PokemonesService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
