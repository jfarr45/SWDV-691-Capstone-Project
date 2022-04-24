import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MeasureServiceProvider } from '../../providers/measure-service/measure-service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit {
  dynamicForm: FormGroup;
  submitted = false;

  constructor(public navCtrl: NavController, public measureService: MeasureServiceProvider, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.dynamicForm = this.formBuilder.group({
      countertopStyle: [' ', Validators.required],
      countertopMeasure: new FormArray([])
    })
  }

  get f() {return this.dynamicForm.controls}
  get t() {return this.f.countertopMeasure as FormArray;}

  onChangeCountertopType(e) {
    const countertopStyle = e.target.value || 0;

    if (this.t.value == "Straight") {
        this.t.push(this.formBuilder.group({
          unit_number: [' '],
          back_length: [' ', Validators.required],
          back_depth: [' ', Validators.required],
      }))
    } 
    else if (countertopStyle == "L-Shape Left") {
        this.t.push(this.formBuilder.group({
          unit_number: [' '],
          back_length: [' ', Validators.required],
          back_depth: [' ', Validators.required],
          left_length: [' ', Validators.required],
          left_depth: [' ', Validators.required],
        }))
      }
    else if (countertopStyle == "L-Shape Right") {
        this.t.push(this.formBuilder.group({
          unit_number: [' '],
          back_length: [' ', Validators.required],
          back_depth: [' ', Validators.required],
          right_length: [' ', Validators.required],
          right_depth: [' ', Validators.required],
        }))
    }
    else if (countertopStyle == "U-Shape") {
        this.t.push(this.formBuilder.group({
          unit_number: [' '],
          back_length: [' ', Validators.required],
          back_depth: [' ', Validators.required],
          left_length: [' ', Validators.required],
          left_depth: [' ', Validators.required],
          right_length: [' ', Validators.required],
          right_depth: [' ', Validators.required],
      }))
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.dynamicForm.invalid) {
      return;
    }
    alert('Measure Submitted!')
  }

  onReset() {
    this.submitted = false;
    this.dynamicForm.reset();
    this.t.reset();
  }

  onClear() {
    this.submitted = false;
    this.t.reset();
  }

  onNewCountertop() {
    this.submitted = true;
    this.t.reset();
    alert("Countertop measured.")
  }
}
