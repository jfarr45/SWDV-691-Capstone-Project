import { Injectable } from '@angular/core';

/*
  Generated class for the MeasuredCountertopsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MeasuredCountertopsServiceProvider {

  countertops=[
    {id: 1, unit_number: 104},
    {id: 2, unit_number:108}
  ]

  constructor() {
    console.log('Hello MeasuredCountertops Provider');
  }

  getCountertops() {
    return this.countertops;
  }

  removeCountertop(index) {
    this.countertops.splice(index, 1);
  }

}
