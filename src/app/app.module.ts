/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 6/3/19 2:27 PM
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { ServicesModule } from './services/services.module';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TimeAgoPipe } from './components/time-ago/time-ago.pipe';

@NgModule({
  declarations   : [
    AppComponent,
    TimeAgoPipe
  ],
  entryComponents: [],
  imports        : [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ComponentsModule,
    ServicesModule
  ],
  providers      : [
    StatusBar,
    SplashScreen,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap      : [AppComponent]
})
export class AppModule {}
