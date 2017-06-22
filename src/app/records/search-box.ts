import {Component, Output, EventEmitter, Directive} from "@angular/core";

@Component({
    selector: 'search-box',
    template: ` <md-toolbar color="white">
                        <md-icon>search</md-icon>
                        <md-input-container class="example-full-width">
                        <input #input mdInput type="search" (input)="update.emit(input.value)" placeholder="search by artist">
                    </md-input-container>
                </md-toolbar>`
})
export class SearchBox {
    @Output() update = new EventEmitter();

    ngOnInit() {
        this.update.emit('');
    }
}