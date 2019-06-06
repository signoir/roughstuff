/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 5/29/19 9:35 AM
 */

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

declare const require: any;

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
const context = require.context('./', true, /\.spec\.ts$/);
context.keys().map(context);
