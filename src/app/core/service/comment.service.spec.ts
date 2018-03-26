/* import { TestBed, inject } from '@angular/core/testing';
import { CommentService } from './comment.service';

describe('CommentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentService]
    });
  });

  it('should be created', inject([CommentService], (service: CommentService) => {
    expect(service).toBeTruthy();
  }));
});
 */

import { CommentService } from './comment.service';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CommentComponent } from '../../comment/comment.component';
import { CommentServiceMock } from '../../shared/mocks/comment.service.mock';

describe('CommentComponent', () => {
    let comp: CommentComponent;
    let fixture: ComponentFixture<CommentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CommentComponent
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
            providers: [
                { provide: CommentService, useClass: CommentServiceMock }
            ]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(CommentComponent);
            comp = fixture.componentInstance; // CommentComponent test instance
        });
    }));

    it(`should have one comment`, async(() => {
        expect(comp.rowData.length).toEqual(1);
    }));

    it(`html should render one comment`, async(() => {
        fixture.detectChanges();
        const el = fixture.nativeElement.querySelector('p');
        expect(el.innerText).toContain('testuser');
    }));
});