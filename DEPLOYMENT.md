# Manual Técnico de Despliegue - Sistema de Gestión de Inventarios

## Tecnologías Utilizadas

El sistema está construido utilizando las siguientes tecnologías principales:

- **Frontend:**
  - Angular 18 - Framework de desarrollo web
  - Tailwind CSS - Framework de estilos
  - Flowbite - Biblioteca de componentes UI
  - SweetAlert2 - Biblioteca para alertas y notificaciones

- **Backend:**
  - Node.js - Entorno de ejecución
  - Express - Framework web
  - Prisma ORM - ORM para gestión de base de datos
  - MySQL - Sistema de gestión de base de datos
  - JWT - Autenticación y autorización
  - Multer - Manejo de subida de archivos
  - PM2 - Gestor de procesos para Node.js

- **Herramientas Adicionales:**
  - OCS Inventory - Sistema de inventario
  - Apache2 - Servidor web

## Instalación de OCS Inventory

Antes de comenzar con el despliegue del sistema, es necesario tener instalado y configurado OCS Inventory. Para realizar esta instalación, siga los tutoriales detallados en los siguientes videos:

### Instalación del Servidor OCS Inventory
📺 [Tutorial de Instalación del Servidor OCS Inventory](https://www.youtube.com/watch?v=ot8Q0Hk-GP8)

### Instalación del Agente OCS Inventory
📺 [Tutorial de Instalación del Agente OCS Inventory](https://www.youtube.com/watch?v=--5pmP_-ReE)

> ⚠️ **Importante**: Asegúrese de completar la instalación y configuración de OCS Inventory antes de proceder con el despliegue del sistema de gestión de inventarios.

## Requisitos Previos

Antes de comenzar con el despliegue, asegúrese de tener instalados los siguientes componentes:

### 1. Node.js (versión 18.x o superior)
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
```

### 2. Angular CLI (versión 18)
```bash
npm install -g @angular/cli@18
```

### 3. Git
```bash
sudo apt install git
```

### 4. Apache2
```bash
sudo apt install apache2
```

### 5. PM2 (Gestor de procesos para Node.js)
```bash
npm install -g pm2
```

### 6. MySQL
```bash
sudo apt install mysql-server
```

## Módulos Apache Requeridos

Los siguientes módulos de Apache son necesarios para el correcto funcionamiento:

```bash
sudo a2enmod rewrite
sudo a2enmod mime
sudo a2enmod headers
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod ssl
```

## Proceso de Despliegue

### 1. Conexión al Servidor

```bash
ssh root@tu_direccion_ip
```

### 2. Configuración del Frontend

1. Clonar el repositorio:
```bash
git clone https://github.com/KevinStop/inventory_management.git
cd inventory_management/Frontend
npm install
```

2. Configurar el entorno:
```bash
cd src/environments
nano environment.ts
```

> ⚠️ **Importante**: Reemplazar todas las instancias de `localhost` por la dirección IP del servidor (tu_direccion_ip)

3. Construir el proyecto:
```bash
cd ../../
ng build
```

4. Desplegar en Apache:
```bash
sudo mkdir /var/www/html/gestion_inventario
sudo mv dist/gestion_inventario/browser/* /var/www/html/gestion_inventario/
```

### 3. Configuración del Backend

1. Instalar dependencias:
```bash
cd ../Backend
npm install
```

2. Configurar variables de entorno:
```bash
nano .env
```

Contenido del archivo .env:
```env
# Conexión a la base de datos
DATABASE_URL="mysql://usuario:contraseña@direccion_ip:3306/inventory_management"

# Clave secreta para JWT
JWT_SECRET=tu_clave_secreta

# Configuración de correo (Gmail)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=correo@gmail.com
EMAIL_PASSWORD=contraseña_aplicacion
EMAIL_FROM_NAME=Nombre_Sistema
```

3. Configurar CORS:
```bash
nano index.js
```

Actualizar las siguientes líneas:
```javascript
origin: 'http://tu_direccion_ip'
res.setHeader('Access-Control-Allow-Origin', 'http://tu_direccion_ip');
```

4. Migración de la base de datos:
```bash
npx prisma migrate dev --name initial
```

5. Iniciar el servicio con PM2:
```bash
pm2 start index.js
pm2 startup
pm2 save
pm2 list
```

### 4. Configuración de Apache

1. Configurar el virtualhost:
```bash
cd /etc/apache2/sites-available
rm 000-default.conf
nano 000-default.conf
```

2. Contenido del archivo de configuración:
```apache
<VirtualHost *:80>
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/html/gestion_inventario

    # Configuración específica para OCS
    Alias /ocsreports /usr/share/ocsinventory-reports/ocsreports
    Alias /download /var/lib/ocsinventory-reports/download
    
    <Location /ocsinventory>
        SetHandler perl-script
        PerlHandler Apache::Ocsinventory
        Require all granted
    </Location>

    <Directory /var/www/html/gestion_inventario>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
        
        RewriteEngine On
        RewriteBase /
        
        # Exclusiones para OCS
        RewriteCond %{REQUEST_URI} !^/ocsinventory
        RewriteCond %{REQUEST_URI} !^/ocsreports
        RewriteCond %{REQUEST_URI} !^/download
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule ^ index.html [L]
    </Directory>

    <Directory /usr/share/ocsinventory-reports/ocsreports>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
        DirectoryIndex index.php
    </Directory>

    <Directory /var/lib/ocsinventory-reports/download>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

3. Activar la configuración y reiniciar Apache:
```bash
sudo a2ensite 000-default.conf
sudo systemctl restart apache2
```

## Verificación

Acceder a la aplicación a través del navegador:
```
http://10.3.1.106
```

## Solución de Problemas

Verificar logs de Apache:
```bash
tail -f /var/log/apache2/error.log
```

Verificar estado de PM2:
```bash
pm2 logs
pm2 status
```

Verificar permisos de directorios:
```bash
sudo chown -R www-data:www-data /var/www/html/gestion_inventario
sudo chmod -R 755 /var/www/html/gestion_inventario
```

---
> 📝 **Nota**: Este manual forma parte del sistema de gestión de inventarios y préstamo de componentes electrónicos. Para cualquier consulta o reporte de problemas, por favor crear un issue en este repositorio.
