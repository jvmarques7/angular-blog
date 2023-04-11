import { Component, OnInit, Input } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  dataFake: any

  photoCover:string=""
  contentTitle:string=""
  contentDescription:string=""

  constructor(){}

  ngOnInit(): void {
    this.dataFake = dataFake
  }

}
