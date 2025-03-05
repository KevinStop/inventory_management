import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private baseUrl = `${environment.apiUrl}/reports`;

  constructor(private http: HttpClient) { }

  // Obtener lista de reportes disponibles
  getAvailableReports(): Observable<any> {
    return this.http.get(`${this.baseUrl}/available`);
  }

  // Validar filtros antes de generar reporte
  validateFilters(reportType: string, filters: any): Observable<any> {
    const payload = {
      reportType,
      filters
    };
    return this.http.post(`${this.baseUrl}/validate-filters`, payload);
  }

  // Generar reporte de préstamos por período
  getLoansByPeriodReport(filters: any): Observable<Blob> {
    const params = new HttpParams({ fromObject: filters });
    return this.http.get(`${this.baseUrl}/loans-by-period`, {
      params,
      responseType: 'blob'
    });
  }

  // Generar reporte de componentes más solicitados
  getMostRequestedComponentsReport(filters: any): Observable<Blob> {
    const params = new HttpParams({ fromObject: filters });
    return this.http.get(`${this.baseUrl}/most-requested-components`, {
      params,
      responseType: 'blob'
    });
  }

  // Generar reporte de préstamos activos
  getActiveLoansReport(filters: any): Observable<Blob> {
    const params = new HttpParams({ fromObject: filters });
    return this.http.get(`${this.baseUrl}/active-loans`, {
      params,
      responseType: 'blob'
    });
  }

  // Generar reporte de componentes con bajo stock
  getLowStockReport(filters: any): Observable<Blob> {
    const params = new HttpParams({ fromObject: filters });
    return this.http.get(`${this.baseUrl}/low-stock`, {
      params,
      responseType: 'blob'
    });
  }

  // Generar reporte de movimientos de componentes
  getComponentMovementsReport(filters: any): Observable<Blob> {
    const params = new HttpParams({ fromObject: filters });
    return this.http.get(`${this.baseUrl}/component-movements`, {
      params,
      responseType: 'blob'
    });
  }

  // Generar reporte de préstamos no devueltos
  getNotReturnedReport(filters: any): Observable<Blob> {
    const params = new HttpParams({ fromObject: filters });
    return this.http.get(`${this.baseUrl}/not-returned`, {
      params,
      responseType: 'blob'
    });
  }

  // Método genérico para descargar el PDF
  downloadPDF(blob: Blob, fileName: string): void {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  // Método genérico para generar cualquier reporte
  generateReport(reportType: string, filters: any): Observable<Blob> {
    const reportMethods: { [key: string]: (filters: any) => Observable<Blob> } = {
      'loans-by-period': this.getLoansByPeriodReport.bind(this),
      'most-requested': this.getMostRequestedComponentsReport.bind(this),
      'active-loans': this.getActiveLoansReport.bind(this),
      'low-stock': this.getLowStockReport.bind(this),
      'movements': this.getComponentMovementsReport.bind(this),
      'not-returned': this.getNotReturnedReport.bind(this)
    };

    if (!reportMethods[reportType]) {
      throw new Error('Tipo de reporte no válido');
    }

    // Si es un array de tipos de solicitud, convertirlo a formato adecuado para HTTP
    if (filters.requestTypes && Array.isArray(filters.requestTypes)) {
      // Si solo hay un valor, mandarlo como string para evitar problemas con algunos backends
      if (filters.requestTypes.length === 1) {
        filters.requestTypes = filters.requestTypes[0];
      }
      // Si hay múltiples valores, conservar el array (HttpParams lo manejará)
    }

    return reportMethods[reportType](filters);
  }

  // Método para obtener las opciones de filtros según el tipo de reporte
  getFilterOptions(reportType: string): any {
    const filterOptions: { [key: string]: any } = {
      'loans-by-period': {
        required: ['academicPeriodId'],
        optional: ['startDate', 'endDate', 'status', 'requestTypes']
      },
      'most-requested': {
        optional: ['startDate', 'endDate', 'category', 'requestTypes']
      },
      'active-loans': {
        optional: ['userId', 'componentId', 'requestTypes']
      },
      'low-stock': {
        optional: ['category']
      },
      'movements': {
        required: ['startDate', 'endDate'],
        optional: ['componentId', 'movementType']
      },
      'not-returned': {
        optional: ['startDate', 'endDate', 'userId', 'requestTypes']
      }
    };

    return filterOptions[reportType] || { required: [], optional: [] };
  }

  // Método para formatear el nombre del archivo según el tipo de reporte
  getReportFileName(reportType: string): string {
    const reportNames: { [key: string]: string } = {
      'loans-by-period': 'prestamos_periodo',
      'most-requested': 'componentes_solicitados',
      'active-loans': 'prestamos_activos',
      'low-stock': 'bajo_stock',
      'movements': 'movimientos_componentes',
      'not-returned': 'prestamos_no_devueltos'
    };

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    return `${reportNames[reportType]}_${timestamp}.pdf`;
  }

  getReportPreview(reportType: string, filters: any): Observable<any> {
    const reportEndpoints: { [key: string]: string } = {
      'loans-by-period': 'loans-by-period/preview',
      'most-requested': 'most-requested-components/preview',
      'active-loans': 'active-loans/preview',
      'low-stock': 'low-stock/preview',
      'movements': 'component-movements/preview',
      'not-returned': 'not-returned/preview'
    };
  
    const endpoint = reportEndpoints[reportType];
    if (!endpoint) {
      throw new Error('Tipo de reporte no válido');
    }
  
    // Manejar el array de tipos de solicitud
    if (filters.requestTypes && Array.isArray(filters.requestTypes)) {
      if (filters.requestTypes.length === 1) {
        filters.requestTypes = filters.requestTypes[0];
      }
    }

    const params = new HttpParams({ fromObject: filters });
    return this.http.get(`${this.baseUrl}/${endpoint}`, { params });
  }

  // Nuevo método para obtener tipos de solicitud disponibles
  getRequestTypes(): Observable<any> {
    // Este endpoint deberá ser implementado en el backend si no existe
    // O puedes usar un valor fijo si los tipos son fijos
    return this.http.get(`${environment.apiUrl}/request-types`);
  }
}