import { Component, computed, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [FormsModule, NgStyle],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {

  placeholder = input('Search...');

  ph = input<string>();
  pv = input<string>();
  mh = input<string>();
  mv = input<string>();

  search = output<string>();

  searchText = '';

  containerStyles = computed(() => {
    const styles: Record<string, string> = {};

    if (this.ph()) {
      styles['padding-left'] = this.ph()!;
      styles['padding-right'] = this.ph()!;
    }

    if (this.pv()) {
      styles['padding-top'] = this.pv()!;
      styles['padding-bottom'] = this.pv()!;
    }

    if (this.mh()) {
      styles['margin-left'] = this.mh()!;
      styles['margin-right'] = this.mh()!;
    }

    if (this.mv()) {
      styles['margin-top'] = this.mv()!;
      styles['margin-bottom'] = this.mv()!;
    }

    return styles;
  });

  onInput(value: string): void {
    this.searchText = value;
  }

  onSearch(): void {
    this.search.emit(this.searchText.trim());
  }

  clearSearch(): void {
    this.searchText = '';

    // Optional: notify parent that search is cleared
    this.search.emit('');
  }
}