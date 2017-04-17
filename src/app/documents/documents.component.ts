import { Component, OnInit } from '@angular/core';
import { DocumentService } from './document.service'
import { Observable } from 'rxjs/Rx'; 

import { Document } from './document'



@Component({
  selector: "app-documents",
  styleUrls:['document.component.css'],
  template: `
    <h1 class="headline">{{ pageTitle }}</h1>
    <div class="card mb-3" *ngFor="let doc of documents" >
      <img class="rounded mx-auto d-block" src="{{doc.image_url}}" alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">{{doc.title}}</h4>
        <p class="card-text"><small class="text-muted">Last Updated: {{doc.updated_at | date}}</small></p>
        <p class="card-text">{{doc.description}}</p>
        <div><a class="btn btn-large btn-primary" href="{{doc.file_url}}">Download file here</a></div>
      </div><!-- card-block -->        
    </div><!-- card  -->
    
  `

})
export class DocumentsComponent implements OnInit {
  pageTitle:string = "Documents Dashboard";
  documents: Document[];
  errorMessage: string;
  
  constructor(private docService: DocumentService){}

  ngOnInit(){
    let timer = Observable.timer(0,5000)
    timer.subscribe(()=> this.getDocuments())
    
  }

  getDocuments(){
    this.docService.getDocuments()
            .subscribe(
              resp => this.documents = resp,
              err  => this.errorMessage = <any>err
              )
    
  }
}