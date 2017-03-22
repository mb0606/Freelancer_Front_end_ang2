import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { DocumentsComponent } from './documents/documents.component'
import { HomePageComponent } from './homepage.component'
import { ProposalListComponent } from './proposal/proposal-list.component'
import { ProposalNewComponent } from './proposal/proposal-new.component'
import { ProposalShowComponent } from './proposal/proposal-show.component'


const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/home' , pathMatch: 'full' },
  { path: 'home', component: HomePageComponent},
  { path: 'documents', component: DocumentsComponent},
  { path: 'proposals', component: ProposalListComponent},
  { path: 'proposals/new', component: ProposalNewComponent},
  { path: 'proposal/:id', component: ProposalShowComponent}


]

export const routing = RouterModule.forRoot(APP_ROUTES);