import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

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
    ViewcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
