import { HttpClient } from '@angular/common/http'
import { Currency } from './../models/currency'

import { Injectable } from '@angular/core'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { Post } from '../models/post'

@Injectable({providedIn: 'root'})
export class CurrencyService {
  getPosts() {
    throw new Error('Method not implemented!.')
  }
  constructor(private http: HttpClient) {}

  getRates(): Observable<Currency[]> {
    // https://jsonplaceholder.typicode.com/posts
    // https://api.exchangeratesapi.io/latest?base=USD
    return this.http
      .get<any>('https://api.exchangeratesapi.io/latest?base=USD')
      .pipe(
        map(result => {
          console.log(result)
          return Object.keys(result.rates).map((key, index) => {
            return { code: key, value: result.rates[key] }
          })
        })
      )
  }
}