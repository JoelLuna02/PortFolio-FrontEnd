# FrontEnd

Este proyecto fue desarrollado por el frontend [Angular CLI](https://github.com/angular/angular-cli) versión 14.0.4.

### Ejecutar servidor local
Dado a que la carpeta node_modules contiene una gran cantidad de paquetes, y por ende se hace difícil subir a GitHub debido a un peso aproximado de 300 MB, ejecute `npm install` para descargar los paquetes (**tener en cuenta el archivo** `package.json`).

Ejecute `ng serve` para ejecutar el servidor local de desarrollo e Ingrese a: `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia cualquiera de los archivos de origen.

### Creación de componentes

Ejecute `ng generate component (nombre)` para generar un nuevo componente. Puede utlizar los parámetros: `ng generate directive|pipe|service|class|guard|interface|enum|module`. Consulte la documentación de Angular sobre creación de componentes [entrando a este enlace](https://angular.io/guide/component-overview)

### Compilación

Ejecute `ng build` para compilar el proyecto. Los archivos compilados se almacenarán en el directorio `dist/` creado.

### Ejecución de pruebas o tests

Ejecute `ng test` para testear el proyecto a través de [Karma](https://karma-runner.github.io).

### Ejecutar tests de extremo a extremo (e2e)

Ejecute `ng e2e` para ejecutar las pruebas de extremo a extremo a través de una plataforma de su elección. Para usar este comando, primero debe agregar un paquete que implemente capacidades de prueba de un extremo a otro.

### Más información

Para obtener más ayuda sobre Angular CLI, use `ng help` o consulte la página [Descripción general y referencia de comandos de Angular CLI] (https://angular.io/cli).
