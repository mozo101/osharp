import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileEditComponent } from './edit/edit.component';
import { ProfilePasswordComponent } from './password/password.component';
import { ProfileSettingsComponent } from './settings/settings.component';
import { ProfileOauth2Component } from './oauth2/oauth2.component';

const routes: Routes = [
  {
    path: '', component: ProfileComponent, data: { title: '个人中心', reuse: true }, children: [
      { path: '', redirectTo: 'edit', pathMatch: 'full' },
      { path: 'edit', component: ProfileEditComponent, data: { title: '基本信息', reuse: true } },
      { path: 'password', component: ProfilePasswordComponent, data: { title: '修改密码', reuse: true } },
      { path: 'settings', component: ProfileSettingsComponent, data: { title: '个人设置', reuse: true } },
      { path: 'oauth2', component: ProfileOauth2Component, data: { title: '第三方账号绑定', reuse: true } },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
