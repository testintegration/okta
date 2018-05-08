import { Routes, RouterModule } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';

const appRoutes: Routes = [
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  }
]

export const routing = RouterModule.forRoot(appRoutes);
