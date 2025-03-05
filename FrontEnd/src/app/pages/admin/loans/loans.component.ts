import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportService } from '../../../services/report.service';
import { CategoryService } from '../../../services/category.service';
import { ComponentService, ComponentResponse } from '../../../services/component.service';
import { AcademicPeriodsService } from '../../../services/academic-periods.service';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { UserService } from '../../../services/user.service';

import Swal from 'sweetalert2';

interface PreviewResponse {
  headers: string[];
  data: any[];
}

@Component({
  selector: 'app-loans',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    PaginatorModule
  ],
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css'],
})
export default class LoansComponent implements OnInit, AfterViewInit, OnDestroy {
  // Variables para el manejo de reportes
  availableReports: any[] = [];
  academicPeriods: any[] = [];
  previewData: any[] = [];
  components: ComponentResponse[] = [];
  categories: any[] = [];
  previewHeaders: string[] = [];
  selectedReport: string = '';
  filterForm: FormGroup;
  isLoading: boolean = false;
  showFilters: boolean = false;
  users: any[] = [];
  filteredUsers: any[] = [];
  filteredCategories: any[] = [];
  filteredPeriods: any[] = [];
  filteredComponents: any[] = [];
  searchTerm: string = '';
  categorySearchTerm: string = '';
  periodSearchTerm: string = '';
  componentSearchTerm: string = '';

  // Añadir variable para los tipos de solicitud
  // En el componente TS, modifica la propiedad requestTypes
  requestTypes: string[] = [
    'Trabajo UIC',
    'Guias de laboratorio',
    'Proyectos de vinculacion',
    'Proyectos de investigacion'
  ];
  selectedRequestTypes: string[] = [];

  // Definir tipos de filtros disponibles
  filterTypes = {
    date: ['startDate', 'endDate', 'returnDate'],
    select: ['status', 'movementType', 'category', 'componentId', 'academicPeriodId', 'userId'],
    multiselect: ['requestTypes'], // Añadir nuevo tipo para multiselección
    number: ['']
  };

  @ViewChild('userSearchInput') userSearchInput!: ElementRef;
  @ViewChild('categorySearchInput') categorySearchInput!: ElementRef;
  @ViewChild('periodSearchInput') periodSearchInput!: ElementRef;
  @ViewChild('componentSearchInput') componentSearchInput!: ElementRef;

  showUserDropdown: boolean = false;
  showCategoryDropdown: boolean = false;
  showPeriodDropdown: boolean = false;
  showComponentDropdown: boolean = false;

  constructor(
    private reportService: ReportService,
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private componentService: ComponentService,
    private academicPeriodsService: AcademicPeriodsService,
    private userService: UserService
  ) {
    // Inicializar formulario vacío
    this.filterForm = this.fb.group({});
  }

  ngOnInit(): void {
    initFlowbite();
    this.getCategories();
    this.getComponents();
    this.loadAvailableReports();
    this.loadPeriods();
    this.loadUsers();

  }

  ngAfterViewInit(): void {
    document.addEventListener('click', this.closeDropdownsIfClickedOutside.bind(this));
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', this.closeDropdownsIfClickedOutside.bind(this));
  }

