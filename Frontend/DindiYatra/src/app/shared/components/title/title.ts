import { Component, computed, inject, input, output } from '@angular/core';
import { NgStyle } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title',
  imports: [NgStyle],
  templateUrl: './title.html',
  styleUrl: './title.scss',
})
export class Title {

  title = input<string>("");
  navTo = input<string>("");
  navToClick = output<void>();
  nestedNav = input<NestedNav[]>([]);

  router = inject(Router);

  handleNavToClick(){
    this.navToClick.emit();
  }

  handleNav(item: NestedNav){
    this.router.navigate([item?.navTo]);
  }

  // Container padding
  ph = input<string>();
  pv = input<string>();

  // Title font
  fs = input<string>();
  fw = input<string>();


  // Container styles
  containerStyles = computed(() => {

    const styles: any = {};

    if (this.ph()) {
      styles['padding-left'] = this.ph();
      styles['padding-right'] = this.ph();
    }

    if (this.pv()) {
      styles['padding-top'] = this.pv();
      styles['padding-bottom'] = this.pv();
    }

    return styles;
  });


  // Title styles
  titleStyles = computed(() => {

    const styles: any = {};

    if (this.fs()) {
      styles['font-size'] = this.fs();
    }

    if (this.fw()) {
      styles['font-weight'] = this.fw();
    }

    return styles;
  });
}