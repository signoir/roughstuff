/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 6/7/19 6:30 AM
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from './item/item.service';
import { OpenPageService } from './open-page/open-page.service';
import { SocialSharingService } from './social-sharing/social-sharing.service';

@NgModule({
  imports     : [
    CommonModule
  ],
  declarations: [],
  providers   : [ItemService, OpenPageService, SocialSharingService],
})
export class ServicesModule {}
