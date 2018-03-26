import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Comment } from '../../shared/model/comment';
import { environment } from '../../../environments/environment';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class CommentService {

  // Resolve HTTP using the constructor
  constructor(private http: Http) { }

  public getAllComments(): Observable<Comment[]> {
    const path = environment.apiEndpoint + '/Comments';
    return this.http.get(path)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}