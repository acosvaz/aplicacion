import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tab0',
  templateUrl: './tab0.page.html',
  styleUrls: ['./tab0.page.scss'],
})
export class Tab0Page implements OnInit {

  V: 1;
  a: 1;
  R: 1;
  A: number;
  pi = 3.1416;

  potenciaV: number;
  rotor: number;
  multiplicador: number;
  alternador: number;
  transformador: number;
  rendimiento: number;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  calcular(){
    this.A = Math.PI * Math.pow(this.R, 2);
    
    this.potenciaV = 0.5 * this.A * this.a * Math.pow(this.V, 2)/1000;
    this.rotor = this.potenciaV * 0.59;
    this.multiplicador = this.rotor * 0.85;
    this.alternador = this.multiplicador * 0.77;
    this.transformador = this.alternador * 0.76;
    this.rendimiento = this.transformador/this.potenciaV;

  }
}

