import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
// import { ChartData, ChartOption, DonutChartView, PieChartView } from 'ngx-chart';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent {

  constructor() { }
  // DoughnutC
  public doughnutChartLabels: string[] = ['Python', 'C', 'Java', 'C#', 'JavaScript', 'Swift'];
  public doughnutChartDataset = [ { data: [25, 22, 20, 15, 10, 8] }, ];
  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = { responsive: false };

  // Pie
  public pieChartLabels = ['Python', 'C', 'Java', 'C#', 'JavaScript', 'Swift'];
  public pieChartDataset = [ { data: [25, 22, 20, 15, 10, 8] } ];
  public pieChartOptions: ChartOptions<'pie'> = { responsive: false, };
  public pieChartLegend = true;
  public pieChartPlugins = [];

}
