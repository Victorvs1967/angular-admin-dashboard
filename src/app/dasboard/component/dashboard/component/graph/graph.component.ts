import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOption, DonutChartView, PieChartView } from 'ngx-chart';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  donutChartData: ChartData[] = [
    { name: "India", value: 132, color: "#61b15a" },
    { name: "Nepal", value: 772, color: "#adce74" },
    { name: "USA", value: 142, color: "#fff76a" },
    { name: "UK", value: 112, color: "#ffce89" },
    { name: "Brazil", value: 162, color: "#d8f8b7" }
  ];

  donutView: DonutChartView = {
    height: 400,
    width: 400,
    radius: 160,
    donutSize: 40
  };

  donutChartOptions: ChartOption = {
    showLegend: true,
    legendTitle: 'Total',
  };

  pieChartData: ChartData[] = [
    { name: "India", value: 132, color: "#61b15a" },
    { name: "Nepal", value: 772, color: "#adce74" },
    { name: "USA", value: 142, color: "#fff76a" },
    { name: "UK", value: 112, color: "#ffce89" },
    { name: "Brazil", value: 162, color: "#d8f8b7" }
  ];

  pieView: PieChartView = {
    height: 400,
    width: 400,
    radius: 160
  };

  pieChartOptions: ChartOption = {
    showLegend: true,
    legendTitle: 'Total'
  };

}
