import { Component } from '@angular/core';
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
        <p class="card-text">{{doc.description}}</p>
        <div><a class="btn btn-large btn-primary" href="{{doc.file_url}}">Download file here</a></div>
        <p class="card-text"><small class="text-muted">{{doc.updated_at}}</small></p>
      </div><!-- card-block -->        
    </div><!-- card  -->
    
  `

})
export class DocumentsComponent {
  pageTitle:string = "Documents Dashboard"
  documents: Document[] = [
    {title: "title 1",
     description: "this is a description",
     file_url: "http://google.com",
     updated_at: "11/11/2017",
     image_url: "https://www.vappingo.com/word-blog/wp-content/uploads/2011/01/paper2.jpg"
     },
    {title: "title 2",
     description: "this is a description",
     file_url: "http://google.com",
     updated_at: "11/11/2017",
     image_url: "https://www.vappingo.com/word-blog/wp-content/uploads/2011/01/paper2.jpg"
     },
    {title: "title 3",
     description: "this is a description",
     file_url: "http://google.com",
     updated_at: "11/11/2017",
     image_url: "https://www.vappingo.com/word-blog/wp-content/uploads/2011/01/paper2.jpg"
     }
  ]

}