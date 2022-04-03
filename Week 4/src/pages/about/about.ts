import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MeasureServiceProvider } from '../../providers/measure-service/measure-service';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public measureService: MeasureServiceProvider) {
  }

  loadCountertopTypes() {
    return this.measureService.getCountertopTypes();
  }

}
