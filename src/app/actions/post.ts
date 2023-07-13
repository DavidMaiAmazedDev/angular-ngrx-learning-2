import { Action } from '@ngrx/store'
import { Post } from '../models/post'

export const POSTSUPDATED = '[Post] loadAll'
export const POSTSUPDATE12 = '[Post] loadAll 12'

export class GetPostsUpdatedAction implements Action {
  type = POSTSUPDATED
  constructor(public payload: Post[]) {

  }
}

export class GetPostsUpdateAction12 implements Action {
  type = POSTSUPDATE12
  
}

