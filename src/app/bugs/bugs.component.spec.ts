import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BugsComponent } from './bugs.component';
import { MaterialModule } from "@angular/material";

describe('BugsComponent', () => {
  let component: BugsComponent;
  let fixture: ComponentFixture<BugsComponent>;

 beforeEach(async(() => {
  TestBed.configureTestingModule({
    declarations: [ BugsComponent ],
      imports: [ 
        MaterialModule.forRoot(),
      ]
  })
  .compileComponents().then(() => {
    fixture = TestBed.createComponent(BugsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async(() => {
    const fixture = TestBed.createComponent(BugsComponent);
    const bugsComponent = fixture.debugElement.componentInstance;
    expect(bugsComponent).toBeTruthy();
  }));
});
