import { CargoService } from './../../../services/cadastros/cargo.service';
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
  cargoSelecionado: Cargo;
  botoesDesabilitados: boolean = true;

  constructor(private cargoService: CargoService) { }

  ngOnInit() {

    this.cargos = this.cargoService.getCargos();

    this.cols = [
      { field: 'id', header: 'Código' },
      {field: 'nome', header: 'Nome' },
      { field: 'descricao', header: 'Descrição' },
      { field: 'salario', header: 'Salário' },
      { field: 'cbo1994', header: 'CBO 1994' },
      { field: 'cbo2002', header: 'CBO 2002' }
    ];
  }

  onRowSelect(event) {
    this.botoesDesabilitados = false;
  }

  onRowUnselect(event) {
    this.botoesDesabilitados = true;
  }


}
