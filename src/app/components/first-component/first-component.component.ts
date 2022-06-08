import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Deywid';
  age: number = 31;
  job: string = 'programador';
  hobbies: string[] = ['tocar bateria', 'ler', 'cozinhar'];

  constructor() {}

  ngOnInit(): void {}
}
