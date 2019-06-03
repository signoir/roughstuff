/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 6/3/19 2:27 PM
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from './item/item.service';

@NgModule({
  declarations: [],
  imports     : [
    CommonModule
  ],
  providers   : [ItemService],
})
export class ServicesModule {}
