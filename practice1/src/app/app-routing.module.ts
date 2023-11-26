import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CourseComponent } from './course/course.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { DetailsComponent } from './details/details.component';
import { AdminChildComponent } from './admin-child/admin-child.component';
import { AdminChild2Component } from './admin-child2/admin-child2.component';

const routes: Routes = [
  //{path : '',component:AdminComponent},
  {path:'', redirectTo:'/admin',pathMatch:'full'},
{path : 'admin' ,component :AdminComponent},
{path: 'course', component : CourseComponent},
{path:'admin/:id',component:DetailsComponent,
children : [
  {path :'child1' ,component:AdminChildComponent},
  {path: 'child2',component:AdminChild2Component}
]},
{path: "**",component:PageNotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[AdminComponent,CourseComponent]