  // Filtrar usuarios al escribir y mostrar dropdown
  onUserSearchInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.searchTerm = inputValue;
    this.filteredUsers = this.userService.filterUsersByName(this.users, this.searchTerm);
    this.showUserDropdown = true;
  }

  selectUser(user: any): void {
    this.filterForm.get('userId')?.setValue(user.userId);
    this.searchTerm = user.name;
    this.showUserDropdown = false;
  }

  // Para categorías
  onCategorySearchInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.categorySearchTerm = inputValue;
    this.filteredCategories = this.categories.filter(category =>
      category.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    this.showCategoryDropdown = true;
  }

  selectCategory(category: any): void {
    this.filterForm.get('category')?.setValue(category.name);
    this.categorySearchTerm = category.name;
    this.showCategoryDropdown = false;
  }

  // Para períodos académicos
  onPeriodSearchInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.periodSearchTerm = inputValue;
    this.filteredPeriods = this.academicPeriods.filter(period =>
      period.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    this.showPeriodDropdown = true;
  }

  selectPeriod(period: any): void {
    this.filterForm.get('academicPeriodId')?.setValue(period.id);
    this.periodSearchTerm = period.name;
    this.showPeriodDropdown = false;
  }

  // Para componentes
  onComponentSearchInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.componentSearchTerm = inputValue;
    this.filteredComponents = this.components.filter(component =>
      component.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    this.showComponentDropdown = true;
  }

  selectComponent(component: any): void {
    this.filterForm.get('componentId')?.setValue(component.id);
    this.componentSearchTerm = component.name;
    this.showComponentDropdown = false;
  }

  closeDropdownsIfClickedOutside(event: MouseEvent): void {
    // Para usuarios
    if (this.userSearchInput && !this.userSearchInput.nativeElement.contains(event.target)) {
      this.showUserDropdown = false;
    }

    // Para categorías
    if (this.categorySearchInput && !this.categorySearchInput.nativeElement.contains(event.target)) {
      this.showCategoryDropdown = false;
    }

    // Para períodos
    if (this.periodSearchInput && !this.periodSearchInput.nativeElement.contains(event.target)) {
      this.showPeriodDropdown = false;
    }

    // Para componentes
    if (this.componentSearchInput && !this.componentSearchInput.nativeElement.contains(event.target)) {
      this.showComponentDropdown = false;
    }
  }

  // Método para manejar la selección/deselección de tipos de solicitud
  onRequestTypeChange(type: string, event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.selectedRequestTypes.push(type);
    } else {
      this.selectedRequestTypes = this.selectedRequestTypes.filter(t => t !== type);
    }

    // Actualizar el valor en el formulario
    this.filterForm.get('requestTypes')?.setValue(this.selectedRequestTypes.length ? this.selectedRequestTypes : null);
  }

  // Verificar si un tipo está seleccionado
  isRequestTypeSelected(type: string): boolean {
    return this.selectedRequestTypes.includes(type);
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.filteredUsers = data;
      },
      error: (err) => console.error('Error cargando usuarios:', err)
    });
  }

  filterUsers(): void {
    this.filteredUsers = this.userService.filterUsersByName(this.users, this.searchTerm);
  }

  // Cargar períodos activos e inactivos
  loadPeriods(): void {
    this.academicPeriodsService.getAcademicPeriods().subscribe({
      next: (data) => {
        this.academicPeriods = data.academicPeriods;
        this.filteredPeriods = [...data.academicPeriods];
      },
      error: (err) => {
        console.error('Error al cargar los períodos:', err);
      },
    });
  }

  // Método para obtener todos los componentes
  getComponents(): void {
    this.componentService.getComponents().subscribe(
      (response) => {
        this.components = response.components;
        this.filteredComponents = [...response.components];
      },
      (error) => {
        console.error('Error al obtener los componentes:', error);
      }
    );
  }

  // Método para obtener todas las categorías
  getCategories(): void {
    this.categoryService.getCategories().subscribe(
      (data) => {
        this.categories = data;
        this.filteredCategories = [...data];
      },
      (error) => {
        console.error('Error al obtener las categorías:', error);
      }
    );
  }

  // Cargar los reportes disponibles
  loadAvailableReports(): void {
    this.reportService.getAvailableReports().subscribe({
      next: (response: any) => {
        this.availableReports = response.reports;
      },
      error: (error) => {
        console.error('Error cargando reportes:', error);
        this.showError('Error al cargar los reportes disponibles');
      }
    });
  }

  // Cuando se selecciona un tipo de reporte
  onReportTypeChange(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.selectedReport = value;
    this.showFilters = true;
    this.initializeFilters(value);
    this.previewData = [];
    this.previewHeaders = [];
    // Reiniciar tipos de solicitud seleccionados
    this.selectedRequestTypes = [];
  }

  // Inicializar filtros según el tipo de reporte
  initializeFilters(reportId: string): void {
    const filterOptions = this.reportService.getFilterOptions(reportId);
    const formGroup: any = {};

    filterOptions.required?.forEach((filter: string) => {
      formGroup[filter] = ['', [Validators.required]];
    });

    filterOptions.optional?.forEach((filter: string) => {
      // Inicializar requestTypes como array vacío
      if (filter === 'requestTypes') {
        formGroup[filter] = [null];
      } else {
        formGroup[filter] = [''];
      }
    });

    this.filterForm = this.fb.group(formGroup, {
      validators: this.dateRangeValidator()
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.filterForm.get(fieldName);
    return field?.invalid && (field?.dirty || field?.touched) || false;
  }

  // Determinar el tipo de filtro
  getFilterType(filterName: string): string {
    for (const [type, filters] of Object.entries(this.filterTypes)) {
      if (filters.includes(filterName)) {
        return type;
      }
    }
    return 'text';
  }

  // Generar el reporte
  generateReport(): void {
    if (this.filterForm.invalid) {
      Object.keys(this.filterForm.controls).forEach(key => {
        const control = this.filterForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
      this.showError('Por favor complete todos los campos requeridos');
      return;
    }

    this.isLoading = true;
    const filters = { ...this.filterForm.value };

    // Si no hay tipos de solicitud seleccionados, añadir todos
    if ((!this.selectedRequestTypes || this.selectedRequestTypes.length === 0) && this.filterForm.get('requestTypes')) {
      filters.requestTypes = this.requestTypes;
    } else if (this.selectedRequestTypes.length > 0) {
      filters.requestTypes = this.selectedRequestTypes;
    }

    this.reportService.getReportPreview(this.selectedReport, filters).subscribe({
      next: (response: PreviewResponse) => {
        this.previewData = response.data;
        this.previewHeaders = response.headers;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error obteniendo vista previa:', error);
        this.showError('Error al obtener vista previa de datos');
        this.isLoading = false;
      }
    });
  }

  generatePDF(): void {
    this.isLoading = true;
    const filters = { ...this.filterForm.value };

    // Si no hay tipos de solicitud seleccionados, añadir todos
    if ((!this.selectedRequestTypes || this.selectedRequestTypes.length === 0) && this.filterForm.get('requestTypes')) {
      filters.requestTypes = this.requestTypes;
    } else if (this.selectedRequestTypes.length > 0) {
      filters.requestTypes = this.selectedRequestTypes;
    }

    this.reportService.generateReport(this.selectedReport, filters).subscribe({
      next: (blob: Blob) => {
        const fileName = this.reportService.getReportFileName(this.selectedReport);

        // Crear URL para abrir en nueva pestaña
        const url = window.URL.createObjectURL(blob);

        // Abrir en una nueva pestaña
        const newWindow = window.open(url, '_blank');

        // Fallar silenciosamente si el navegador bloquea la apertura
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
          // Si falla abrir en nueva pestaña, descargar el archivo
          this.reportService.downloadPDF(blob, fileName);
          this.showSuccess('Reporte PDF generado y descargado exitosamente');
        } else {
          this.showSuccess('Reporte PDF generado exitosamente');
        }

        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error generando PDF:', error);
        this.showError('Error al generar el PDF');
        this.isLoading = false;
      }
    });
  }

  // Reiniciar filtros
  resetFilters(): void {
    this.filterForm.reset();
    this.selectedRequestTypes = [];
    this.searchTerm = '';
    this.categorySearchTerm = '';
    this.periodSearchTerm = '';
    this.componentSearchTerm = '';
  }

  // Mostrar mensaje de error
  private showError(message: string): void {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message
    });
  }

  // Mostrar mensaje de éxito
  private showSuccess(message: string): void {
    Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: message
    });
  }

  // Verificar si un filtro es requerido
  isFilterRequired(filterName: string): boolean {
    const filterOptions = this.reportService.getFilterOptions(this.selectedReport);
    return filterOptions.required?.includes(filterName) || false;
  }

  // Obtener el label para un filtro
  getFilterLabel(filterName: string): string {
    const labels: { [key: string]: string } = {
      startDate: 'Fecha inicial',
      endDate: 'Fecha final',
      academicPeriodId: 'Período académico',
      status: 'Estado',
      componentId: 'Componente',
      userId: 'Usuario',
      movementType: 'Tipo de movimiento',
      category: 'Categoría',
      returnDate: 'Fecha de devolución',
      requestTypes: 'Tipos de solicitud' // Añadir label para el nuevo filtro
    };
    return labels[filterName] || filterName;
  }

  // En el componente TS añade este método
  getReportDescription(): string {
    const selectedReportObj = this.availableReports.find(r => r.id === this.selectedReport);
    return selectedReportObj ? selectedReportObj.description : '';
  }

  private dateRangeValidator(): any {
    return (formGroup: FormGroup) => {
      const startDate = formGroup.get('startDate')?.value;
      const endDate = formGroup.get('endDate')?.value;

      if (startDate && endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);

        if (end < start) {
          formGroup.get('endDate')?.setErrors({ dateRange: true });
          return { dateRange: true };
        } else {
          formGroup.get('endDate')?.setErrors(null);
          return null;
        }
      }
      return null;
    };
  }
}