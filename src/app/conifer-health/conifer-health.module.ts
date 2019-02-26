import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ManageRuleComponent } from './components/manage-rule/manage-rule.component';
import { BaseService } from './services/base.service';
import { HttpModule } from '@angular/http';
import { BsDropdownModule } from 'ngx-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    HttpModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [BaseService],
  declarations: [DashboardComponent, HeaderComponent, SidebarComponent, ManageRuleComponent],
  exports: [DashboardComponent]
})
export class ConiferHealthModule { }
