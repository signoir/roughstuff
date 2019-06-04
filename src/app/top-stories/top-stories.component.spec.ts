/*
 * top-stories.component.spec.ts
 * Created by @anonymoussc on 06/03/2019 4:52 PM.
 */

/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 6/4/19 3:31 PM
 */

import { async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TestUtils } from '../../testing/test-utils';
import { TopStoriesComponent } from './top-stories.component';
import { ItemsComponent } from '../components/items/items.component';
import { ItemComponent } from '../components/item/item.component';
import { TimeAgoPipe } from '../components/time-ago/time-ago.pipe';
import { ItemService } from '../services/item/item.service';
import { ItemServiceMock } from '../services/item/item.service.mock';

let fixture: ComponentFixture<TopStoriesComponent> = null;
let component: any                                 = null;
describe('top stories page', () => {
  beforeEach(async(() => TestUtils.beforeEachCompiler(
    [
      TopStoriesComponent, ItemsComponent, ItemComponent,
      TimeAgoPipe
    ],
    [{provide: ItemService, useClass: ItemServiceMock}]
  ).then(compiled => {
    fixture   = compiled.fixture;
    component = compiled.instance;
  })));
  it('should display a list of 10 items', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const debugElements = fixture.debugElement.queryAll(By.css('h2'));
      expect(debugElements.length).toBe(10);
      expect(debugElements[0].nativeElement.textContent).toContain('Item 1');
      expect(debugElements[1].nativeElement.textContent).toContain('Item 2');
    });
  }));
});
