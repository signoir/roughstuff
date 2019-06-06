/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 6/7/19 6:30 AM
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopStoriesComponent } from './top-stories.component';

const routes: Routes = [
  {path: '', component: TopStoriesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopStoriesRoutingModule {}
