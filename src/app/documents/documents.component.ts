import { Component } from '@angular/core';
import { Document } from './document'



@Component({
  selector: "app-documents",
  template: `
    <h1>{{ pageTitle }}</h1>
    <div *ngFor="let doc of documents" >
    <h3>{{doc.title}}</h3>
    <p>{{doc.description}}</p>
    <div><a href="{{doc.file_url}}">Download file here</a></div>
    <p>{{doc.updated_at}}</p>
    <p>{{doc.image_url}}</p>
    
    </div>
  `

})
export class DocumentsComponent {
  pageTitle:string = "Documents Dashboard"
  documents: Document[] = [
    {title: "title 1",
     description: "this is a description",
     file_url: "http://google.com",
     updated_at: "11/11/2017",
     image_url: "http://image.com"
     },
    {title: "title 2",
     description: "this is a description",
     file_url: "http://google.com",
     updated_at: "11/11/2017",
     image_url: "http://image.com"
     },
    {title: "title 3",
     description: "this is a description",
     file_url: "http://google.com",
     updated_at: "11/11/2017",
     image_url: "http://image.com"
     }
  ]

}