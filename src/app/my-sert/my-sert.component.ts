import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-sert',
  templateUrl: './my-sert.component.html',
  styleUrls: ['./my-sert.component.css']
})
export class MySertComponent implements OnInit {

  constructor() { }

  sert =[
  {
    title: 'Серьтфикат1',
    img: "https://i.pinimg.com/originals/1b/df/0d/1bdf0d0a4272a9fa001b928b84042859.jpg",

  },
  ]

  ngOnInit() {
  }

}
