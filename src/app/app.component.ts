import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CorrelationMatrix';

  value!:number;
  backgroundColor: string = 'white';

  matrix: any[][] = [
    [' ', 'gear', 'am', 'drat', 'mpg', 'vs','qsec', 'wt', 'disp', 'cyl', 'hp', 'carb'],
    ['gear',1, 0.79, 0.7, 0.48, 0.21, -0.21, -0.58, -0.56, -0.49, -0.13, 0.27],
    ['am', 0.79, 1, 0.71, 0.6, 0.17, -0.23, -0.69, -0.59, -0.52, -0.24, 0.06],
    ['drat', 0.7, 0.71, 1, 0.68, 0.44, 0.09, -0.71, -0.71, -0.7, -0.45, -0.09],
    ['mpg', 0.48, 0.6, 0.68, 1, 0.66, 0.42, -0.87, -0.85, -0.85, -0.78, -0.55],
    ['vs', 0.21, 0.17, 0.44, 0.66, 1, 0.74, -0.55, -0.71, -0.81, -0.72, -0.57],
    ['qsec', -0.21, -0.23, 0.09, 0.42, 0.74, 1, -0.71, -0.43, -0.59, -0.71, 0.66],
    ['wt', -0.58, -0.69, -0.71, -0.87, -0.55, -0.71, 1, 0.89, 0.78, 0.66, 0.43],
    ['disp', -0.56, -0.59, -0.71, -0.85, -0.71, -0.43, 0.89, 1, 0.9, 0.79, 0.39],
    ['cyl', -0.49, -0.52, -0.7, -0.85, -0.81, -0.59, 0.78, 0.9, 1, 0.83, 0.53],
    ['hp',  -0.13, -0.24, -0.45, -0.78, -0.72, -0.71, 0.66, 0.79, 0.83, 1, 0.75],
    ['carb', 0.27, 0.06, -0.09, -0.55, -0.57, -0.66, 0.43, 0.39, 0.53, 0.75, 1]
  ];

  // updateColor(){
  //   this.backgroundColor = this.getCellStyles(this.value);
  // }

  getCellStyles(cell: number) {

    const hue = cell >= 0 ? 240 : 0; 
    const lightness = 100 - 50 * Math.abs(cell); 
    return {
      'background-color': `hsl(${hue}, 100%, ${lightness}%)`
    };
  }
}
