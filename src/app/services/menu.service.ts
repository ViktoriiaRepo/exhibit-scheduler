import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menuItems = [
    { title: 'Додати', icon: 'fa-solid fa-plus', route: '/add' },
    { title: 'Стартова', icon: 'fa-solid fa-house', route: '/home' },
    { title: 'Проєкти', icon: 'fa-solid fa-suitcase', route: '/projects' },
    { title: 'Клієнти', icon: 'fa-solid fa-users', route: '/clients' },
    { title: 'Виставки', icon: 'fa-solid fa-flag', route: '/exhibitions' },
    { title: 'Дизайнери', icon: 'fa-solid fa-pen-ruler', route: '/designers' },
    { title: 'Технології', icon: 'fa-solid fa-gear', route: '/technologists' },
    {
      title: 'Підрядники',
      icon: 'fa-solid fa-handshake',
      route: '/contractors',
    },
    {
      title: 'Співробітники',
      icon: 'fa-solid fa-address-card',
      route: '/employees',
    },
  ];

  getMenuItems() {
    return this.menuItems;
  }
}
