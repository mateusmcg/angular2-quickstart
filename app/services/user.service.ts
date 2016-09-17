import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { User } from '../model/user';

@Injectable()
export class UserService {
    
    private url: string = 'http://jsonplaceholder.typicode.com/users';
    
    constructor(private http: Http) { }
    
    getUsers(): Observable<User[]> {
        return this.http.get(this.url)
                    .map(result => result.json())
                    .catch(error => Observable.throw(error.json().error || 'Server error'));
    }
}