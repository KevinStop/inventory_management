import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registration-success',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div class="text-center">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">¡Registro Exitoso!</h2>
          <div class="mb-6 text-green-500">
            <svg class="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
          </div>
          
          <p class="text-gray-600 mb-6">
            Hemos enviado un correo electrónico a tu dirección con un enlace de verificación.
            Por favor, revisa tu bandeja de entrada y sigue las instrucciones para activar tu cuenta.
          </p>
          
          <div class="text-gray-500 text-sm mb-6">
            <p>Si no recibes el correo electrónico en unos minutos:</p>
            <ul class="list-disc text-left pl-8 mt-2">
              <li>Revisa tu carpeta de spam o correo no deseado</li>
              <li>Verifica que la dirección de correo ingresada sea correcta</li>
              <li>Espera unos minutos e intenta iniciar sesión</li>
            </ul>
          </div>
          
          <div class="mt-6">
            <a routerLink="/login" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
              Ir a inicio de sesión
            </a>
          </div>
        </div>
      </div>
    </div>
  `
})
export default class RegistrationSuccessComponent {}