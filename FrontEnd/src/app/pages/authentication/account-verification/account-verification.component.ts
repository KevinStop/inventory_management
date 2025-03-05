import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { SweetalertService } from '../../../components/alerts/sweet-alert.service';

@Component({
  selector: 'app-account-verification',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div class="text-center">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Verificación de cuenta</h2>
          
          <div *ngIf="isLoading" class="mb-6">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p class="text-gray-600 mt-4">Verificando tu cuenta...</p>
          </div>
          
          <div *ngIf="isVerified && !isLoading" class="mb-6 text-green-500">
            <svg class="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            <p class="text-gray-700 mt-4">¡Tu cuenta ha sido verificada exitosamente!</p>
            <p class="text-gray-600 mt-2">Ahora puedes iniciar sesión en el sistema.</p>
          </div>
          
          <div *ngIf="!isVerified && !isLoading" class="mb-6 text-red-500">
            <svg class="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
            </svg>
            <p class="text-gray-700 mt-4">No se pudo verificar tu cuenta.</p>
            <p class="text-gray-600 mt-2">El enlace puede haber expirado o no ser válido.</p>
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
export default class AccountVerificationComponent implements OnInit {
  isLoading = true;
  isVerified = false;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private sweetalertService: SweetalertService
  ) {}
  
  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('userId');
    const token = this.route.snapshot.paramMap.get('token');
    
    if (!userId || !token) {
      this.isLoading = false;
      this.isVerified = false;
      return;
    }
    
    this.userService.verifyAccount(userId, token).subscribe({
      next: (response) => {
        this.isVerified = true;
        this.isLoading = false;
        this.sweetalertService.success('Tu cuenta ha sido verificada exitosamente. Ahora puedes iniciar sesión.');
      },
      error: (error) => {
        this.isVerified = false;
        this.isLoading = false;
        const errorMessage = error.error?.message || 'No se pudo verificar la cuenta. El enlace puede haber expirado o no ser válido.';
        this.sweetalertService.error(errorMessage);
      }
    });
  }
}