import { CurrenciesUpdateAction } from './actions/currency'
import { Currency } from './models/currency'
import { AmountChangeAction } from './actions/amount'
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'

import * as fromRoot from './reducers'
import { Observable, of, toArray } from 'rxjs'
import { Post } from './models/post'
import { GetPostsUpdateAction12, GetPostsUpdatedAction } from './actions/post'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public amount$: Observable<number>
  // public currencyRates$: Observable<Currency[]>
  public posts$: Observable<Post[]>
  constructor(public store: Store<fromRoot.State>) {
    this.amount$ = store.select(fromRoot.getAmountState)
    // this.currencyRates$ = store.select(fromRoot.getCurrnecyRates)
    this.posts$ = store.select(fromRoot.getPostList)
    
  }

  // Dispatch the Action
  ngOnInit() {
    this.store.dispatch(new CurrenciesUpdateAction())
    this.store.dispatch(new GetPostsUpdateAction12())
    // this.posts$ = this.store.pipe(select(fromRoot.getPostList))
    console.log(this.posts$.pipe(toArray()))
  }

  onAmountChange(amount: any) {
    console.log(amount)
    const number = parseFloat(amount)
    if (!isNaN(number)) this.store.dispatch(new AmountChangeAction(number))
  }
}