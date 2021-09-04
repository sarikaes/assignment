import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { MydirectiveDirective } from './mydirective.directive';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { NamepipePipe } from './namepipe.pipe';
import { CreateitemComponent } from './createitem/createitem.component';
import { ViewcomponentComponent } from './viewcomponent/viewcomponent.component';
import{ItemsService} from  './items.service'
import {HttpClientModule } from '@angular/common/http';
import { EmployeelistComponent } from './employeelist/employeelist.component'
import { EmployeeService } from './employee.service';
import {AngularEventsService} from './angular-events.service';
import { ReactFormComponent } from './react-form/react-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { TempFormComponent } from './temp-form/temp-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    MydirectiveDirective,
    DirectiveComponent,
    PipeComponent,
    NamepipePipe,
    CreateitemComponent,
    ViewcomponentComponent,
    EmployeelistComponent,
    ReactFormComponent,
    FormBuilderComponent,
    FormArrayComponent,
    TempFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ItemsService,EmployeeService,AngularEventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
