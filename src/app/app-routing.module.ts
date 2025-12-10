// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./modules/signup/signup.module').then(m => m.SignupModule)
  },
    {
    path: 'dashboard',
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
    {
    path: 'dashboard/generate-qr',
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/generate-qr/generate-qr.module').then(m => m.GenerateQrModule)
  },
    {
    path: 'dashboard/component-scan',
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/component-scan/component-scan.module').then(m => m.ComponentScanModule)
  },
    {
    path: 'dashboard/box-packing',
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/box-packing/box-packing.module').then(m => m.BoxPackingModule)
  },
    {
    path: 'dashboard/data-history',
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/data-history/data-history.module').then(m => m.DataHistoryModule)
  },
  {
    path: 'reminders',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/reminder-list/reminders.module').then(m => m.RemindersModule)
  },
  {
    path: 'create-reminder',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/create-reminder/create-reminder.module').then(
        m => m.CreateReminderModule
      )
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
