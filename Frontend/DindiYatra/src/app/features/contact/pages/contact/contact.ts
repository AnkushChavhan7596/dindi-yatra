import { Component, signal } from '@angular/core';
import { Navbar } from "../../../../core/layout/navbar/navbar";
import { Sidebar } from "../../../../core/layout/sidebar/sidebar";
import { Footer } from "../../../../core/layout/footer/footer";

@Component({
  selector: 'app-contact',
  imports: [Sidebar],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  isLoggedIn = signal(true);
}
