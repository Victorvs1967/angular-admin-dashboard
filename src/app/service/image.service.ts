import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Image } from '../model/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<Image> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<Image>(environment.baseUrl.concat(environment.imageUrl).concat("/upload"), formData);
  }

  download(id: string, width: string): Observable<void> {
    return this.http.get(environment.baseUrl.concat(environment.imageUrl).concat('/download/').concat(id), { responseType: 'arraybuffer' })
      .pipe(map(data => {
        const contentType = 'image/jpeg';
        const b64Data = data;
        const byteArray = new Uint8Array(b64Data);
        const blob = new Blob([byteArray], { type: contentType });
        const blobUrl = URL.createObjectURL(blob);

        const el = document.getElementById(id);
        if (!el?.querySelector('img')) {
          const img = document.createElement('img');
          img.classList.add('detail-image');
          img.src = blobUrl;
          img.style.width = width;
          img.style.height = 'auto';
          img.style.borderRadius = '.5rem';
          el ? el.appendChild(img) : '';
        }
      })
    );
  }

  listImage(): Observable<Image[]> {
    return this.http.get<Image[]>(environment.baseUrl.concat(environment.imageUrl));
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(environment.baseUrl.concat(environment.imageUrl).concat('/').concat(id));
  }

}
