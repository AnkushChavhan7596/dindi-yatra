import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private _loading = signal(false);

  // read-only exposure
  loading = this._loading.asReadonly();

  show(){
    this._loading.set(true);
  }
  hide(){
    this._loading.set(false);
  }
}
