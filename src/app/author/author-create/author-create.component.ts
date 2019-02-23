import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/services/author.service';
import { Author } from 'src/app/entities/author';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css']
})
export class AuthorCreateComponent implements OnInit {
  public authorForm: FormGroup;
  public author: Author;
  public errorMessages: any = {};
  constructor(private authorService: AuthorService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.author = new Author();
    this.authorForm = this.formBuilder.group({
      Firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      Lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      Birth: ['', [/*Validators.required*/]],
      EMail: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(512)]],
    });
  }

  SaveAuthor() {
    console.log(this.author);
    this.authorService
    .createAuthor(this.author)
    .subscribe({
      complete: () => { },
      next: (resp) => {
        console.log(resp);
        alert('Alles tutti');
       },
      error: (error) => {
        switch (error.status) {
          case 400:
            this.errorMessages = error.error;
            break;
        }
        console.log(this.errorMessages);
      }
    });
  }

}
