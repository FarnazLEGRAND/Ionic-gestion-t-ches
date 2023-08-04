import { Component, Input, OnInit } from '@angular/core';
import { Tache } from '../tache.model';

@Component({
  selector: 'app-single-tache',
  templateUrl: './single-tache.component.html',
  styleUrls: ['./single-tache.component.scss'],
})
export class SingleTacheComponent  implements OnInit {
  @Input() singleTache?:Tache
  constructor() { }

  ngOnInit() {}

}
