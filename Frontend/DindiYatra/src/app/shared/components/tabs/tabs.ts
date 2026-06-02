import { Component, effect, input, output, signal } from '@angular/core';

export interface TabItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-tabs',
  imports: [],
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss',
})
export class Tabs {
  tabs = input.required<TabItem[]>();

  tabChanged = output<string>();

  activeTab = signal<string>('');

  constructor() {
    effect(() => {
      const tabs = this.tabs();

      if (tabs.length && !this.activeTab()) {
        this.activeTab.set(tabs[0].id);
      }
    });
  }

  selectTab(tabId: string) {
    this.activeTab.set(tabId);
    this.tabChanged.emit(tabId);
  }
}
