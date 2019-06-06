/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 6/7/19 6:28 AM
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesListComponent } from './favorites-list.component';

const routes: Routes = [
  {path: '', component: FavoritesListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesListRoutingModule {}
