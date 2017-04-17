import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { ServersService } from './servers/servers.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ServerResolver } from './servers/server/server-resolver.service';
import { UsersService } from './users/users.service';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [
          AppComponent,
          HomeComponent,
          UsersComponent,
          ServersComponent,
          UserComponent,
          EditServerComponent,
          ServerComponent,
          PagenotfoundComponent,
          ErrorPageComponent
        ],
        imports: [
          BrowserModule,
          FormsModule,
          HttpModule,
          AppRoutingModule
        ],
        providers: [
          ServersService,
          AuthService,
          AuthGuard,
          CanDeactivateGuard,
          ServerResolver,
          UsersService,
          {provide: APP_BASE_HREF, useValue : '/' }
        ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
