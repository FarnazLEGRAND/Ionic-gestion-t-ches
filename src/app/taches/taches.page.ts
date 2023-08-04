import { Component, OnInit } from '@angular/core';
import { Tache } from './tache.model';
import { TachesService } from './taches.service';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.page.html',
  styleUrls: ['./taches.page.scss'],
})
export class TachesPage implements OnInit {
  taches: Tache[] = [];
  constructor(private tacheService:TachesService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.taches = this.tacheService.getAllTache () ;
    }

}
