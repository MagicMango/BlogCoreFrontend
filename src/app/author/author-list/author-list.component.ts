import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';
import { Deserializer } from 'src/app/utilities/deserializer';
import { Author } from 'src/app/entities/author';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  public authors: Array<Author>;

  constructor(private authorService: AuthorService ) { }

  ngOnInit() {
    this.authorService.getAuthors().subscribe(
      {
        next: (res) => {
          this.authors = Deserializer.getTypedObjectArrayFromApi<Author>(res, Author);
        },
        error: (res) => {
          console.log(res);
        }
    }
    );
  }
}
