/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 5/29/19 9:35 AM
 */

import { Injectable } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Injectable()
export class SocialSharingService {
  constructor(private socialSharing: SocialSharing) {}

  share(message: string, url: string) {
    this.socialSharing.share(message, null, null, url);
  }
}
