import { Component } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.css',
})
export class MyProjectsComponent {
  projects: any[] = [
    {
      id: 1,
      name: 'Snake Game',
      img: '../../assets/snake.png',
      url: 'https://enchanting-melomakarona-d8f2c0.netlify.app/',
      role: 'front-end developer',
      tech: 'React JS',
    },
    {
      id: 2,
      name: 'Chart JS',
      img: '../../assets/chart.png',
      url: 'https://master--visionary-stardust-574f8f.netlify.app/',
      role: 'front-end developer',
      tech: 'React JS',
    },
    {
      id: 3,
      name: 'Club Carnival',
      img: '../../assets/club.png',
      url: 'https://fervent-golick-eff49a.netlify.app/',
      role: 'front-end developer',
      tech: 'React JS',
    },
  ];
}
