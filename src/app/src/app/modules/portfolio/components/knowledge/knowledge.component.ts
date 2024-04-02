import { Component, signal } from '@angular/core';
import { knowledge } from '../../../interface/knowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [KnowledgeComponent],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge= signal<knowledge[]>([
    {
      src:"../../../../../../../assets/icons/knowledge/html5.svg" ,
      alt: "icone de conhecimento em HTML"
    },
    {
      src:"../../../../../../../assets/icons/knowledge/css3.svg" ,
      alt: "icone de conhecimento em CSS"
    },
    {
      src:"../../../../../../../assets/icons/knowledge/javascript.svg" ,
      alt: "icone de conhecimento em Javascript"
    },
    {
      src:"../../../../../../../assets/icons/knowledge/angular.svg" ,
      alt: "icone de conhecimento em Angular"
    },
  ])
}
