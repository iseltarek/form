import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { ShowDataComponent } from './app/show-data/show-data.component';
import { LayoutComponent } from './app/layout/layout.component';
import { provideHttpClient } from '@angular/common/http';
import { FormComponent } from './app/form/form.component';

bootstrapApplication(AppComponent, {
  providers: [
    [provideHttpClient()],
    provideRouter([
      {
        path: 'data',
        component: ShowDataComponent,
      },
      {
        path: '',
        component: LayoutComponent,
        pathMatch: 'full',
      },
    ]),
  ],
}).catch((err) => console.error(err));
