import { Injectable, NgModule } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable()
@NgModule()
export class JwtService {

  constructor() { }

  decodeToken(token: string): string {
    return JSON.parse(JSON.stringify(jwt_decode(token)));
  }
}
