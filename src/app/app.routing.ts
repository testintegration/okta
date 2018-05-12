import { Routes, RouterModule } from '@angular/router';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
import { MessageListComponent } from './message-list.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ OktaAuthGuard ],
  },
  {
    path: 'messages',
    component: MessageListComponent,
    canActivate: [ OktaAuthGuard ],
  },
]

export const routing = RouterModule.forRoot(appRoutes);
