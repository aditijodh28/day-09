# DAY 9 — Angular + TypeScript + API Integration

## 📌 Overview

Day 9 focuses on learning **Angular, TypeScript, REST API integration, RxJS, Observables, Routing, Services, and Reactive Forms**.

As part of the practical assignment, a **Facility Inspection Dashboard** was developed using Angular. The application communicates with a REST API to retrieve facility information, display dashboard metrics, submit inspections, and display inspection history.

---

## 🎯 Objective

The main objectives of Day 9 are:

* Understand Angular architecture
* Create reusable Angular components
* Work with TypeScript interfaces and models
* Implement Angular routing
* Use route parameters
* Understand property binding, event binding, and two-way binding
* Use Angular directives and pipes
* Create Angular services
* Understand Dependency Injection
* Use Angular HttpClient
* Work with Observables and RxJS
* Integrate a REST API
* Implement Reactive Forms
* Handle API errors
* Build a practical Facility Inspection Dashboard

---

# 📁 Project Structure

```text
day-09/
│
├── angular-app/
│   └── facility-dashboard/
│       ├── src/
│       │   └── app/
│       │       ├── components/
│       │       │   └── navbar/
│       │       │
│       │       ├── models/
│       │       │   ├── facility.model.ts
│       │       │   └── inspection.model.ts
│       │       │
│       │       ├── pages/
│       │       │   ├── dashboard/
│       │       │   ├── facilities/
│       │       │   ├── facility-details/
│       │       │   ├── inspection-form/
│       │       │   └── inspection-history/
│       │       │
│       │       ├── services/
│       │       │   └── facility.service.ts
│       │       │
│       │       ├── app.component.ts
│       │       ├── app.component.html
│       │       ├── app.config.ts
│       │       └── app.routes.ts
│       │
│       ├── package.json
│       └── angular.json
│
├── api-integration/
│
└── README.md
```

---

# 🛠️ Technologies Used

* Angular
* TypeScript
* HTML5
* CSS3
* RxJS
* REST API
* HTTP Client
* Reactive Forms
* Laravel API
* MySQL
* Git & GitHub


# 🏢 Facility Inspection Dashboard

The main practical application is a **Facility Inspection Dashboard**.

The dashboard provides information about facility inspections through a web interface.

---

# 📊 Dashboard Features

The dashboard displays:

* Total facilities
* Average cleanliness score
* Total complaints
* Number of facilities with water availability

Example:

```text
-----------------------------------------
| Total Facilities | Average Cleanliness |
-----------------------------------------
| Complaints       | Water Available     |
-----------------------------------------
```

---

# 🏢 Facility Management

The Facilities page provides:

* Facility list
* Search
* Water availability filter
* Sorting
* Facility details

Users can search facilities by location.

Example:

```text
Search: Nagpur
```

The list is automatically filtered based on the search text.

---

# 🔎 Facility Details

Users can open individual facility information.

Example URL:

```text
/facilities/1
```

The details page displays:

* Facility ID
* Location
* Cleanliness score
* Odor score
* Waste level
* Water availability
* Footfall
* Complaints
* Inspection date

---

# 📝 Inspection Form

The application provides a form to submit a new inspection.

### Fields

```text
Facility ID
Cleanliness Score
Odor Score
Waste Level
Water Availability
Complaints
Inspection Date
Remarks
```

The form uses validation to prevent invalid data.

---


# 🔗 REST API

The Angular application communicates with a REST API.

Expected API endpoints:

| Method | Endpoint               | Purpose                |
| ------ | ---------------------- | ---------------------- |
| GET    | `/api/facilities`      | Get all facilities     |
| GET    | `/api/facilities/{id}` | Get facility details   |
| GET    | `/api/inspections`     | Get inspection history |
| POST   | `/api/inspections`     | Create inspection      |

The API can be provided by the Laravel backend developed during Day 8.

---

# 🔄 Application Data Flow

```text
                 Angular Application
                        |
                        v
                Angular Component
                        |
                        v
                 Facility Service
                        |
                        v
                   HttpClient
                        |
                        v
                    REST API
                        |
                        v
                    Laravel
                        |
                        v
                     MySQL
                        |
                        v
                  JSON Response
                        |
                        v
                 Angular Component
                        |
                        v
                     UI
```

---

# ⚙️ Installation

## Step 1 — Navigate to the project

```powershell
cd day-09/angular-app
```

## Step 2 — Install dependencies

```powershell
npm install
```

## Step 3 — Start Angular

```powershell
ng serve
```

The application will normally be available at:

```text
http://localhost:4200
```

---

# 🚀 Running the Backend

If the Laravel API from Day 8 is being used, start it from the Laravel project:

```powershell
php artisan serve
```

The backend will normally run at:

```text
http://localhost:8000
```

The Angular service should therefore use:

```typescript
private apiUrl = 'http://localhost:8000/api';
```

---






