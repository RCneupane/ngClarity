import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  linkRef: HTMLLinkElement;

// Demo theme changer
  themes = [
    { name: 'Light', href: '../src/vendor/theme-light.min.css' },
    { name: 'Dark', href: '../src/vendor/theme-dark.min.css' }
  ];

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      let theme = this.themes[0];
      try {
        const stored = localStorage.getItem('theme');
        if (stored) {
          theme = JSON.parse(stored);
        }
      } catch (e) {
        // Nothing to do
      }
      this.linkRef = this.document.createElement('link');
      this.linkRef.rel = 'stylesheet';
      this.linkRef.href = theme.href;
      this.document.querySelector('head').appendChild(this.linkRef);
    }
  }

  setTheme(theme) {
    localStorage.setItem('theme', JSON.stringify(theme));
    this.linkRef.href = theme.href;
  }

}
