import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public alerta(){
    alert("BTS, indicado para prêmio da billboard");
  }

  public alerta2(){
   alert("Propaganda.");
  }

}
