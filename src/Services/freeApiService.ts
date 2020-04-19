import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Posts} from '../classes/Posts';


@Injectable()
export class freeApiService
{
    constructor(private httpClient:HttpClient){}

    getComments():Observable<any>{

        return this.httpClient.get('https://jsonplaceholder.typicode.com/posts')

    }
    getCommentsByParameter():Observable<any>{
        let params1= new HttpParams().set('userId', '1');

        return this.httpClient.get('https://jsonplaceholder.typicode.com/posts',{params:params1})

    }
    post(oposts:Posts):Observable<any>{

        return this.httpClient.post('https://jsonplaceholder.typicode.com/posts',oposts);

    }
}