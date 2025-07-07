import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GithubService } from '../../core/services/github.service';
import { Repository } from '../../core/models/repository';
import { PanelComponent } from "../panel/panel.component";
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-repositories',
  imports: [PanelComponent, NgFor, CommonModule],
  templateUrl: './repositories.component.html',
  styleUrl: './repositories.component.scss'
})
export class RepositoriesComponent {

  repos$: Observable<Repository[]> | undefined;

constructor(private githubService: GithubService) { }

ngOnInit(): void {
  this.repos$ = this.githubService.getRepos().pipe(
    map(repos => repos.filter(repo => !repo.fork))
  );
}

}
