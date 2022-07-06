import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ImageService } from 'src/app/service/image.service';
import { ProjectListComponent } from './project-list/project-list.component';

@Component({
  selector: 'app-list-image',
  templateUrl: './list-image.component.html',
  styleUrls: ['./list-image.component.scss']
})
export class ListImageComponent {

  images: any[] = [];

  constructor(private image: ImageService, private _bottomSheet: MatBottomSheet) {
    this.viewList();
  }

  viewList() {
    this.image.list().subscribe(data => {
      data.forEach(item => Object.entries(item).forEach(([id, name]) => {
        this.images = [...this.images, { id, name }];
        this.image.download(id, '100%').subscribe();
      }));
    });
  }

  delete(id: string): void {
    this.image.delete(id).subscribe(() => {
      const items = document.querySelectorAll('li');
      if (items !== null) items.forEach(item => item.innerHTML = '');
      this.viewList();
    });
  }

  toProject(image: {id: string, name: string}) {
    this._bottomSheet.open(ProjectListComponent, { data: { image } });
  }

}
