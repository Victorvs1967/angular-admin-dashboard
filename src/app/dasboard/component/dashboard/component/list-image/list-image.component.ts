import { Component } from '@angular/core';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-list-image',
  templateUrl: './list-image.component.html',
  styleUrls: ['./list-image.component.scss']
})
export class ListImageComponent {

  images: any[] = [];

  constructor(private image: ImageService) {
    this.list();
  }

  list() {
    this.image.listImage().subscribe(data => {
      data.forEach(item => Object.entries(item).forEach(([id, name]) => {
        this.images = [...this.images, { id, name }];
        this.image.download(id, '180px').subscribe();
      }));
    });
  }

  delete(id: string): void {
    this.image.delete(id).subscribe(() => {
      const items = document.querySelectorAll('li');
      if (items !== null) items.forEach(item => item.innerHTML = '');
      this.list();
    });
  }

}
