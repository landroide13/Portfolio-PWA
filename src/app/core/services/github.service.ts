import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { Repository } from '../models/repository';
import { Organization } from '../models/organization';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  readonly username = 'landroide13';
  private apiUrl = `https://api.github.com/users/${this.username}`;

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get<User>(this.apiUrl);
  }

  getRepos(): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.apiUrl + '/repos');
  }

  getOrganizations(): Observable<Organization[]> {
    return this.http.get<Organization[]>(this.apiUrl + '/orgs');
  }


}
