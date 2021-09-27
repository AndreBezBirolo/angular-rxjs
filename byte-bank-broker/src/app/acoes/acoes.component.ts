import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AcoesService } from './acoes.service';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent implements OnInit {
  acoesInput = new FormControl();
  acoes$ = this.acoesService.getAcoes();

  constructor(private acoesService: AcoesService) {}

  ngOnInit(): void {
  }
}
