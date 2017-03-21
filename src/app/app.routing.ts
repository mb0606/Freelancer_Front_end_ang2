import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { DocumentsComponent } from './documents/documents.component'
import { HomePageComponent } from './homepage.component'
import { ProposalListComponent } from './proposal/proposal-list.component'


const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/home' , pathMatch: 'full' },
  { path: 'home', component: HomePageComponent},
  { path: 'documents', component: DocumentsComponent},
  { path: 'proposals', component: ProposalListComponent},

]

export const routing = RouterModule.forRoot(APP_ROUTES);