import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, FooterComponent, RouterOutlet],
  templateUrl: './layout.component.html',
})
export default class LayoutComponent implements OnInit {
  
  constructor(private userService: UserService) { }
  
  ngOnInit(): void {
    initFlowbite();
    
    // Cargar tema del usuario desde el backend
    this.userService.getUserDetails().subscribe(
      (user) => {
        this.applyUserTheme(user.theme || 'light');
      },
      (error) => {
        console.error('Error al obtener detalles del usuario:', error);
        // Usar light como fallback
        this.applyUserTheme('light');
      }
    );
  }
  
  private applyUserTheme(theme: string): void {
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      themeToggleDarkIcon?.classList.remove('hidden');
      themeToggleLightIcon?.classList.add('hidden');
    } else {
      document.documentElement.classList.remove('dark');
      themeToggleLightIcon?.classList.remove('hidden');
      themeToggleDarkIcon?.classList.add('hidden');
    }
  }
}