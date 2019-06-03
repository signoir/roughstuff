/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 6/2/19 4:35 PM
 */

/*
 * test-utils.ts
 * Created by @anonymoussc on 06/02/2019 4:32 PM.
 */

import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export class TestUtils {
  static beforeEachCompiler(components: Array<any>, providers: Array<any> = []): Promise<{ fixture: any, instance: any }> {
    return TestUtils.configureIonicTestingModule(components, providers)
      .compileComponents().then(() => {
        const fixture: any = TestBed.createComponent(components[0]);
        return {
          fixture,
          instance: fixture.componentInstance,
        };
      });
  }

  static configureIonicTestingModule(components: Array<any>, providers: Array<any> = []): typeof TestBed {
    return TestBed.configureTestingModule({
      declarations: [
        ...components,
      ],
      schemas     : [CUSTOM_ELEMENTS_SCHEMA],
      providers   : [
        ...providers,
      ],
      imports     : [
        FormsModule,
        IonicModule,
      ],
    });
  }
}