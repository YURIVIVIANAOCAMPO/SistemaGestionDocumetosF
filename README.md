
## Prueba Técnica - Sistema de Registro de Documentos

Este proyecto es una prueba técnica que consiste en desarrollar un CRUD (Create, Read, Update, Delete) para el registro de documentos utilizando PHP y siguiendo el patrón de diseño MVC (Modelo-Vista-Controlador) o servicios web REST. La interfaz de usuario no requiere estilización, pero debe ser funcional.

## Endpoints

### Procesos
- **GET** - Listar general: `http://127.0.0.1:8000/api/proceso/list`
- **POST** - Guardar: `http://127.0.0.1:8000/api/proceso/add`
- **GET** - Listar por id: `http://127.0.0.1:8000/api/proceso/list/1`
- **PUT** - Actualiza por id: `http://127.0.0.1:8000/api/proceso/update/1`
- **DELETE** - Elimina por id: `http://127.0.0.1:8000/api/proceso/delete/1`

### Tipo documentos
- **GET** - Listar general: `http://127.0.0.1:8000/api/tipodoc/list`
- **POST** - Guardar: `http://127.0.0.1:8000/api/tipodoc/add`
- **GET** - Listar por id: `http://127.0.0.1:8000/api/tipodoc/list/1`
- **PUT** - Actualiza por id: `http://127.0.0.1:8000/api/tipodoc/update/1`
- **DELETE** - Elimina por id: `http://127.0.0.1:8000/api/tipodoc/delete/1`

### Documentos
- **GET** - Listar general: `http://127.0.0.1:8000/api/document/list`
- **POST** - Guardar: `http://127.0.0.1:8000/api/document/add`
- **GET** - Listar por id: `http://127.0.0.1:8000/api/document/list/1`
- **PUT** - Actualiza por id: `http://127.0.0.1:8000/api/document/update/1`
- **DELETE** - Elimina por id: `http://127.0.0.1:8000/api/document/delete/1`


## Requerimientos

- Angular (versión 16.1.12)
- Git (versión 2.40.0)


## Instalación

1. Clona el repositorio a tu directorio local: `git clone https://github.com/YURIVIVIANAOCAMPO/sistema_gestion_documentos.git`
2. Instala las dependencias utilizando Composer: `composer install`
3. Crea la base de datos: `gestion_documentos_db`
4. Realiza la migración de la base de datos: `php artisan migrate`
5. Ejecuta el proyecto: `php artisan serve`

## Uso

1. Abre tu navegador web y accede a la URL del proyecto: `http://127.0.0.1:8000`
2. Se mostrará la página de inicio con un formulario de inicio de sesión.
3. Inicia sesión utilizando las siguientes credenciales:
   - Usuario: admin
   - Contraseña: 123456
4. Una vez iniciada la sesión, podrás realizar las siguientes acciones:
   - Ver la lista de documentos registrados.
   - Buscar documentos por nombre.
   - Crear nuevos documentos.
   - Editar documentos existentes.
   - Eliminar documentos.

## Tecnologías Utilizadas

- Frontend: Typescript (versión 16.1.12) con arquitectura MVC implementada en el framework ANGULAR







