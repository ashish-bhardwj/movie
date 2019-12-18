import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { MovieService } from '../service/movie.service';


@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    constructor(public movieService: MovieService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.movieService.show();
        return next.handle(req).pipe(
            finalize(() => this.movieService.hide())
        );
    }

}