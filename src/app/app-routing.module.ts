import { NgModule } from '@angular/core';
import { Routes, RouterModule,ExtraOptions } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ChildComponent } from './child/child.component';
import { CreateitemComponent } from './createitem/createitem.component';
import { DirectiveComponent } from './directive/directive.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [{path:'',component:CreateitemComponent,pathMatch:"full"},{path:'parent',component:ParentComponent},
{path:"child",component:ChildComponent,canActivate:[AuthGuard]},{path:'lazyload',loadChildren:()=>import('./lazyload/lazyload.module').then(m=>m.LazyloadModule)},
{path:"**",component:DirectiveComponent}];
// const routes:Routes=[{path:'lazyload',loadChildren:()=>import('./lazyload/lazyload.module').then(m=>m.LazyloadModule)},
// ]
const extraOptions: ExtraOptions = {
  "enableTracing": true
 };

@NgModule({
  imports: [RouterModule.forRoot(routes,extraOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
