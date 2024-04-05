import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  //um observable observavel contem valores multiplos.
   experiencias$ = new Observable<string>((observer)=>{
      observer.next("a");
      observer.next("b");
      observer.next("c");
      observer.next("d");
      observer.next("e");
  });

  constructor() {


   }
}
