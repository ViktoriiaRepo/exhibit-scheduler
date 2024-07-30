import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../model/menu-item';
import { MenuService } from '../../services/menu.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  menuItems: MenuItem[] = [];
  isMenuOpen = true;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuItems = this.menuService.getMenuItems();
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
