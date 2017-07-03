import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogComponent } from './blog.component';
import { MaterialModule } from "@angular/material";
import { AngularFire, FirebaseListObservable } from "angularfire2";


describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogComponent ],
        imports: [MaterialModule.forRoot()],
        providers: [{BlogComponent, provide: AngularFire}]
    })
      .compileComponents().then(() => {
      fixture = TestBed.createComponent(BlogComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      });
  }));



  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
