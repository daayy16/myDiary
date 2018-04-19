import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
duasPaginas: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  public mostrarPaginas(){
    this.duasPaginas = false;
  }
  public sumir(){
    this.duasPaginas = true;
  }

  public alerta(){
    alert("Oi");
  }

}
