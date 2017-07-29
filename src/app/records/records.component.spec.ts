import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecordsComponent } from './records.component';
import { MaterialModule } from "@angular/material";
import { AngularFire } from "angularfire2";

describe('RecordsComponent', () => {
  let component: RecordsComponent;
  let fixture: ComponentFixture<RecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordsComponent ],
      imports: [MaterialModule.forRoot()],
      providers: [{RecordsComponent, provide: AngularFire}]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(RecordsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
