import {ModuleWithProviders} from '@angular/core'
import {Routes ,RouterModule} from '@angular/router'

import { UserComponent } from './user/user.component';
import { ProductModule } from './product/product.module';
import { HomeComponent } from './home/home.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';


        const appRoutes:Routes=[
            {path:'users',component: UserComponent},
            {path:'products',component: HomeComponent},
            {path:'home',component: HomeComponent},
            {path:'',
            redirectTo:'/home',
            pathMatch:'full'
             },
             {path:'**' , component:PagenofoundComponent}
        ]

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes);

