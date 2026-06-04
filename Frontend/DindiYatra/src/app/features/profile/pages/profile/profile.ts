import { Component } from '@angular/core';
import { Sidebar } from "../../../../core/layout/sidebar/sidebar";
import { Profile_BREADCRUMB_BASE } from '../../constants/navigation';
import { Title } from "../../../../shared/components/title/title";
import { Button } from "../../../../shared/components/button/button";

@Component({
  selector: 'app-profile',
  imports: [Sidebar, Title, Button],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  nestedNav = [
    ...Profile_BREADCRUMB_BASE,
    {
      link: 'Profile',
      navTo: '/profile/123'
    }
  ];
}
