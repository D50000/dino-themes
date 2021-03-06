import { Component } from '@angular/core';

interface DinoThemes {
  [name: string]: DinoTheme;
}

interface DinoTheme {
  'color-main': string;
  'color-main-darken': string;
  'color-main-darken2': string;
  'color-main-lighten': string;
  'color-accent': string;
}

@Component({
  selector: 'dt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly themeProps = [
    'color-main',
    'color-main-darken',
    'color-main-darken2',
    'color-main-lighten',
    'color-accent',
  ];

  readonly themes: DinoThemes = {
    'classic': {
      'color-main': '#3D9D46',
      'color-main-darken': '#338942',
      'color-main-darken2': '#286736',
      'color-main-lighten': '#7BBC4D',
      'color-accent': '#DC3C2A',
    },
    'marine': {
      'color-main': '#208FBC',
      'color-main-darken': '#377681',
      'color-main-darken2': '#27555F',
      'color-main-lighten': '#64BFB6',
      'color-accent': '#DC3C2A',
    },
    'pink': {
      'color-main': '#E05389',
      'color-main-darken': '#CA3E86',
      'color-main-darken2': '#C13480',
      'color-main-lighten': '#E77A96',
      'color-accent': '#208FBC',
    },
    'wooden': {
      'color-main': 'brown',
      'color-main-darken': '#7c2020',
      'color-main-darken2': '#541515',
      'color-main-lighten': '#d65f5f',
      'color-accent': 'orange',
    }
  };

  dinos = ['trex', 'brachio', 'stego', 'trice', 'ptero'];

  customTheme = this.themes.classic;

  selectedThemes = {
    trex: this.themes.wooden,
    brachio: this.themes.marine,
    stego: this.themes.classic,
    trice: this.themes.pink,
    ptero: {},
  };

  setTheme(dino: string, themeIndex: string) {
    this.selectedThemes[dino] = this.themes[themeIndex];
  }

  getCustomTheme() {
    return {...this.customTheme};
  }
}
