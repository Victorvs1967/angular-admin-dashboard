import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
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

  // labels = [
  //   'From flight',
  //   'From Ground crew',
  // ];

  // data = {
  //   labels: this.labels,
  //   datasets: [{
  //     data: [12, 19],
  //     backgroundColor: ['#ef233c', '#d90429'],
  //     borderColor: ['#212529', '#212529'],
  //     borderWidth: 0,
  //   }],
  // };

  // options = {
  //   plugins: {
  //     title: {
  //       display: true,
  //       align: 'center',
  //       color: '#212529',
  //       text: 'Breakdown of carbon from aeroplane',
  //       font: {
  //         size: 36,
  //         weight: 'bold',
  //       },
  //     },
  //     legend: {
  //       display: true,
  //       position: 'bottom',
  //       labels: {
  //         font: {
  //           size: 22,
  //           fontColor: '#edf2f4',
  //         },
  //         boxWidth: 20,
  //       },
  //     },
  //   },
  // };

  // config = {
  //   type: 'doughnut',
  //   data: this.data,
  //   options: this.options,
  // };

  // myChart = new Chart(
  //   document.getElementById('Chart1'),
  //   this.config
  // );

}
