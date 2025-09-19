import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface MenuItem {
  id: number;
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
    // {
    //   id: 1,
    //   name: 'Espresso',
    //   price: '3.50',
    //   description: 'Rich, intense shot of our signature blend',
    //   category: 'coffee',
    // },
    // {
    //   id: 2,

    //   name: 'Americano',
    //   price: '4.00',
    //   description: 'Smooth espresso with hot water',
    //   category: 'coffee',
    // },
    // {
    //   id: 3,

    //   name: 'Cappuccino',
    //   price: '4.50',
    //   description: 'Espresso with steamed milk and foam',
    //   category: 'coffee',
    // },
    // {
    //   id: 4,

    //   name: 'Latte',
    //   price: '5.00',
    //   description: 'Creamy espresso with steamed milk',
    //   category: 'coffee',
    // },

    // // Iced Coffee Items
    // {
    //   id: 5,

    //   name: 'Iced Americano',

    //   price: '4.25',
    //   description: 'Cold espresso with chilled water',
    //   category: 'iced',
    // },

    // {
    //   id: 6,

    //   name: 'Frappé',
    //   price: '5.50',
    //   description: 'Blended iced coffee with whipped cream',
    //   category: 'iced',
    // },

    // // Drinks Items
    // {
    //   id: 7,

    //   name: 'Hot Chocolate',
    //   price: '4.00',
    //   description: 'Rich chocolate with steamed milk',
    //   category: 'drinks',
    // },
    // {
    //   id: 8,
    //   name: 'Green Tea Latte',
    //   price: '4.75',
    //   description: 'Matcha powder with steamed milk',
    //   category: 'drinks',
    // },

    // {
    //   id: 9,

    //   name: 'Fresh Juice',
    //   price: '3.75',
    //   description: 'Orange, apple, or seasonal fruit',
    //   category: 'drinks',
    // },

    // // Snacks Items
    // {
    //   id: 10,
    //   name: 'Croissant',
    //   price: '3.25',
    //   description: 'Buttery, flaky French pastry',
    //   category: 'snacks',
    // },
    // {
    //   id: 11,
    //   name: 'Muffin',
    //   price: '2.75',
    //   description: 'Blueberry or chocolate chip',
    //   category: 'snacks',
    // },
    // {
    //   id: 12,

    //   name: 'Bagel',
    //   price: '2.50',
    //   description: 'Plain or everything, with cream cheese',
    //   category: 'snacks',
    // },
    // {
    //   id: 13,

    //   name: 'Sandwich',
    //   price: '7.50',
    //   description: 'Fresh ingredients on artisan bread',
    //   category: 'snacks',
    // },
    // //Matcha Items
    // {
    //   id: 14,

    //   name: 'Matcha',
    //   price: '60',
    //   description: 'Matcha powder with steamed milk',
    //   category: 'matcha',
    // },   {
    //   id: 14,

    //   name: 'Matcha strawberry',
    //   price: '70',
    //   description: 'Matcha powder with strasteamed milk',
    //   category: 'matcha',
    // },   {
    //   id: 14,

    //   name: 'Matcha',
    //   price: '60',
    //   description: 'Matcha powder with steamed milk',
    //   category: 'matcha',
    // },   {
    //   id: 14,

    //   name: 'Matcha',
    //   price: '60',
    //   description: 'Matcha powder with steamed milk',
    //   category: 'matcha',
    // },   {
    //   id: 14,

    //   name: 'Matcha',
    //   price: '60',
    //   description: 'Matcha powder with steamed milk',
    //   category: 'matcha',
    // },
    {
      id: 1,
      name: 'Cappuccino',
      price: '65',
      description: 'Classic Italian cappuccino',
      category: 'coffee',
    },
    {
      id: 2,
      name: 'Caffe Latte',
      price: '65',
      description: 'Espresso with steamed milk',
      category: 'coffee',
    },
    {
      id: 3,
      name: 'Mocha',
      price: '70',
      description: 'Espresso with chocolate and milk',
      category: 'coffee',
    },
    {
      id: 4,
      name: 'Americano',
      price: '60',
      description: 'Espresso diluted with hot water',
      category: 'coffee',
    },
    {
      id: 5,
      name: 'Espresso',
      price: '45',
      description: 'Strong and rich espresso shot',
      category: 'coffee',
    },
    {
      id: 6,
      name: 'Turkish Coffee',
      price: '40',
      description: 'Traditional Turkish coffee',
      category: 'coffee',
    },
    {
      id: 7,
      name: 'Flat White',
      price: '65',
      description: 'Espresso with velvety milk',
      category: 'coffee',
    },
    {
      id: 8,
      name: 'Hot Chocolate',
      price: '60',
      description: 'Creamy hot chocolate drink',
      category: 'coffee',
    },
    {
      id: 9,
      name: 'Caramel Macchiato',
      price: '75',
      description: 'Espresso, milk, and caramel syrup',
      category: 'coffee',
    },
    {
      id: 10,
      name: 'White Chocolate Mocha',
      price: '75',
      description: 'Espresso with white chocolate',
      category: 'coffee',
    },
    {
      id: 11,
      name: 'Iced Cappuccino',
      price: '80',
      description: 'Chilled cappuccino over ice',
      category: 'iced',
    },
    {
      id: 12,
      name: 'Iced Latte',
      price: '80',
      description: 'Cold latte served with ice',
      category: 'iced',
    },
    {
      id: 13,
      name: 'Iced Mocha',
      price: '85',
      description: 'Iced coffee with chocolate',
      category: 'iced',
    },
    {
      id: 14,
      name: 'Iced Americano',
      price: '70',
      description: 'Espresso with chilled water and ice',
      category: 'iced',
    },
    {
      id: 15,
      name: 'Iced Caramel Macchiato',
      price: '85',
      description: 'Iced coffee with caramel flavor',
      category: 'iced',
    },
    {
      id: 16,
      name: 'Espresso Frappe',
      price: '80',
      description: 'Blended espresso frappe',
      category: 'iced',
    },
    {
      id: 17,
      name: 'Mocha Frappe',
      price: '90',
      description: 'Blended mocha frappe',
      category: 'iced',
    },
    {
      id: 18,
      name: 'Vanilla Frappe',
      price: '80',
      description: 'Blended frappe with vanilla flavor',
      category: 'iced',
    },
    {
      id: 19,
      name: 'Caramel Frappe',
      price: '90',
      description: 'Iced frappe with caramel flavor',
      category: 'iced',
    },
    {
      id: 20,
      name: 'Strawberry Frappe',
      price: '80',
      description: 'Strawberry flavored iced frappe',
      category: 'iced',
    },
    {
      id: 21,
      name: 'Vanilla Milkshake',
      price: '90',
      description: 'Classic vanilla shake',
      category: 'drinks',
    },
    {
      id: 22,
      name: 'Chocolate Milkshake',
      price: '90',
      description: 'Chocolate flavored shake',
      category: 'drinks',
    },
    {
      id: 23,
      name: 'Strawberry Milkshake',
      price: '90',
      description: 'Fresh strawberry milkshake',
      category: 'drinks',
    },
    {
      id: 24,
      name: 'Mango Smoothie',
      price: '70',
      description: 'Fresh mango smoothie',
      category: 'drinks',
    },
    {
      id: 25,
      name: 'Strawberry Smoothie',
      price: '70',
      description: 'Strawberry fruit smoothie',
      category: 'drinks',
    },
    {
      id: 26,
      name: 'Blueberry Smoothie',
      price: '70',
      description: 'Blueberry blended smoothie',
      category: 'drinks',
    },
    {
      id: 27,
      name: 'Chocolate Banana Shake',
      price: '100',
      description: 'Protein shake with banana & chocolate',
      category: 'drinks',
    },
    {
      id: 28,
      name: 'Peach Smoothie',
      price: '70',
      description: 'Fresh peach smoothie',
      category: 'drinks',
    },
    {
      id: 29,
      name: 'Boba Tea',
      price: '80',
      description: 'Classic milk tea with boba pearls',
      category: 'drinks',
    },
    {
      id: 30,
      name: 'Oreo Milkshake',
      price: '90',
      description: 'Oreo cookies blended milkshake',
      category: 'drinks',
    },
    {
      id: 31,
      name: 'Nutella Milkshake',
      price: '90',
      description: 'Nutella flavored milkshake',
      category: 'drinks',
    },
    {
      id: 32,
      name: 'Kiwi Smoothie',
      price: '70',
      description: 'Fresh kiwi smoothie',
      category: 'drinks',
    },
    {
      id: 33,
      name: 'Watermelon Smoothie',
      price: '70',
      description: 'Refreshing watermelon smoothie',
      category: 'drinks',
    },
    {
      id: 34,
      name: 'Guava Juice',
      price: '55',
      description: 'Fresh guava juice',
      category: 'drinks',
    },
    {
      id: 35,
      name: 'Orange Juice',
      price: '55',
      description: 'Fresh orange juice',
      category: 'drinks',
    },
    {
      id: 36,
      name: 'Mango Juice',
      price: '55',
      description: 'Fresh mango juice',
      category: 'drinks',
    },
    {
      id: 37,
      name: 'Red Bull',
      price: '60',
      description: 'Energy drink',
      category: 'drinks',
    },
    {
      id: 38,
      name: 'Espresso Shot',
      price: '30',
      description: 'Single espresso shot addition',
      category: 'drinks',
    },
    {
      id: 39,
      name: 'Whipped Cream',
      price: '15',
      description: 'Whipped cream topping',
      category: 'drinks',
    },
    {
      id: 40,
      name: 'Milk Addition',
      price: '10',
      description: 'Extra milk for drinks',
      category: 'drinks',
    },
    {
      id: 41,
      name: 'Matcha',
      price: '60',
      description: 'Classic Japanese matcha latte',
      category: 'matcha',
    },
    {
      id: 42,
      name: 'Matcha Strawberry',
      price: '70',
      description: 'Matcha latte with strawberry flavor',
      category: 'matcha',
    },
    {
      id: 43,
      name: 'Matcha Mango',
      price: '70',
      description: 'Matcha latte with mango flavor',
      category: 'matcha',
    },
    {
      id: 44,
      name: 'Matcha Coconut',
      price: '70',
      description: 'Matcha latte with coconut flavor',
      category: 'matcha',
    },
    {
      id: 45,
      name: 'Matcha Latte',
      price: '70',
      description: 'Creamy hot matcha latte',
      category: 'matcha',
    },
    {
      id: 46,
      name: 'Chocolate Muffin',
      price: '40',
      description: 'Freshly baked chocolate muffin',
      category: 'snacks',
    },
    {
      id: 47,
      name: 'Blueberry Muffin',
      price: '40',
      description: 'Muffin with blueberries',
      category: 'snacks',
    },
    {
      id: 48,
      name: 'Croissant',
      price: '35',
      description: 'Buttery French croissant',
      category: 'snacks',
    },
    {
      id: 49,
      name: 'Cheese Croissant',
      price: '40',
      description: 'Croissant stuffed with cheese',
      category: 'snacks',
    },
    {
      id: 50,
      name: 'Chocolate Croissant',
      price: '45',
      description: 'Croissant filled with chocolate',
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
