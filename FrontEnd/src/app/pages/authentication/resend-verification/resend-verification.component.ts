import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { SweetalertService } from '../../../components/alerts/sweet-alert.service';

@Component({
  selector: 'app-resend-verification',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold text-center mb-6">Reenviar correo de verificación</h2>
        
        <form (ngSubmit)="onSubmit()" class="space-y-4">
          <div>
            <label for="email" class="block text-gray-700 mb-2">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              [(ngModel)]="email"
              class="w-full p-2 border border-gray-300 rounded text-gray-800"
              placeholder="Ingresa tu correo electrónico"
              required maxlength="255"
            >
          </div>
          
          <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Reenviar correo de verificación
          </button>
        </form>
        
        <div class="mt-4 text-center">
          <a routerLink="/login" class="text-blue-600 hover:text-blue-800">Volver al inicio de sesión</a>
        </div>
      </div>
    </div>
  `
})
export default class ResendVerificationComponent {
  email: string = '';

  constructor(
    private userService: UserService,
    private sweetalertService: SweetalertService
  ) { }

  onSubmit(): void {
    if (!this.email || !this.userService.validateEmail(this.email)) {
      this.sweetalertService.error('Por favor, ingresa un correo electrónico válido');
      return;
    }

    this.userService.resendVerificationEmail(this.email).subscribe({
      next: (response) => {
        this.sweetalertService.success('Correo de verificación reenviado. Por favor, revisa tu bandeja de entrada.');
        this.email = '';
      },
      error: (error) => {
        const errorMessage = error.error?.message || 'Error al reenviar el correo de verificación';
        this.sweetalertService.error(errorMessage);
      }
    });
  }
}