import { CommonModule } from '@angular/common';

import { Component, OnInit } from '@angular/core';
import { GithubService } from './core/services/github.service';
import { PersonalInfoComponent } from "./components/personal-info/personal-info.component";
import { RepositoriesComponent } from "./components/repositories/repositories.component";
import { OrganizationsComponent } from "./components/organizations/organizations.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, PersonalInfoComponent, RepositoriesComponent, OrganizationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent implements OnInit {
  
  title = 'Portfolio';
  username = '';

  constructor(private githubService: GithubService){}

  ngOnInit(): void {
    this.username = this.githubService.username;
  }



}
