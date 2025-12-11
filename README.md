# Task Manager API

REST API для управления проектами и задачами, построенный на NestJS + PostgreSQL + Prisma.

---

## Установка и запуск

### Требования
- Node.js LTS (v18+)
- PostgreSQL
- npm/yarn

### Подготовка
```bash
# Установить зависимости
npm install

# Настроить .env (DATABASE_URL, JWT_SECRET)
cp .env.example .env

# Применить миграции
npx prisma migrate deploy

# Запустить в разработке
npm run start:dev

# Собрать production
npm run build && npm run start:prod
```

---

## API Endpoints

### 🔐 Аутентификация (Auth)

#### Регистрация пользователя
```http
POST /users/signup
Content-Type: application/json

{
  "username": "john_doe",
  "password": "securePassword123"
}
```
**Требования:** username (4-16 символов), password (8-20 символов)

**Response (201):**
```json
{
  "id": 1,
  "username": "john_doe",
  "role": "USER",
  "createdAt": "2025-12-11T10:30:00Z",
  "updatedAt": "2025-12-11T10:30:00Z"
}
```

---

#### Вход (получить JWT токен)
```http
POST /auth/signin
Content-Type: application/json

{
  "username": "john_doe",
  "password": "securePassword123"
}
```

**Response (200):**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "userId": 1,
  "username": "john_doe"
}
```

---

#### Выход (разлогиниться)
```http
POST /auth/logout
Authorization: Bearer {access_token}
```

**Response (200):**
```json
{
  "message": "Logout successful"
}
```

---

### 📋 Проекты (Projects)

#### Создать проект
```http
POST /project/new
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "title": "My Awesome Project",
  "description": "Project for managing team tasks"
}
```
**Требования:** title (1-56 символов), description опционально (0-256 символов)

**Response (201):**
```json
{
  "id": 5,
  "title": "My Awesome Project",
  "description": "Project for managing team tasks",
  "ownerId": 1,
  "createdAt": "2025-12-11T10:35:00Z",
  "updatedAt": "2025-12-11T10:35:00Z"
}
```

---

#### Обновить проект
```http
PUT /project/:projectId
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "title": "Updated Project Name",
  "description": "New description"
}
```
**Параметры:** projectId - ID проекта

**Response (200):**
```json
{
  "id": 5,
  "title": "Updated Project Name",
  "description": "New description",
  "ownerId": 1,
  "createdAt": "2025-12-11T10:35:00Z",
  "updatedAt": "2025-12-11T10:40:00Z"
}
```

---

#### Удалить проект
```http
DELETE /project/:projectId
Authorization: Bearer {access_token}
```
**Параметры:** projectId - ID проекта

**Response (200):**
```json
{
  "id": 5,
  "title": "My Awesome Project",
  "description": "Project for managing team tasks",
  "ownerId": 1,
  "createdAt": "2025-12-11T10:35:00Z",
  "updatedAt": "2025-12-11T10:40:00Z"
}
```

---

### 👥 Члены проекта (Project Members)

#### Добавить члена в проект
```http
POST /project-member/:projectId
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "userId": 2
}
```
**Параметры:** projectId - ID проекта  
**Требования:** userId - ID пользователя, которого нужно добавить

**Response (201):**
```json
{
  "id": 8,
  "projectId": 5,
  "userId": 2,
  "role": "MEMBER",
  "joinedAt": "2025-12-11T10:45:00Z"
}
```

---

#### Получить членов проекта
```http
GET /project-member/:projectId
Authorization: Bearer {access_token}
```
**Параметры:** projectId - ID проекта

**Response (200):**
```json
[
  {
    "id": 7,
    "projectId": 5,
    "userId": 1,
    "role": "OWNER",
    "joinedAt": "2025-12-11T10:35:00Z"
  },
  {
    "id": 8,
    "projectId": 5,
    "userId": 2,
    "role": "MEMBER",
    "joinedAt": "2025-12-11T10:45:00Z"
  }
]
```

---

#### Удалить члена из проекта
```http
DELETE /project-member/:projectId
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "userId": 2
}
```
**Параметры:** projectId - ID проекта

**Response (200):**
```json
{
  "message": "Member removed successfully"
}
```

---

### ✅ Задачи (Tasks)

#### Создать задачу
```http
POST /task/:projectId
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "title": "Implement authentication",
  "description": "Add JWT auth to API",
  "priority": "HIGH",
  "status": "TODO",
  "dueData": "2025-12-25T23:59:59Z"
}
```
**Параметры:** projectId - ID проекта  
**Требования:**
- title (4-32 символа)
- description (0-256 символов)
- priority (опционально): `LOW`, `MEDIUM`, `HIGH` (по умолчанию `MEDIUM`)
- status (опционально): `TODO`, `INPROGRESS`, `DONE` (по умолчанию `TODO`)
- dueData (опционально): ISO 8601 дата

**Response (201):**
```json
{
  "id": 12,
  "title": "Implement authentication",
  "description": "Add JWT auth to API",
  "status": "TODO",
  "priority": "HIGH",
  "projectId": 5,
  "assigneeId": 1,
  "dueData": "2025-12-25T23:59:59Z",
  "createdAt": "2025-12-11T10:50:00Z",
  "updatedAt": "2025-12-11T10:50:00Z"
}
```

---

#### Обновить задачу
```http
PUT /task/:taskId
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "title": "Implement authentication (updated)",
  "status": "INPROGRESS",
  "priority": "MEDIUM"
}
```
**Параметры:** taskId - ID задачи

**Response (200):**
```json
{
  "id": 12,
  "title": "Implement authentication (updated)",
  "description": "Add JWT auth to API",
  "status": "INPROGRESS",
  "priority": "MEDIUM",
  "projectId": 5,
  "assigneeId": 1,
  "dueData": "2025-12-25T23:59:59Z",
  "createdAt": "2025-12-11T10:50:00Z",
  "updatedAt": "2025-12-11T10:52:00Z"
}
```

---

#### Удалить задачу
```http
DELETE /task/:taskId
Authorization: Bearer {access_token}
```
**Параметры:** taskId - ID задачи

**Response (200):**
```json
{
  "id": 12,
  "title": "Implement authentication",
  "description": "Add JWT auth to API",
  "status": "TODO",
  "priority": "HIGH",
  "projectId": 5,
  "assigneeId": 1,
  "dueData": "2025-12-25T23:59:59Z",
  "createdAt": "2025-12-11T10:50:00Z",
  "updatedAt": "2025-12-11T10:50:00Z"
}
```

---

## 📌 Примечания

- **Аутентификация**: Все роуты, кроме `/users/signup` и `/auth/signin`, требуют JWT токен в заголовке `Authorization: Bearer {token}`
- **Enum значения:**
  - Status: `TODO`, `INPROGRESS`, `DONE`
  - Priority: `LOW`, `MEDIUM`, `HIGH`
  - Role: `USER`, `ADMIN`
  - ProjectRole: `OWNER`, `ADMIN`, `MEMBER`
- **Дата**: Используется ISO 8601 формат (например, `2025-12-25T23:59:59Z`)

---

## 🔗 Curl примеры для быстрого тестирования

```bash
# Регистрация
curl -X POST http://localhost:3000/users/signup \
  -H "Content-Type: application/json" \
  -d '{"username":"john_doe","password":"securePassword123"}'

# Вход
curl -X POST http://localhost:3000/auth/signin \
  -H "Content-Type: application/json" \
  -d '{"username":"john_doe","password":"securePassword123"}'

# Создать проект (используйте токен из входа)
curl -X POST http://localhost:3000/project/new \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"title":"My Project","description":"Description"}'
```

