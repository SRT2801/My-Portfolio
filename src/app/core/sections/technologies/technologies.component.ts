import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
} from '@angular/animations';

interface Project {
  name: string;
  description: string;
  image?: string;
  icon?: string;
  repoUrl: string;
  demoUrl?: string;
  category: 'frontend' | 'backend' | 'mobile';
  techStack: string[];
}

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css',
  animations: [
    trigger('techCardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(15px)' }),
        animate(
          '0.3s ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class TechnologiesComponent implements OnInit {
  projects: Project[] = [
    {
      name: 'Maintenance Management',
      description:
        'Aplicación web para gestión de mantenimiento de equipos universitarios',
      image: 'assets/images/projects/portfolio.jpg',
      repoUrl: 'https://github.com/SRT2801/maintenance_management_frontend.git',
      demoUrl: 'https://myportfolio.com',
      category: 'frontend',
      techStack: ['Angular', 'TypeScript', 'CSS'],
    },
    {
      name: 'Password Manager',
      description: 'Aplicación web para gestionar contraseñas de forma segura',
      image: 'assets/images/projects/dashboard.jpg',
      repoUrl: 'https://github.com/SRT2801/password-manager-frontend.git',
      demoUrl: 'https://dashboard-demo.com',
      category: 'frontend',
      techStack: ['React', 'JavaScript', 'Tailwind CSS'],
    },
    {
      name: 'Modulo de Reservas',
      description:
        'Aplicación web para gestionar reservas (trabaje en el frontend)',
      image: 'assets/images/projects/landing.jpg',
      repoUrl: 'https://github.com/gooway-co/GoowayBooking-Frontend.git',
      demoUrl: 'https://landing-demo.com',
      category: 'frontend',
      techStack: ['HTML', 'CSS', 'JavaScript'],
    },

    {
      name: 'Microservicio de Usuarios',
      description:
        'Servicio para gestionar usuarios y autenticación',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      repoUrl: 'https://github.com/username/blog-api',
      category: 'backend',
      techStack: ['Node.js', 'Express', 'MYSQL'],
    },
    {
      name: 'Password Manager API',
      description: 'API para gestionar contraseñas de forma segura',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      repoUrl: 'https://github.com/SRT2801/password-manager.git',
      category: 'backend',
      techStack: ['Node.js', 'Express', 'MySQL', 'NestJS'],
    },

    {
      name: 'Shopp App',
      description:
        'Aplicación móvil que usa FakeStore API para mostrar productos',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',
      repoUrl: 'https://github.com/SRT2801/Shop_app_ionic.git',
      category: 'mobile',
      techStack: ['Ionic', 'Angular', 'Firebase'],
    },
    {
      name: 'Todo App',
      description:
        'Aplicación móvil para gestionar tareas pendientes',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',
      repoUrl: 'https://github.com/SRT2801/Shop_app_ionic.git',
      category: 'mobile',
      techStack: ['Ionic', 'Angular', 'TypeScript'],
    },
    {
      name: 'Music Player',
      description:
        'Aplicación móvil para reproducir música desde una API externa (Youtube)',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',
      repoUrl: 'https://github.com/SRT2801/MusicPlayer.git',
      category: 'mobile',
      techStack: ['Ionic', 'JavaScript', 'TypeScript'],
    },
  ];

  frontendProjects: Project[] = [];
  backendProjects: Project[] = [];
  mobileProjects: Project[] = [];

  activeCategory: string = 'frontend';

  ngOnInit(): void {
    this.categorizeProjects();
    this.loadFontAwesome();
  }

  categorizeProjects(): void {
    this.frontendProjects = this.projects.filter(
      (project) => project.category === 'frontend'
    );
    this.backendProjects = this.projects.filter(
      (project) => project.category === 'backend'
    );
    this.mobileProjects = this.projects.filter(
      (project) => project.category === 'mobile'
    );
  }

  setActiveCategory(category: string): void {
    if (this.activeCategory !== category) {
      this.activeCategory = category;
    }
  }

  getActiveProjects(): Project[] {
    switch (this.activeCategory) {
      case 'frontend':
        return this.frontendProjects;
      case 'backend':
        return this.backendProjects;
      case 'mobile':
        return this.mobileProjects;
      default:
        return this.frontendProjects;
    }
  }

  handleImageError(event: any): void {
    event.target.classList.add('error');
    console.log('Error cargando imagen:', event.target.src);
  }

  loadFontAwesome(): void {
    if (!document.getElementById('font-awesome-css')) {
      const link = document.createElement('link');
      link.id = 'font-awesome-css';
      link.rel = 'stylesheet';
      link.href =
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
      document.head.appendChild(link);
    }
  }
}
