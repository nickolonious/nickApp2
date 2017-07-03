import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutmeComponent } from './aboutme.component';
import { MaterialModule } from '@angular/material';
import { AngularFire } from 'angularfire2';

describe('AboutmeComponent', () => {
  let component: AboutmeComponent;
  let fixture: ComponentFixture<AboutmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutmeComponent ],
      imports: [ 
        MaterialModule.forRoot(),
      ],
      providers: [{AboutmeComponent, provide: AngularFire}]


    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(AboutmeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create AboutmeComponent', () => {
    expect(component).toBeTruthy();
  });
});
