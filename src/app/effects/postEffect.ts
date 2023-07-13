import { Injectable } from '@angular/core'

import * as post from '../actions/post'

import { Actions, createEffect, ofType } from '@ngrx/effects'
import { switchMap, map, mergeMap } from 'rxjs/operators'
import { GetPostsUpdatedAction } from '../actions/post'
import { PostService } from '../services/post.service'

@Injectable()
  export class PostEffects {
    constructor(
      private postService: PostService,
      private actions$: Actions
    ) {}

    posts$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(post.POSTSUPDATE12),
        switchMap(() => this.postService
          .getPosts()
          .pipe(map(data => 
            new GetPostsUpdatedAction(data)))
        )
      )
    }, { dispatch: true })
}



