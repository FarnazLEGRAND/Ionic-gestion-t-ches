import { Injectable } from '@angular/core';
import { Tache } from './tache.model';

@Injectable({
  providedIn: 'root'
})
export class TachesService {
taches:Tache[]=[
  {
    id: '1',
    imageUrl:'https://previews.123rf.com/images/inna0910/inna09101809/inna0910180900046/109899797-heureuse-mère-tenant-son-fils-illustration-vectorielle-d-un-design-plat.jpg',
    titre: "amenner les enfant a l'ecole" ,
    description: 'description1',
    priority: 'high',
    expiration: '2023-08-10',
},
{
  id: '2',
  imageUrl:'https://previews.123rf.com/images/esquareartlab/esquareartlab2210/esquareartlab221000097/192634015-silhouette-abstraite-d-un-athlète-en-cours-d-exécution-sur-fond-blanc-une-femme-coureuse-court-un.jpg',
  titre: "faire running" ,
  description: 'description2',
  priority: 'Moyen',
  expiration: '2023-08-10',
},
{
  id: '3',
  imageUrl:'https://previews.123rf.com/images/pushkaash/pushkaash1911/pushkaash191100012/134863140-famille-heureuse-avec-shopping-le-père-la-mère-et-la-fille-tiennent-des-sacs-et-des-cadeaux.jpg',
  titre: "faire shoping" ,
  description: 'description3',
  priority: 'high',
  expiration: '2023-08-10',
}
]

getAllTache() {
  return this.taches;
}

getTache(tacheId: string){
  return this.taches.find(tache => {
    return tache.id === tacheId
  })
}

 deleteTache(tacheId: string){
this.taches=this.taches.filter(tache=>{
  return tache.id! =tacheId
})
}




constructor() { }
}