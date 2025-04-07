import {
  Component,
  ElementRef,
  AfterViewInit,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent implements AfterViewInit {
  @ViewChildren('animatedElement') animatedElements!: QueryList<ElementRef>;

  skillsData = [
    {
      title: 'Diseño de Experiencia de Usuario (UX)',
      description:
        'No soy el típico diseñador detrás de un artboard de Illustrator ajustando píxeles, pero diseño. Me encontrarás inmerso en hojas de estilo, ajustando tamaños de fuente y creando layouts. Mi compromiso es crear experiencias de usuario fluidas manteniendo un estilo contemporáneo.',
    },
    {
      title: 'Ingeniería de Software',
      description:
        'La ingeniería de software es mi pasión. Me encanta escribir código limpio y escalable, y disfruto del proceso de desarrollo de software. Desde la planificación hasta la implementación, me involucro en cada etapa del ciclo de vida del software.',
    },
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      this.setupIntersectionObserver();
    }, 100);
  }

  setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {

          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 200);

          observer.unobserve(entry.target);
        }
      });
    }, options);


    this.animatedElements.forEach((element) => {
      observer.observe(element.nativeElement);
    });
  }
}
