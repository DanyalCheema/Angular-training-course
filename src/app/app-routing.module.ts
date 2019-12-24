import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';


const appRoutes: Routes = [
  {path: "add", component: MediaItemFormComponent},
  {path: ":medium", component: MediaItemListComponent},
  {path: '', redirectTo: 'all', pathMatch: 'full' },
  
  //{path: "**", component: PageNotFoundComponent}
];

// @NgModule({
//   imports: [RouterModule.forRoot(appRoutes)],
//   exports: [RouterModule]
// })
export const routing = RouterModule.forRoot(appRoutes);

