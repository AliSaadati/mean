import { Component } from '@angular/core';

@Component ({
    selector: 'app-messages',
    template: `
    <div class="row">
        <app-message-input>Loading Input</app-message-input>
    </div>
    <hr>
    <div class="row">
            <app-message-list>Loading Messages</app-message-list>
    </div>
`
})

export class MessagesComponent {

}