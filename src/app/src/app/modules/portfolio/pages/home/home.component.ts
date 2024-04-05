import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { KnowledgeComponent } from '../../components/knowledge/knowledge.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { Observable, defer, of } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { subscribe } from 'diagnostics_channel';
import { Interface } from 'readline';
import { Pipe } from 'stream';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, KnowledgeComponent, ExperiencesComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})



export class HomeComponent {

  //criado observavel
  //experiencias = of (2, 3, 5);
  experiencias = new Observable((observer)=>{
    observer.next([{nome:"Hamilton Ventura Rodrigues",idade:"32",profissao:"programador"}]);
    observer.next([{nome:"Aline Alves Quevedo",idade:"25",profissao:"Tecnica em enfermagem"}]);
    observer.next([{nome:"João das Neves",idade:"29",profissao:"Corvo"}]);
  })


  constructor() {

  }

  ngOnInit() {
    //o subscribe ele instancia nosso observable
    this.experiencias.subscribe(
      value => {
        console.log(value);
      }
    )
  }
}

