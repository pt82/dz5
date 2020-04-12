import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.css'],


})


export class MyWorkComponent implements OnInit {
  constructor() { }

work =
{
  title: 'Моя работа!',
  desc: ' описание моей работы',
  workcompany: 'Предприятие производит товары'

}

  ngOnInit() {
  }

}


