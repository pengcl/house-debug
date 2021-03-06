import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { FileThumbDirective, UploaderModule } from './index';

const html = `<div weui-thumb [weui-thumb]="file"></div>`;

describe('Component: file-thumb', () => {
  let fixture: ComponentFixture<TestFileThumbComponent>;
  let directives: FileThumbDirective[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestFileThumbComponent],
      imports: [UploaderModule],
    });
    TestBed.overrideComponent(TestFileThumbComponent, {
      set: { template: html },
    });
    fixture = TestBed.createComponent(TestFileThumbComponent);
    fixture.detectChanges();

    directives = fixture.debugElement
      .queryAll(By.directive(FileThumbDirective))
      .map((de: DebugElement) => de.injector.get<FileThumbDirective>(FileThumbDirective));
  });

  it('should be init', () => {
    fixture.componentInstance.file = new File(
      ['iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkWK1WDwAC1gFS81OXVgAAAABJRU5ErkJggg=='],
      'test.png',
      { type: 'image/png' },
    );
    fixture.detectChanges();
    expect(directives.length).toBe(1);
    const divEl = fixture.debugElement.query(By.css('[weui-thumb]')).nativeElement as HTMLDivElement;
    expect(divEl).not.toBeNull();
    expect(divEl.style.backgroundImage).toContain('blob:');
  });

  it('should invalid image', () => {
    expect(directives.length).toBe(1);
    const divEl = fixture.debugElement.query(By.css('[weui-thumb]')).nativeElement as HTMLDivElement;
    expect(divEl).not.toBeNull();
    expect(divEl.style.backgroundImage).toBe('');
  });
});

@Component({ template: `` })
class TestFileThumbComponent {
  file: File;
}
