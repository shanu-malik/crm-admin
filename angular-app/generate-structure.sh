#!/bin/sh

# Navigate to the Angular app directory
cd my-angular-app || exit 1

# Create Core module
mkdir -p src/app/core/services src/app/core/guards src/app/core/interceptors
echo "export class CoreModule {}" > src/app/core/core.module.ts
echo "export class ApiService { constructor() {} }" > src/app/core/services/api.service.ts
echo "export class AuthGuard { canActivate() { return true; } }" > src/app/core/guards/auth.guard.ts
echo "export class AuthInterceptor { intercept(req, next) { return next.handle(req); } }" > src/app/core/interceptors/auth.interceptor.ts

# Create Shared module
mkdir -p src/app/shared/components src/app/shared/pipes src/app/shared/directives
echo "export class SharedModule {}" > src/app/shared/shared.module.ts
echo "import { Pipe, PipeTransform } from '@angular/core'; @Pipe({ name: 'dateFormat' }) export class DateFormatPipe implements PipeTransform { transform(value: any) { return value; } }" > src/app/shared/pipes/date-format.pipe.ts
echo "import { Directive } from '@angular/core'; @Directive({ selector: '[appHighlight]' }) export class HighlightDirective {}" > src/app/shared/directives/highlight.directive.ts

# Create Features modules
mkdir -p src/app/features/auth/components src/app/features/auth/services
mkdir -p src/app/features/dashboard src/app/features/users src/app/features/products
echo "export class AuthModule {}" > src/app/features/auth/auth.module.ts
echo "export class AuthRoutingModule {}" > src/app/features/auth/auth-routing.module.ts
echo "export class AuthService { login() {} }" > src/app/features/auth/services/auth.service.ts

# Create Layout module
mkdir -p src/app/layout/header src/app/layout/footer src/app/layout/sidebar
echo "export class LayoutModule {}" > src/app/layout/layout.module.ts
echo "export class HeaderComponent {}" > src/app/layout/header/header.component.ts
echo "export class FooterComponent {}" > src/app/layout/footer/footer.component.ts
echo "export class SidebarComponent {}" > src/app/layout/sidebar/sidebar.component.ts

# Create Store module (for NgRx)
mkdir -p src/app/store/auth src/app/store/users
echo "export class StoreModule {}" > src/app/store/store.module.ts
echo "export const AUTH_ACTIONS = {};" > src/app/store/auth/auth.actions.ts
echo "export function authReducer(state, action) { return state; }" > src/app/store/auth/auth.reducer.ts
echo "export const USER_ACTIONS = {};" > src/app/store/users/users.actions.ts

# Create Configuration
mkdir -p src/app/config
echo "export const API_CONFIG = {};" > src/app/config/api.config.ts
echo "export const APP_CONFIG = {};" > src/app/config/app.config.ts
echo "export const CONSTANTS = {};" > src/app/config/constants.ts
echo "export const LANGUAGES = { en: 'English', fr: 'Français' };" > src/app/config/languages.ts

echo "✅ Folder structure and initial file contents created successfully!"
