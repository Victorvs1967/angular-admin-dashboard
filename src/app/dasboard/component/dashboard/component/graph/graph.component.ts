import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
// import { ChartData, ChartOption, DonutChartView, PieChartView } from 'ngx-chart';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent {

  constructor() { }

  // donutChartData: ChartData[] = [
  //   { name: "Python", value: 25, color: "#61b15a" },
  //   { name: "C", value: 22, color: "#adce74" },
  //   { name: "Java", value: 20, color: "#fff76a" },
  //   { name: "C#", value: 15, color: "#ffce89" },
  //   { name: "JavaScript", value: 10, color: "#d8f8b7" },
  //   { name: "Swift", value: 8, color: "#d8f807" },
  // ];

  // donutView: DonutChartView = {
  //   height: 400,
  //   width: 400,
  //   radius: 140,
  //   donutSize: 40
  // };

  // donutChartOptions: ChartOption = {
  //   showLegend: true,
  //   legendTitle: 'Total',
  // };

  // pieChartData: ChartData[] = [
  //   { name: "Python", value: 25, color: "#61b15a" },
  //   { name: "C", value: 22, color: "#adce74" },
  //   { name: "Java", value: 20, color: "#fff76a" },
  //   { name: "C#", value: 15, color: "#ffce89" },
  //   { name: "JavaScript", value: 10, color: "#d8f8b7" },
  //   { name: "Swift", value: 8, color: "#d8f800" },
  // ];

  // pieView: PieChartView = {
  //   height: 400,
  //   width: 400,
  //   radius: 160
  // };

  // pieChartOptions: ChartOption = {
  //   showLegend: true,
  //   legendTitle: 'Total'

  // };

  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    { data: [350, 450, 100], label: 'Series A' },
    { data: [50, 150, 120], label: 'Series B' },
    { data: [250, 130, 70], label: 'Series C' }
  ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };


}
