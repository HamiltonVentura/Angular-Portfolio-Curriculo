import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { subscribe } from 'diagnostics_channel';
import { sign } from 'crypto';

interface ITasks{
  id: string;
  title:string;
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public user = signal("Hamilton");

  public user$ = new BehaviorSubject("dadinh");

  private list:Array<string>=[
    "x-bacon",
    "feijao",
    "ovo"
  ];

  public getTask = signal(null);

  public url = signal('https://us-central1-curso-de-angular-api.cloudfunctions.net/app/tasks/');
  public urlConselho =  signal('https://api.chucknorris.io/jokes/random');

  public httpListTask$(): Observable <any>{
    return this._http.get<ITasks>(this.url());
  }

  public httpListaNorrys$(): Observable <any>{
    return this._http.get<any>(this.urlConselho());
  }

  constructor(private _http:HttpClient) { }

  public foodList(){
    return this.list
  }


}
