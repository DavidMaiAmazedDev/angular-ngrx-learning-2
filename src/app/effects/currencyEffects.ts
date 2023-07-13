import { CurrenciesUpdatedAction } from './../actions/currency'
import { CurrencyService } from './../services/currency.service'
import { Injectable } from '@angular/core'

import * as currency from '../actions/currency'

import { Actions, createEffect, ofType } from '@ngrx/effects'
import { switchMap, map } from 'rxjs/operators'
import { PostService } from '../services/post.service'
import { GetPostsUpdatedAction } from '../actions/post'

@Injectable()
  export class CurrencyEffects {
    constructor(
      private currencyService: CurrencyService,
      private postService: PostService,
      private actions$: Actions
    ) {}
    update$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(currency.CURRENCIESUPDATE),
        switchMap(() => this.currencyService
          .getRates()
          .pipe(map(data => new CurrenciesUpdatedAction(data)))
        )
      )
    })

    // posts$ = createEffect(() => {
    //   return this.actions$.pipe(
    //     ofType(currency.POSTSUPDATED),
    //     switchMap(() => this.postService
    //       .getPosts()
    //       .pipe(map(data => 
    //         new GetPostsUpdatedAction(data)))
    //     )
    //   )
    // })
}



