import { Component, inject } from '@angular/core';
import { LoaderService } from '../../services/loader/loader-service';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.html',
  styleUrl: './loader.scss',
})
export class Loader {
  loaderService = inject(LoaderService);
}
