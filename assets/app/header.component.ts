import { Component } from "@angular/core";
import {AuthService} from "./auth/auth.service";

@Component ({
    selector: 'app-header',
    template: ` <header class="row">
 <nav class="col-md-8 col-md-offset-2">
        <ul class="nav nav-pills">
        <li routerLinkActive="active"><a [routerLink]="['/messages']">Messenger</a></li>
        <li routerLinkActive="active"><a *ngIf="!isLoggedIn()" [routerLink]="['auth']">Authentication</a>
        <a *ngIf="isLoggedIn()" [routerLink]="['auth/logout']">Authentication</a></li>
</ul>
</nav>
</header>
`
})

export class HeaderComponent {
    constructor (private authService: AuthService) {}

    isLoggedIn () {
        return this.authService.isLoggedIn();
    }
}