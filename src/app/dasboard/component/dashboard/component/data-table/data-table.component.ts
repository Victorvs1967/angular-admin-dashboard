import { Component, OnInit } from '@angular/core';
import { TableDataSource } from 'src/app/model/table-data-source';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new TableDataSource();
  
}
