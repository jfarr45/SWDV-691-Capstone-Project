import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MeasuredCountertopsServiceProvider } from '../../providers/measured-countertops-service/measured-countertops-service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  title="Countertops Measured";

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: MeasuredCountertopsServiceProvider,) {

  }

  loadCountertops() {
    return this.dataService.getCountertops();
  }

  removeCountertops(countertop, index) {
    console.log("Removing Countertop - ", countertop, index);
    const toast = this.toastCtrl.create({
      message: 'Removing Countertop - ' + index + " ...",
      duration: 3000
    });
    toast.present();

    this.dataService.removeCountertop(index);
  }
}
