import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public pieChartLabels = ['Abnormal', 'Unreviewed', 'Urgent'];
  public pieChartData = [150, 180, 90];
  public pieChartType = 'pie';

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['18-11-2018', '19-11-2018', '20-11-2018', '21-11-2018', '22-11-2018', '23-11-2018', '24-11-2018'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Unriviewed Result'},
    {data: [25, 29, 60, 21, 26, 75, 40], label: 'Unreviewed Result'},
    {data: [28, 65, 30, 29, 86, 27, 90], label: 'Abnormal Result'}
  ];

  ngOnInit() {
  }

}
