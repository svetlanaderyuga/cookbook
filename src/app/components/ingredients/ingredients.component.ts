import { Component, OnInit } from '@angular/core';
import { INGREDIENT } from 'src/app/modules/mock-ingredients';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  ingredients = INGREDIENT;
  isButtonClicked: boolean;
 
  constructor() { }
 
  ngOnInit() {
    this.isButtonClicked = false;
  }
  onClick(){
    this.isButtonClicked = !this.isButtonClicked;
  }

}