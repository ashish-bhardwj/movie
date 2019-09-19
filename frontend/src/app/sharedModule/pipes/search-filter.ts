import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../model/movie';

@Pipe({
    name: 'searchpipe'
})

export class SearchPipe implements PipeTransform {
    transform(movies: Movie[], args: any): Movie[] {
        if (args != undefined) {
            let resultantBooks = movies.filter(book => book.title.toUpperCase().indexOf(args.toUpperCase()) !== -1);
            return resultantBooks;

        }
        else {
            return movies;
        }
    }
}

