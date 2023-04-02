import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asked-questions',
  templateUrl: './asked-questions.component.html',
  styleUrls: ['./asked-questions.component.css']
})
export class AskedQuestions implements OnInit {

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
