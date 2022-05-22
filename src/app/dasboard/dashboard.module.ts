import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { AddProductComponent } from './component/dashboard/component/add-product/add-product.component';
import { HeaderComponent } from './component/header/header.component';
import { ListProductComponent } from './component/dashboard/component/list-product/list-product.component';
import { GraphComponent } from './component/dashboard/component/graph/graph.component';
import { NgxChartModule } from 'ngx-chart';
import { DataTableComponent } from './component/dashboard/component/data-table/data-table.component';

const routes: Routes = [
  { path: '', component: DashboardComponent,
    children: [
      { path: '', component: GraphComponent },
      { path: 'addProduct', component: AddProductComponent },
      { path: 'listProduct', component: ListProductComponent },
    ]
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    AddProductComponent,
    GraphComponent,
    HeaderComponent,
    ListProductComponent,
    DataTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialUiModule,
    NgxChartModule,
  ]
})
export class DashboardModule { }
