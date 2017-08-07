import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangelogComponent } from './changelog.component';
import { MaterialModule } from "@angular/material";
import { AngularFire } from "angularfire2";

describe('ChangelogComponent', () => {
  let component: ChangelogComponent;
  let fixture: ComponentFixture<ChangelogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangelogComponent ],
      imports: [MaterialModule.forRoot()],
      providers: [{ChangelogComponent, provide: AngularFire}]

    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(ChangelogComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
