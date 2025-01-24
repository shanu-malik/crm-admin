import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MasterComponent } from './pages/master/master.component';
import { CategoryComponent } from './pages/category/category.component';


export const routes: Routes = [
    {
        path:'',redirectTo:'login',pathMatch:'full',
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'',component:LayoutComponent,
        children:[
            {
                path:'dashboard',component:DashboardComponent,
                title:"dashboard"
            },
            {
                path:'master/categories',component:CategoryComponent
            }
        ]
    }
];
