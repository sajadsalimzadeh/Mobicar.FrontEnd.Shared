import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {BehaviorSubject, tap} from "rxjs";

interface ParameterDto {
    id: string;
    en: string;
    fa: string;
}

@Injectable({providedIn: 'root'})
export class ParameterRepository {

    $parameters = new BehaviorSubject<{ [key: string]: string }>({});

    constructor(private http: HttpClient) {
    }

    getAll() {
        return this.http.get<ParameterDto[]>('assets/api/parameters.json').pipe(tap(res => {
            const translations: any = {};
            res.forEach(x => {
                translations[x.id] = x.fa ?? x.en;
            })
            this.$parameters.next(translations);
        }));
    }
}
