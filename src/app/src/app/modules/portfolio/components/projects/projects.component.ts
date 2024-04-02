import { Component, signal } from '@angular/core';
import { IProjects } from '../../../interface/IProjetcts.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src:'../../../../../../../assets/img/projects/vfull.png',
      alt:'Projeto Vida Fullstack',
      title:'Vida Fullstack',
      width:'100px',
      height:'51px',
      description:'Explore o facinante mundo da tecnologia e nossa aprendizagem;',
      links: [
        {
          name:'Conheça o Blog',
          href:'https://vidafullstack.com.br'
        }
      ]
    }
  ])
}
