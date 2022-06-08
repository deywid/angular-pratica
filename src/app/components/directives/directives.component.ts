import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  size: number = 32;
  font = 'sans-serif';
  color = 'blue';

  classes = ['--green-paragraph', '--red-paragraph']

  constructor() {}

  ngOnInit(): void {}
}
