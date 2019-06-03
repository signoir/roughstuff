/*
 * top-stories.component.spec.ts
 * Created by @anonymoussc on 06/03/2019 4:52 PM.
 */

/*
 * Copyright(c) 2019. All rights reserved.
 * Last modified 6/3/19 4:54 PM
 */

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStoriesComponent } from './top-stories.component';

describe('TopStoriesComponent', () => {
  let component: TopStoriesComponent;
  let fixture: ComponentFixture<TopStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopStoriesComponent],
      schemas     : [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture   = TestBed.createComponent(TopStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
