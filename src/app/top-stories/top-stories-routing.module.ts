/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 6/3/19 4:47 PM
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopStoriesRoutingModule {}
