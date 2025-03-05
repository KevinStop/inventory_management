import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  sessionExpiringMessage: boolean = false; // Estado para mostrar el mensaje
  expirationTimeout: any; // Timeout para verificar la expiración
  currentTheme: 'light' | 'dark' = 'light';

  constructor(private userService: UserService,
    private route: Router
  ) { }

  ngOnInit(): void {
    // Comprobar si la sesión está por expirar
    this.checkSessionExpiration();
    this.userService.getUserDetails().subscribe(
      (user) => {
        this.currentTheme = user.theme || 'light';
      }
    );

    // Configurar el evento de clic para el botón de tema
    const themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn?.addEventListener('click', () => this.toggleTheme());
  }

  ngOnDestroy(): void {
    // Limpiar los temporizadores cuando el componente sea destruido
    clearTimeout(this.expirationTimeout);
  }

  toggleTheme(): void {
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    themeToggleDarkIcon?.classList.toggle('hidden');
    themeToggleLightIcon?.classList.toggle('hidden');

    // Cambiar el tema actual
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';

    // Actualizar en la BD
    this.userService.updateUserTheme(newTheme).subscribe(
      (response) => {
        this.currentTheme = newTheme;

        // Aplicar cambios visuales
        if (newTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      },
      (error) => {
        console.error('Error al actualizar el tema:', error);
        // Revertir cambios visuales en caso de error
        themeToggleDarkIcon?.classList.toggle('hidden');
        themeToggleLightIcon?.classList.toggle('hidden');
      }
    );
  }

  // Verificar si la sesión está por expirar
  checkSessionExpiration(): void {
    this.userService.isSessionExpiring().subscribe((isExpiring) => {
      if (isExpiring) {
        this.sessionExpiringMessage = true; // Mostrar el mensaje de expiración
      }
    });
  }

  // Extender la sesión
  extendSession(): void {
    this.userService.extendSession().subscribe(
      () => {
        this.sessionExpiringMessage = false; // Ocultar el mensaje
        this.resetExpirationCheck(); // Reiniciar la verificación
      },
      (error) => {
        console.error('Error al extender la sesión:', error);
        this.logout(); // Cerrar sesión si falla la extensión
      }
    );
  }

  // Ignorar el mensaje de expiración
  dismissMessage(): void {
    this.sessionExpiringMessage = false;
  }

  // Cerrar sesión
  logout(): void {
    this.userService.logout();
    this.sessionExpiringMessage = false;
  }

  goToModuleSelection(): void {
    this.route.navigate(['/moduleSelection']);
  }

  // Reiniciar la verificación de expiración
  resetExpirationCheck(): void {
    this.checkSessionExpiration();
  }
}
