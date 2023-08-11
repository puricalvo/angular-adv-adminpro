import { Component } from '@angular/core';
import { ChartData } from 'chart.js';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

 public labels1: string[] = ['Pan','Refresco','Tacos',];
 public data1: ChartData<'doughnut'> = {
  datasets: [
    { data: [350, 450, 100],
    }
  ]
 }

}

