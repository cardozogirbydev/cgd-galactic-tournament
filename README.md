# 🌌 Galactic Tournament - Technical Challenge

¡Bienvenido a la Arena Galáctica! Este proyecto es una solución integral para la gestión y simulación de combates entre especies de todo el universo, desarrollado como parte del proceso técnico para **Morning Value**.

## 1. Descripcion del sistema

La aplicación permite registrar especies con atributos específicos, enfrentarlas en combates regidos por niveles de poder y reglas de desempate alfabético, y visualizar un ranking global de victorias.

## 2. Arquitectura y Decisioens de diseño
Para garantizar un código limpio y mantenible, se han aplicado los siguientes patrones:

* **Backend (Spring Boot):**
  * **Arquitectura en Capas:** Separación estricta entre Controller, Service y Repository.
  * **Patrón DTO:** Uso de objetos de transferencia para proteger las entidades y evitar el *Over-posting*.
  * **Validación:** Implementación de validaciones a nivel de API (Jakarta Validation) y base de datos.

* **Frontend (Angular 21):**
  * **Signals & RxResource:** Gestión de estado y datos asíncronos mediante las APIs más modernas de Angular.
  * **Lazy Loading:** Optimización de carga por módulos de características (features).
  * **DaisyUI 5:** Interfaz de usuario moderna y responsiva basada en Tailwind CSS.

## 3. Requisitos para ejecutar

- JDK 17+
- Angular CLI 21.1.0
- Node.js 24.11.0
- npm 11.6.1

## 4. Instalacion y ejecucion

Clonar repositorio:

```bash
git clone https://github.com/cardozogirbydev/cgd-galactic-tournament.git
cd cgd-galactic-tournament
```

### 4.1 Backend (Spring Boot)

```bash
cd backend
./mvnw spring-boot:run
```

Backend disponible en:

- API: `http://localhost:8080/api`
- Consola H2: `http://localhost:8080/h2-console`

### 4.2 Frontend (Angular)

**Clonar el archivo `.env.template` y renombrarlo a `.env`**
**En caso de que la url o el puerto sea distinto, cambiar la variable de entorno**


En otra terminal:

```bash
cd frontend
npm install
npm run set-envs
ng serve
```

Frontend disponible en:

- `http://localhost:4200`