import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Comment } from '../../shared/model/comment';

@Injectable()
export class CommentServiceMock {
    constructor() { }

    getAllComments(): Observable<Comment[]> {
        let comments: Comment[] = [
            new Comment('testuser1', 'test1@test.com', 'this is my test comment1'),
            new Comment('testuser2', 'test2@test.com', 'this is my test comment2'),
            new Comment('testuser3', 'test3@test.com', 'this is my test comment3')
        ];
        return Observable.of(comments);
    }
}