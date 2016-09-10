import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent { 

    // [ ] property binding
    // () event bindng

    title = 'Customer App';
    name = 'angular 2 app';
    currentColour = 'blue';
    customers = [
        {id:1,name:'bob'},
        {id:2,name:'james'},
        {id:3,name:'adam'},
        {id:4,name:'ray'},
    ];

    changeColour(){
        this.currentColour = 'red';
    }
}
