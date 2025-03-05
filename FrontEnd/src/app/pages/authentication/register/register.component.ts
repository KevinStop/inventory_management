import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { SweetalertService } from '../../../components/alerts/sweet-alert.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html',
})
export default class RegisterComponent implements OnInit {
  userData = {
    email: '',
    password: '',
    name: '',
    lastName: ''
  };

  formErrors = {
    email: '',
    password: '',
    name: '',
    lastName: ''
  };

  showErrors = false;

  constructor(private userService: UserService, private router: Router, private sweetalertService: SweetalertService) { }

  ngOnInit(): void {
    initFlowbite();
  }

  validateForm(): boolean {
    let isValid = true;
    this.formErrors = {
      email: '',
      password: '',
      name: '',
      lastName: ''
    };

    // Validar nombre
    const name = this.userData.name.trim();
    if (!name) {
      this.formErrors.name = 'El nombre es requerido';
      isValid = false;
    }

    // Validar apellido
    const lastName = this.userData.lastName.trim();
    if (!lastName) {
      this.formErrors.lastName = 'El apellido es requerido';
      isValid = false;
    }

    // Validar email
    const email = this.userData.email.trim();
    const emailRegex = /^[a-zA-Z][a-zA-Z]?[a-zA-Z0-9]*@espe\.edu\.ec$/;
    const hasTwoConsecutiveDots = /\.{2,}/.test(email);

    if (!email) {
      this.formErrors.email = 'El correo electrónico es requerido';
      isValid = false;
    } else if (hasTwoConsecutiveDots) {
      this.formErrors.email = 'El correo no puede contener puntos consecutivos';
      isValid = false;
    } else if (!emailRegex.test(email)) {
      this.formErrors.email = 'Ingrese un correo institucional válido (@espe.edu.ec)';
      isValid = false;
    } else {
      // Validar estructura esperada (Primera letra del nombre + Segunda letra opcional + Apellido + Números opcionales)
      const firstLetter = name.charAt(0).toLowerCase(); // Primera letra del nombre
      const emailPrefix = email.split('@')[0]; // Obtener la parte antes del @

      // Verificar que el email comience con la primera letra del nombre
      if (!emailPrefix.startsWith(firstLetter)) {
        this.formErrors.email = `El correo debe iniciar con "${firstLetter}[segundo nombre]${lastName.toLowerCase()}"`;
        isValid = false;
      }
      // Verificar que la segunda letra sea una letra (si existe)
      else if (emailPrefix.length > 1 && !/^[a-zA-Z]$/.test(emailPrefix[1])) {
        this.formErrors.email = 'La segunda letra del correo debe ser una letra.';
        isValid = false;
      }
      // Verificar que después de la segunda letra esté el apellido
      else {
        const expectedPrefixRegex = new RegExp(`^${firstLetter}[a-zA-Z]?${lastName.toLowerCase()}[0-9]*$`);
        if (!expectedPrefixRegex.test(emailPrefix)) {
          this.formErrors.email = `El correo debe iniciar con "${firstLetter}[cualquier letra]${lastName.toLowerCase()}" seguido de números opcionales.`;
          isValid = false;
        }
      }
    }

    // Validar contraseña
    if (!this.userData.password) {
      this.formErrors.password = 'La contraseña es requerida';
      isValid = false;
    } else if (this.userData.password.length < 6) {
      this.formErrors.password = 'La contraseña debe tener al menos 6 caracteres';
      isValid = false;
    }

    return isValid;
  }

  // Método para manejar el registro de usuario
  onSubmit(): void {
    this.showErrors = true;
  
    if (!this.validateForm()) {
      this.sweetalertService.error('Por favor, complete todos los campos correctamente.');
      return;
    }
  
    const userData = {
      email: this.userData.email,
      password: this.userData.password,
      name: this.userData.name,
      lastName: this.userData.lastName
    };
  
    this.userService.register(userData).subscribe({
      next: (response) => {
        this.sweetalertService.success(
          'Registro exitoso. Se ha enviado un correo electrónico para activar tu cuenta. ' +
          'Por favor, revisa tu bandeja de entrada y sigue las instrucciones.'
        );
        this.router.navigate(['/registration-success']);
      },
      error: (error) => {
        const errorMessage = error.error?.message || 'Hubo un problema al registrar el usuario. Por favor, intenta nuevamente.';
        this.sweetalertService.error(errorMessage);
      }
    });
  }
}
