import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})

export class ExperiencesComponent {
  public arrayExperiences = signal([{
    sumary: {
      strong: 'Desenvolvedor Frontend',
      p: 'Agosto de 2021 | Setembro 2023'
    },
    text: '<p>Experiência Desenvolvendo Web Sites.</p>',
  },{
    sumary: {
      strong: 'Analista de suporte',
      p: 'Agosto de 2021 | Setembro 2023'
    },
    text: '<p>Experiência Desenvolvendo Web Sites.</p>',
  },{
    sumary: {
      strong: 'Gestor de Agência ',
      p: 'Agosto de 2023 | Setembro 2023'
    },
    text: '<p>Experiência Gestão, manipulação de ferramentas de edição vetorial, Bitmaps e video.Os principais softwares utilizados contavam com adobe Premier, adobe Illustrator, adobe Photoshop..</p>',
  },{
    sumary: {
      strong: 'Desenvolvedor Frontend',
      p: 'Agosto de 2021 | Setembro 2023'
    },
    text: '<p>Experiência Desenvolvendo Web Sites.</p>',
  },{
    sumary: {
      strong: 'Desenvolvedor Frontend',
      p: 'Agosto de 2021 | Setembro 2023'
    },
    text: '<p>Experiência Desenvolvendo Web Sites.</p>',
  }
  ]);
}
