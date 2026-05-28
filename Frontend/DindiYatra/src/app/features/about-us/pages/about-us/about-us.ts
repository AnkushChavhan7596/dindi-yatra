import { Component } from '@angular/core';
import { Navbar } from "../../../../core/layout/navbar/navbar";
import { Sidebar } from "../../../../core/layout/sidebar/sidebar";

@Component({
  selector: 'app-about-us',
  imports: [Navbar, Sidebar],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs {

}
