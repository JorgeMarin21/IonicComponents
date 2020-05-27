import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild('lista', { static: false }) lista: IonList;
  usuarios: Observable<any>;
  constructor(private dataService: DataService, private toastCtrl: ToastController) { }

  // async presentToast(message: string) {
  //   const toast = await this.toastCtrl.create({
  //     message,
  //     duration: 2000
  //   });
  //   toast.present();
  // }
// con opciones
  // async presentToast(message: string) { 
  //   const toast = await this.toastCtrl.create({
  //     header: 'Toast header',
  //     message,
  //     position: 'top',
  //     buttons: [
  //       {
  //         side: 'start',
  //         icon: 'star',
  //         text: 'Favorite',
  //         handler: () => {
  //           console.log('Favorite clicked');
  //         }
  //       }, {
  //         text: 'Done',
  //         role: 'cancel',
  //         handler: () => {
  //           console.log('Cancel clicked');
  //         }
  //       }
  //     ]
  //   });
  //   toast.present();
  // }

  async presentToast(message: string, header: string, color: string) {
    const toast = await this.toastCtrl.create({
      header,
      message,
      color,
      position: 'top',
      duration: 2500,
      buttons: [ {
          side: 'end',
          icon: 'close-circle',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }
  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }
  share(user) {
    // console.log(user);
    // console.log('Compartir');
    this.presentToast('El usuario fue compartido con éxito', 'Compartido', 'primary');
    this.lista.closeSlidingItems();
  }
  favorite(user) {
    // console.log(user);
    // console.log('Favorito');
    this.presentToast('El usuario fue guardado como favorito', 'Guardado como favorito', 'success');
    this.lista.closeSlidingItems();
  }
  borrar(user) {
    // console.log(user);
    this.presentToast('El usuario fue eliminado con éxito', 'Eliminado', 'danger');
    this.lista.closeSlidingItems();
  }

}
