import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollaboratorListComponent } from './components/collaborator-list/collaborator-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {TableModule} from 'primeng/table';
import {CheckboxModule} from 'primeng/checkbox';
import { MenuComponent } from './components/menu/menu.component';
import {TabMenuModule} from 'primeng/tabmenu';
import { ReglesListComponent } from './components/regles-list/regles-list.component';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollaboratorItemComponent } from './components/collaborator-item/collaborator-item.component';
import {CardModule} from 'primeng/card';

import { CompetenceListComponent } from './components/competence-list/competence-list.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MultiSelectModule} from 'primeng/multiselect';
import {ButtonModule} from 'primeng/button';


import { RegleFormComponent } from './components/regle-form/regle-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompetencePipe } from './pipes/competence.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CollaboratorListComponent,
    MenuComponent,
    ReglesListComponent,
    CollaboratorItemComponent,
    ReglesListComponent,
    CompetenceListComponent,
    RegleFormComponent,
    CompetencePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    CheckboxModule,
    TabMenuModule,
    DialogModule,
    BrowserAnimationsModule,
    MessagesModule,
    MessageModule,
    MultiSelectModule,
    ButtonModule,
    CardModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [
    { provide: 'BACKEND_URL', useValue: 'http://localhost:8080'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
