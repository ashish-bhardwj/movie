import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../model/movie';

@Pipe({
    name: 'sortBy'
})

export class SortByPipe implements PipeTransform {
    transform(movies: Movie[], args: any): Movie[] {
        // checks array is defined or not
        if (movies != undefined) {
            //sort the array based on sortPredicate
            movies.sort(function (a, b) {
                if (a[args] < b[args])
                    return -1;
                if (a[args] > b[args])
                    return 1;
                return 0;
            });
        }
        return movies;
    }
}