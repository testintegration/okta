import { OktaAuthModule } from '@okta/okta-angular';
import { oktaConstants } from './oktaConstants.config';

export const oidcDefault = OktaAuthModule.initAuth(oktaConstants.oidc);
