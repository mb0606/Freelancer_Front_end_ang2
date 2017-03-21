import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing'

import { AppComponent } from './app.component';
import { DocumentsComponent } from './documents/documents.component'
import { HomePageComponent } from './homepage.component';
import { ProposalListComponent } from './proposal/proposal-list.component'
import { ProposalNewComponent } from './proposal/proposal-new.component'
import { ProposalShowComponent } from './proposal/proposal-show.component'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DocumentsComponent,
    ProposalListComponent,
    ProposalNewComponent,
    ProposalShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
