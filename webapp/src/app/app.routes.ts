import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MembersComponent } from './pages/members/members.component';
import { CircularsComponent } from './pages/circulars/circulars.component';
import { EventsComponent } from './pages/events/events.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { UserComponent } from './pages/user/user.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'members', component: MembersComponent },
  {
    path: 'circulars',
    component: CircularsComponent,
    /*children: [
      { path: '', redirectTo: 'current', pathMatch: 'full' },
      {
        path: 'current', // child route path
        component: CurrentCircularComponent, // current route component that the router renders
      },
      {
        path: 'archived',
        component: ArchivedCircularComponent, // archive child route component that the router renders
      },
    ],*/
  },
  { path: 'events',
    component: EventsComponent,
    /*children: [
      { path: '', redirectTo: 'photo', pathMatch: 'full' },
      {
        path: 'photo', // child route path
        component: EventPhotoComponent, // photo route component that the router renders
      },
      {
        path: 'video',
        component: EventVideoComponent, // video child route component that the router renders
      },
    ],*/
  },
  { path: 'payments', component: PaymentsComponent },
  { path: 'user', component: UserComponent },
  { path: '**', redirectTo: '/home' }

];
