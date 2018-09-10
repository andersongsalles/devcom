import { Component, OnInit } from '@angular/core';
import { Cargo } from '../../../classes/cadastros/cargo';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {

  cargos: Cargo[];
  cols: any[];

  constructor() { }

  ngOnInit() {

    this.cargos = [];

    this.cols = [
      { field: 'id', header: 'Código' },
      {field: 'nome', header: 'Nome' },
      { field: 'descricao', header: 'Descrição' },
      { field: 'salario', header: 'Salário' },
      { field: 'cbo1994', header: 'CBO 1994' },
      { field: 'cbo2002', header: 'CBO 2002' }
    ];
  }

}
