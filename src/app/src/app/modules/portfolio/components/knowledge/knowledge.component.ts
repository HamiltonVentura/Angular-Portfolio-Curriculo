import { subscribe } from 'diagnostics_channel';
import { Component, OnInit, signal } from '@angular/core';
import { knowledge } from '../../../interface/knowledge.interface';
import { HomeService } from '../../pages/home/home.service';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [KnowledgeComponent],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent implements OnInit {


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
  ]);

  constructor( private homeService:HomeService){}

  ngOnInit() {
    this.homeService.user$.subscribe({
      next: (next)=> console.log("valor alterado",next),
      complete: () =>console.log("completo"),
    })

    this.homeService.user.set("alteradinho");
  }
}
