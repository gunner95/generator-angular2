import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
	<div class="jumbotron">
	Welcome to the app
	<p>{{message}}</p>
	</div>
	`
})

export class AppComponent{
	message = 'Helloooo'
}