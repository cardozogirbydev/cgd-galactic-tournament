# 🌌 Galactic Tournament - Technical Challenge

¡Bienvenido a la Arena Galáctica! Este proyecto es una solución integral para la gestión y simulación de combates entre especies de todo el universo, desarrollado como parte del proceso técnico para Morning Value.

## 1. Descripcion del sistema

La aplicación permite registrar especies con atributos específicos, enfrentarlas en combates regidos por niveles de poder y reglas de desempate alfabético, y visualizar un ranking global de victorias en tiempo real.

## 2. Requisitos para ejecutar

- JDK 17+
- Angular CLI 21.1.0
- Node.js 24.11.0
- npm 11.6.1

## 3. Instalacion y ejecucion

Clonar repositorio:

```bash
git clone https://github.com/cardozogirbydev/cgd-galactic-tournament.git
cd cgd-galactic-tournament
```

### 3.1 Backend (Spring Boot)

```bash
cd backend
./mvnw spring-boot:run
```

Backend disponible en:

- API: `http://localhost:8080/api`
- Consola H2: `http://localhost:8080/h2-console`

### 3.2 Frontend (Angular)

En otra terminal:

```bash
cd frontend
npm install
npm serve
```

Frontend disponible en:

- `http://localhost:4200`