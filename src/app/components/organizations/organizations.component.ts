import { Component } from '@angular/core';
import { GithubService } from '../../core/services/github.service';
import { Organization } from '../../core/models/organization';
import { Observable } from 'rxjs';
import { PanelComponent } from "../panel/panel.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-organizations',
  imports: [PanelComponent, CommonModule],
  templateUrl: './organizations.component.html',
  styleUrl: './organizations.component.scss'
})
export class OrganizationsComponent {

  orgs$: Observable<Organization[]> | undefined;
  
  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.orgs$ =
    this.githubService.getOrganizations();
  }

}
