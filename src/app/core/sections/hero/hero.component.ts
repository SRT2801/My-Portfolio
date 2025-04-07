import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit, AfterViewInit {
  @ViewChild('particlesContainer') particlesContainer!: ElementRef;

  currentRole = 0;
  roles = [
    'Desarrollador frontend',
    'diseñador UX/UI',
    'creador de experiencias',
  ];
  currentDisplayText = '';
  isDeleting = false;
  projectsCount = 0;
  experienceYears = 1;

  techIcons = [
    {
      name: 'Angular',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
      left: '60%',
      top: '20%',
    },

    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      left: '90%',
      top: '25%',
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      left: '80%',
      top: '40%',
    },

    {
      name: 'Ionic',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',
      left: '70%',
      top: '15%',
    },
    {
      name: 'Tailwind',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      left: '65%',
      top: '30%',
    },
    {
      name: 'HTML',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      left: '60%',
      top: '70%',
    },
    {
      name: 'CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      left: '85%',
      top: '65%',
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      left: '70%',
      top: '60%',
    },
  ];

  codeSnippet = `function createExperience() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'Angular'];
  const passion = 'Creating amazing UIs';

  return skills.reduce((result, skill) => {
    return result + skill + ' + ';
  }, '') + passion;
}`;

  constructor() {}

  ngOnInit() {
    this.typeWriterEffect();
    this.animateCounters();
  }

  ngAfterViewInit() {
    this.initializeParticles();
  }

  typeWriterEffect() {
    const currentRole = this.roles[this.currentRole];
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseTime = 1000;

    if (!this.isDeleting && this.currentDisplayText === currentRole) {
      // Pausa al final
      setTimeout(() => {
        this.isDeleting = true;
        this.typeWriterEffect();
      }, pauseTime);
    } else if (this.isDeleting && this.currentDisplayText === '') {
      // Cambiar al siguiente rol
      this.isDeleting = false;
      this.currentRole = (this.currentRole + 1) % this.roles.length;
      setTimeout(() => {
        this.typeWriterEffect();
      }, 500);
    } else {
      // Escribir o borrar
      if (this.isDeleting) {
        this.currentDisplayText = currentRole.substring(
          0,
          this.currentDisplayText.length - 1
        );
      } else {
        this.currentDisplayText = currentRole.substring(
          0,
          this.currentDisplayText.length + 1
        );
      }

      setTimeout(
        () => {
          this.typeWriterEffect();
        },
        this.isDeleting ? deleteSpeed : typeSpeed
      );
    }
  }

  animateCounters() {
    const targetProjects = 25;
    const targetExperience = 5;
    const duration = 2000; // 2 segundos
    const step = 20; // Actualizar cada 20ms

    const projectsIncrement = targetProjects / (duration / step);
    const experienceIncrement = targetExperience / (duration / step);

    const interval = setInterval(() => {
      this.projectsCount = Math.min(
        Math.ceil(this.projectsCount + projectsIncrement),
        targetProjects
      );
      this.experienceYears = Math.min(
        Math.round((this.experienceYears + experienceIncrement) * 10) / 10,
        targetExperience
      );

      if (
        this.projectsCount >= targetProjects &&
        this.experienceYears >= targetExperience
      ) {
        clearInterval(interval);
      }
    }, step);
  }

  initializeParticles() {
    // Esta función implementaría un sistema de partículas usando canvas o una biblioteca como particles.js
    // Implementación básica sin usar biblioteca externa (se puede reemplazar por una implementación más compleja)
    const container = this.particlesContainer.nativeElement;
    const canvas = document.createElement('canvas');
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    container.appendChild(canvas);

    // Aquí iría la implementación de partículas
    // En una implementación completa, se usaría un sistema como particles.js o se crearía uno propio
  }

  scrollToProjects() {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  }

  downloadCV() {
    // Implementar la descarga del CV
    // Esto podría ser un enlace a un archivo estático en assets
    const link = document.createElement('a');
    link.href = 'assets/docs/cv.pdf'; // Ruta al archivo CV
    link.download = 'SahirCV.pdf';
    link.click();
  }

  scrollToNextSection() {
    const skillsSection = document.querySelector('.skills-section');
    skillsSection?.scrollIntoView({ behavior: 'smooth' });
  }

  handleImageError(event: any) {
    // Marcar la imagen como con error para activar el fallback
    event.target.classList.add('error');

    // Registrar el error para depuración
    console.log('Error cargando imagen:', event.target.src);
  }
}
