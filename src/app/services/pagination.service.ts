import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
@Injectable()
export class PaginatorService {
  constructor(private db: AngularFireDatabase) {}
  getComments(postId, offset, startKey?): FirebaseListObservable<any> {
    return this.db.list(`Blog/${postId}`, {
              query: {
                orderByKey: true,
                startAt: startKey,
                limitToFirst: offset+1
              }
            });
    }
  }