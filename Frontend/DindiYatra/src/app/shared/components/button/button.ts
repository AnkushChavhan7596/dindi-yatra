import { Component, input, computed, output } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [NgClass, NgStyle],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {

  title = input<string>('');
  isPrimary = input<boolean>(true);
  click = output<void>();

  onClick(){
    this.click.emit();
  }

  // Margin
  ml = input<string>();
  mr = input<string>();
  mt = input<string>();
  mb = input<string>();

  mh = input<string>();
  mv = input<string>();

  // Padding
  pl = input<string>();
  pr = input<string>();
  pt = input<string>();
  pb = input<string>();

  ph = input<string>();
  pv = input<string>();

  // Font
  fs = input<string>(); // font-size
  fw = input<string>(); // font-weight

  // Button width
  bw = input<string>();

  // Box Shadow
  bs = input<string>();

  dynamicStyles = computed(() => {

    const styles: any = {};

    // Margin
    if (this.mh()) {
      styles['margin-left'] = this.mh();
      styles['margin-right'] = this.mh();
    }

    if (this.mv()) {
      styles['margin-top'] = this.mv();
      styles['margin-bottom'] = this.mv();
    }

    if (this.ml()) styles['margin-left'] = this.ml();
    if (this.mr()) styles['margin-right'] = this.mr();
    if (this.mt()) styles['margin-top'] = this.mt();
    if (this.mb()) styles['margin-bottom'] = this.mb();

    // Padding
    if (this.ph()) {
      styles['padding-left'] = this.ph();
      styles['padding-right'] = this.ph();
    }

    if (this.pv()) {
      styles['padding-top'] = this.pv();
      styles['padding-bottom'] = this.pv();
    }

    if (this.pl()) styles['padding-left'] = this.pl();
    if (this.pr()) styles['padding-right'] = this.pr();
    if (this.pt()) styles['padding-top'] = this.pt();
    if (this.pb()) styles['padding-bottom'] = this.pb();

    // Font
    if (this.fs()) styles['font-size'] = this.fs();
    if (this.fw()) styles['font-weight'] = this.fw();

    // Button width
    if(this.bw()) styles['width'] = this.bw();

    // Box shadow
    if(this.bs()) styles['box-shadow'] = this.bs();

    return styles;
  });
}