import { subscribe } from 'diagnostics_channel';
import { KnowledgeComponent } from './../../components/knowledge/knowledge.component';
import { Component, OnInit, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, single } from 'rxjs/operators';
import { HeaderComponent } from '../../components/header/header.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { HomeService } from './home.service';
import { error } from 'console';
import { HttpClientModule } from '@angular/common/http';
import { AsyncPipe, NgFor } from '@angular/common';
import { Title } from '@angular/platform-browser';

interface Experiencia {
  nome: string;
  idade: string;
  profissao: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports:[HeaderComponent,
           KnowledgeComponent,
           ExperiencesComponent,
           ProjectsComponent,
           HttpClientModule,
           AsyncPipe,
           NgFor
          ],
  standalone: true
})

export class HomeComponent implements OnInit {

  conselhoOB: any[] | undefined;
  experiencias: Observable<Experiencia[]>;
  umDadoSingle: any = new Observable();
  foodList: Array<string> = [];
  public tarefas:any;
  public conselho:any;

  constructor( private home:HomeService) {
    this.experiencias = new Observable<Experiencia[]>((observer) => {
      observer.next([{ nome: "Hamilton Ventura Rodrigues", idade: "32", profissao: "programador" }]);
      observer.next([{ nome: "Aline Alves Quevedo", idade: "25", profissao: "Tecnica em enfermagem" }]);
      observer.next([{ nome: "João das Neves", idade: "29", profissao: "Corvo" }]);
      observer.complete();
    });

    this.umDadoSingle= of(
      {categoria:"programador"},
      {categoria:"Médico"},
      {categoria:"Administrador"}
    )
  }

  ngOnInit() {
    this.home.httpListTask$().subscribe({
      next: (next) =>{
        this.tarefas = next;
        console.log(next)
      },
      error: (error) => console.log(error),
      complete: ()=> console.log("Completado!"),
    })

    this.home.httpListaNorrys$().subscribe({
      next: (next) =>{
        this.conselho = next;
        console.log("dados:",next)
      },
      error: (error) => console.log(error),
      complete: ()=> console.log("Completado!"),
    })

    this.experiencias.pipe(
      filter((dados) => dados[0].nome.startsWith("J"))
    ).subscribe(dado => console.log(dado));

    this.experiencias.pipe(
     filter((x) => x[0].profissao == "programador"))
      .subscribe(informacao => console.log(informacao));

    this.umDadoSingle.pipe(
     single((dado: any) => dado.categoria.startsWith("p")))
      .subscribe({
       next: (dado: any) => console.log(dado),
        error: (error: any) => console.error(error)
      });

    this.foodList = this.home.foodList();
    console.log(this.home.user());

    this.home.user$.subscribe({
     next: (next) => console.log(next),
      error: (error) => console.log(error),
      complete: () => console.log("BEHAVIOR COMPLETO!"),
    }
   )

   this.home.user.set(' Valor subject alterado');







  }
}

