import { subscribe } from 'diagnostics_channel';
import { KnowledgeComponent } from './../../components/knowledge/knowledge.component';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, single } from 'rxjs/operators';
import { HeaderComponent } from '../../components/header/header.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';
import { ProjectsComponent } from '../../components/projects/projects.component';

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
           ProjectsComponent],
  standalone: true
})

export class HomeComponent implements OnInit {

  experiencias: Observable<Experiencia[]>;
  umDadoSingle: any = new Observable();


  constructor() {
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
    this.experiencias.pipe(
      filter((dados) => dados[0].nome.startsWith("J"))
    ).subscribe(dado => console.log(dado));

    this.experiencias.pipe(
      filter((x) => x[0].profissao=="programador"))
      .subscribe(informacao =>console.log(informacao));

    this.umDadoSingle.pipe(
      single((dado:any) => dado.categoria.startsWith("p")))
      .subscribe({
        next: (dado:any) => console.log(dado), // Mudança para 'dado' devido a nomenclatura correta
        error:(error:any) => console.error(error)
      });

  }
}

