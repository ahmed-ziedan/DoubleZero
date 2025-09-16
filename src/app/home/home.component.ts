import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface MenuItem {
  name: string;
  price: string;
  description: string;
  category: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  activeFilter: string = 'all';

  menuItems: MenuItem[] = [
    // Coffee Items
    {
      name: 'Espresso',
      price: '3.50',
      description: 'Rich, intense shot of our signature blend',
      category: 'coffee',
    },
    {
      name: 'Americano',
      price: '4.00',
      description: 'Smooth espresso with hot water',
      category: 'coffee',
    },
    {
      name: 'Cappuccino',
      price: '4.50',
      description: 'Espresso with steamed milk and foam',
      category: 'coffee',
    },
    {
      name: 'Latte',
      price: '5.00',
      description: 'Creamy espresso with steamed milk',
      category: 'coffee',
    },

    // Iced Coffee Items
    {
      name: 'Iced Americano',
      price: '4.25',
      description: 'Cold espresso with chilled water',
      category: 'iced',
    },
    {
      name: 'Iced Latte',
      price: '5.25',
      description: 'Cold espresso with chilled milk',
      category: 'iced',
    },
    {
      name: 'Cold Brew',
      price: '4.75',
      description: 'Smooth, slow-steeped coffee',
      category: 'iced',
    },
    {
      name: 'Frappé',
      price: '5.50',
      description: 'Blended iced coffee with whipped cream',
      category: 'iced',
    },

    // Drinks Items
    {
      name: 'Hot Chocolate',
      price: '4.00',
      description: 'Rich chocolate with steamed milk',
      category: 'drinks',
    },
    {
      name: 'Green Tea Latte',
      price: '4.75',
      description: 'Matcha powder with steamed milk',
      category: 'drinks',
    },
    {
      name: 'Chai Latte',
      price: '4.50',
      description: 'Spiced tea with steamed milk',
      category: 'drinks',
    },
    {
      name: 'Fresh Juice',
      price: '3.75',
      description: 'Orange, apple, or seasonal fruit',
      category: 'drinks',
    },

    // Snacks Items
    {
      name: 'Croissant',
      price: '3.25',
      description: 'Buttery, flaky French pastry',
      category: 'snacks',
    },
    {
      name: 'Muffin',
      price: '2.75',
      description: 'Blueberry or chocolate chip',
      category: 'snacks',
    },
    {
      name: 'Bagel',
      price: '2.50',
      description: 'Plain or everything, with cream cheese',
      category: 'snacks',
    },
    {
      name: 'Sandwich',
      price: '7.50',
      description: 'Fresh ingredients on artisan bread',
      category: 'snacks',
    },
  ];

  filteredMenuItems: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.filteredMenuItems = this.menuItems;
    this.initializeAnimations();
  }

  filterMenu(category: string): void {
    this.activeFilter = category;

    if (category === 'all') {
      this.filteredMenuItems = this.menuItems;
    } else {
      this.filteredMenuItems = this.menuItems.filter(
        (item) => item.category === category
      );
    }
  }

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

  private initializeAnimations(): void {
    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe menu items for scroll animations
    setTimeout(() => {
      const menuItems = document.querySelectorAll('.menu-item');
      menuItems.forEach((item) => {
        (item as HTMLElement).style.opacity = '0';
        (item as HTMLElement).style.transform = 'translateY(30px)';
        (item as HTMLElement).style.transition =
          'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
      });
    }, 100);
  }
}
