import { Component, input } from '@angular/core';
import { Button } from "../../../../shared/components/button/button";

@Component({
  selector: 'app-tour',
  imports: [Button],
  templateUrl: './tour.html',
  styleUrl: './tour.scss',
})
export class Tour {
  isCompleted = input(false);
}
