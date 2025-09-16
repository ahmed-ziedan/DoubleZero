import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.initializeNavigation();
  }

  private initializeNavigation(): void {
    // Mobile Navigation
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
      });

      // Close mobile menu when clicking on a link
      document.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
        });
      });

      // Close mobile menu when clicking outside
      document.addEventListener('click', (e) => {
        if (
          !hamburger.contains(e.target as Node) &&
          !navMenu.contains(e.target as Node)
        ) {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
        }
      });
    }

    // Navbar background change on scroll
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar') as HTMLElement;
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
          navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
      }
    });
  }

  // Smooth scrolling for internal links
  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = document.querySelector('.navbar')?.clientHeight || 0;
      const targetPosition = section.offsetTop - navHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  }
}
