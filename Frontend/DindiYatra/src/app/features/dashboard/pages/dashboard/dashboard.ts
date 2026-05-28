import { Component, signal } from '@angular/core';
import { Navbar } from '../../../../core/layout/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { UpcomingTours } from '../../components/upcoming-tours/upcoming-tours';
import { PopularInstitutions } from '../../components/popular-institutions/popular-institutions';
import { Footer } from "../../../../core/layout/footer/footer";
import { Sidebar } from "../../../../core/layout/sidebar/sidebar";

@Component({
  selector: 'app-dashboard',
  imports: [Navbar, Hero, UpcomingTours, PopularInstitutions, Footer, Sidebar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  isLoggedIn = signal(true);
}
