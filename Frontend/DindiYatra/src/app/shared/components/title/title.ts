import { Component, computed, input, output } from '@angular/core';
import { NgStyle } from '@angular/common';

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

  handleNavToClick(){
    this.navToClick.emit();
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