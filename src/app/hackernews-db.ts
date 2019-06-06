/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 5/29/19 9:35 AM
 */

import { AngularFireDatabase } from '@angular/fire/database';
import { InjectionToken } from '@angular/core';

export const HACKER_NEWS_DB = new InjectionToken<AngularFireDatabase>('Hacker News db');
