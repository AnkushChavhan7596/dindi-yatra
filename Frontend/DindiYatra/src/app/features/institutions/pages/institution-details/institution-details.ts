import { Component, inject, OnInit, signal } from '@angular/core';
import { Sidebar } from "../../../../core/layout/sidebar/sidebar";
import { Title } from "../../../../shared/components/title/title";
import { LoaderService } from '../../../../shared/services/loader/loader-service';
import { INSTITUTION_BREADCRUMB_BASE } from '../../contants/navigation';
import { Button } from "../../../../shared/components/button/button";
import { InstitutionInfo } from "../../components/institution-info/institution-info";
import { UpcomingTours } from "../../../dashboard/components/upcoming-tours/upcoming-tours";
import { InstUpcomingTours } from '../../components/inst-upcoming-tours/inst-upcoming-tours';

@Component({
  selector: 'app-institution-details',
  imports: [Sidebar, Title, Button, InstitutionInfo, InstUpcomingTours],
  templateUrl: './institution-details.html',
  styleUrl: './institution-details.scss',
})
export class InstitutionDetails implements OnInit{
  loaderService = inject(LoaderService);
  
  pageTitle = signal<string>("Shiv Shakti Mandal")

  nestedNav = [
     ...INSTITUTION_BREADCRUMB_BASE,
      {
        link: this.pageTitle(),
        navTo: `/institutions/${12345}`
      }
  ];

  ngOnInit(): void {
      this.loaderService.show();

      setTimeout(() => {
        this.loaderService.hide();
      }, 1000);
  }
}
