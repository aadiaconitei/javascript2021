# 1. Instalam Angular
```
npm install -g @angular/cli
```
# 2. Ne pozitionam in folderul aplicatiei
### cd /...../apm-app

# 3. Facem un nou proiect
```
ng new frontend
```
### Would you like to add Angular routing? (y/N) y
### Which stylesheet format would you like to use? CSS

# 4. Ne mutam in folderul de proiect si pornim 
```
cd frontend
```
# 5. Instalam dependentele din proiect si pornim serverul Angular "javascript"  
```
ng serve
```
## http://localhost:4200/

# 6. Setting up Angular HttpClient & Forms

```
src/app/app.module.ts  import HttpClientModule, FormsModule
```
# 7. Angular  Service
```
 ng generate service api    sau ng g s api
```
### import { HttpClient } from '@angular/common/http';
### @Injectable()
### Injectam HttpClient ca instanta private httpClient in constructor. 
### Acest procedeu se numeste dependency injection. 
- https://en.wikipedia.org/wiki/Dependency_injection
- https://angular.io/guide/dependency-injection
### src/app/app.module.ts  import ApiService
```
providers: [
    ApiService
  ],
```
# 8. Student Model
```
ng g class Student
```
### Adaugam
```
id: number;
nume: string;
prenume: string;
an: number;
```
# 9. In api.sercice.ts definim metodele CRUD
# 10. Componenta Angular: Admin
```
ng generate component admin       sau ng g c admin
```
# 11. Adaugam componenta Admin in route src/app/app-routing.module.ts
```
const routes: Routes = [
  { path: 'admin', component: AdminComponent }
];
```
# 12. In app.component.html lasam doar ultimul rand
```
<router-outlet></router-outlet>
```
# 13. Importam "injectam", in AdminComponent : /admin/admin.component.ts, ApiService


# 14. http://localhost:4200/admin

# 15. Optional: Instalam  bootstrap 4
```
npm install bootstrap@v4.3.1 --save
npm install jquery --save
npm install popper.js --save
```
### Adaugam in angular.json
```
"styles": [
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
```
# 16. Adaugam cod HTML in admin.component.html


### Sau descarcam aplicatia de pe github
- https://github.com/aadiaconitei/javascript/tree/master/curs10/apm-app
### 
```
npm install
ng serve 
```
