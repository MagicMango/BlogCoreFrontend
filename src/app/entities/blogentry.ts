import { BaseEntity } from './baseentity';
import { Author } from './author';

export class BlogEntry extends BaseEntity {

    public Id: number;
    public AuthorId: number;
    public InsertDate: Date;
    public Subject: string;
    public Entry: string;
    public Categories: string;

    public Author: Author;
    public Comments: Array<Comment>;

    constructor() {
        super();
        this.Id = 0;
        this.AuthorId = 0;
        this.InsertDate = new Date();
        this.Subject = '';
        this.Entry = '';
        this.Categories = '';
        this.Author = new Author();
        this.Comments = [];
    }
}
