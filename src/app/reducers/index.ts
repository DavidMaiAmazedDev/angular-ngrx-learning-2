import * as fromAmount from './amount';
import * as fromCurrency from './currency';
import * as fromPosts from './post';
import { Currency } from './../models/currency';
import { Post } from '../models/post';
export const reducers: any = {
  amount: fromAmount.reducer,
  currencies: fromCurrency.reducer,
  posts: fromPosts.reducer
};

export interface State {
  amount: number;
  currencies: Currency[];
  posts: Post[];
}

export const getAmountState = (state: State) => state.amount;

export const getCurrnecyRates = (state: State) => state.currencies;

export const getPostList = (state: State) => state.posts
