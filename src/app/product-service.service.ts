import {Http, Response} from '@angular/http'
import { Injectable } from '@angular/core';
import { from } from 'rxjs/observable/from';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable(
 
)
export class ProductService {
  private _albumUrl = '../assets/album.json' 

  constructor(private _http : Http) { }

  getAlbum(id : number){
     return this._http.get(this._albumUrl).pipe(map(responce=>responce.json));
  }


}

