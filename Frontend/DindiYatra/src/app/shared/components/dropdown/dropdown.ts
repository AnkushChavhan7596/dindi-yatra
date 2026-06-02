import { Component, effect, input, output, signal } from '@angular/core';
import { DropdownItem } from '../../models/DropdownItem';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  imports: [FormsModule, NgStyle],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.scss',
})
export class Dropdown {
  // placeholder = input<string>('Select option');
  options = input<DropdownItem[]>([]);

  selected = signal<string | number | null>(null);

  valueChange = output<string | number>();

  containerStyles = input<Record<string, string>>({});

  constructor() {
    effect(() => {
      const options = this.options();

      if (options?.length && this.selected() === null) {
        this.selected.set(options[0].value);
      }
    });
  }

  onChange(value: any) {
    console.log(value)
    this.selected.set(value);
    this.valueChange.emit(value);
  }
}
