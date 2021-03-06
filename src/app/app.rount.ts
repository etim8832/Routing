import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';

const appRoutes: Routes = [
        { path: 'users', component: UserComponent },
        { path: 'home', component: HomeComponent },
        {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
        },
        { path: '**', component: PagenofoundComponent }
];
@NgModule({
        imports: [
                RouterModule.forRoot(
                        appRoutes,
                        { enableTracing: false } 
                )],
        exports: [
                RouterModule
        ]
})

export class AppRoutingModule { }