import {HeroFormComponent} from './hero-form.component'
import {Component, View, OnInit} from 'angular2/core';
import {userService} from './service/user.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {User} from './service/models/user';

@Component({
    selector: 'user',
    template: `
	<ul>
	    <li *ngFor="#user of users">
	      {{ user.name }}
	    </li>
    </ul>
	`,
	providers: [
		HTTP_PROVIDERS,
		userService
	]
})

export class AppComponent implements OnInit{ 
	constructor (private _userService: userService) {}
	users: Array<Object>;
	errorMessage: String;
	data: String;

	ngOnInit() { this.getUsers(); }

	postUser(data){
		console.log(data);
	}

	getUsers() {
		this._userService.getUsers().subscribe(
			users => this.users = users,
			error => this.errorMessage = <any>error
		);
	}
};

