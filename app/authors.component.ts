import {Component} from 'angular2/core';
import {AuthorsService} from './authors.service';
import {AutoGrowDirective} from './auto-grow.directive';

@Component({
    selector: 'authors',
    template: `
        <h2>Authors</h2>
        {{ title }}
        <input type="text" autoGrow />
        <ul>
            <li *ngFor="#author of authors">
                {{ author }}
            </li>
        </ul>
    `,
    providers: [AuthorsService],
    directives: [AutoGrowDirective]
})
export class AuthorsComponent {
    authors: string[];
    title = "Title for the author page.";
    
    constructor(authorService: AuthorsService) {
        this.authors = authorService.getAuthors();
    }
}