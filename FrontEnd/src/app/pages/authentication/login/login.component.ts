// login.component.ts
import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SweetalertService } from '../../../components/alerts/sweet-alert.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
})
export default class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  constructor(
    private userService: UserService, 
    private router: Router, 
    private sweetalertService: SweetalertService
  ) {}

  onSubmit(): void {
    if (!this.credentials.email || !this.credentials.password) {
      this.sweetalertService.error('Por favor, Complete los campos');
      return;
    }
  
    this.userService.login(this.credentials).subscribe({
      next: (user) => {
        if (user.role === 'admin') {
          this.router.navigate(['/home/electronicComponent']);
        } else {
          this.router.navigate(['/home/viewComponents']);
        }
      },
      error: (error) => {
        let errorMessage = 'Credenciales incorrectas, por favor intenta nuevamente.';
        
        // Verificar si es un error de cuenta no activada
        if (error.error?.message && error.error.message.includes('no está activada')) {
          errorMessage = 'Tu cuenta aún no está activada. Por favor, verifica tu correo electrónico para completar el registro.';
        }
        this.sweetalertService.error(error.error?.message || errorMessage);
      }
    });
  }
}