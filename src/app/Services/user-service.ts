import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { userModel } from "../Models/user-model";

@Injectable({
    providedIn: 'root'
})

export class UserService{
    constructor(private http: HttpClient){}

    getAllUsers():Observable<userModel[]>{
       return this.http.get<userModel[]>('https://jsonplaceholder.typicode.com/users');
    }
}