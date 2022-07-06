import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  id: string = '62c322badd0c86251ff9095a';
  
  constructor(private image: ImageService) {
    if (this.id) this.image.download(this.id, '118%').subscribe();
  }

  ngOnInit(): void { }
  
}
