import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tache } from '../tache.model';
import { TachesService } from '../taches.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tache-item',
  templateUrl: './tache-item.page.html',
  styleUrls: ['./tache-item.page.scss'],
})
export class TacheItemPage implements OnInit {
  
  loadedTache?: Tache;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tacheService:TachesService,
    private router: Router,
    private alertCtr: AlertController) { }
 

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('tacheId')) return;
      const tacheId = paramMap.get('tacheId');
      this.loadedTache = this.tacheService.getTache(tacheId!);
    })
  }
  onDeleteTache() {
    this.alertCtr.create({
      header: 'Are you sur ?',
      message: 'Do you really want to delete the recipe ?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel'
      },{
        text: 'Delete',
        handler: () => {
          this.tacheService.deleteTache(this.loadedTache?.id!);
          this.router.navigate(['/taches']);
        }
      }]
    }).then(alertEl => {
      alertEl.present();
    })
  }

}
