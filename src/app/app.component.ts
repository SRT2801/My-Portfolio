import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from './core/components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './core/sections/hero/hero.component';
import { SkillsComponent } from './core/sections/skills/skills.component';
import { TechnologiesComponent } from './core/sections/technologies/technologies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FooterComponent,
    HeroComponent,
    SkillsComponent,
    TechnologiesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-portfolio';
}
