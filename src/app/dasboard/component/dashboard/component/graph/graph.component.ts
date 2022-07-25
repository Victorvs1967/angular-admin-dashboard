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
  // Doughnut
  public doughnutChartLabels: string[] = ['Programming Languages'];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [25], label: 'Python' },
    { data: [22], label: 'C' },
    { data: [20], label: 'Java' },
    { data: [15], label: 'C#' },
    { data: [10], label: 'JavaScript' },
    { data: [8], label: 'Swift' },
  ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };

  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [['Programming Languages'], ['Python', 'C', 'Java', 'C#', 'JavaScript', 'Swift']];
  public pieChartDatasets = [{
    data: [25, 22, 20, 15, 10, 8]
  }];
  public pieChartLegend = true;
  public pieChartPlugins = [];

}
