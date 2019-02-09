import { BlogEntry } from './blogentry';
import { BaseEntity } from './baseentity';

export class BlogComment extends BaseEntity {
        public Id: number;
        public BlogId: number;
        public InsertDate: Date;
        public Subject: string;
        public Entry: string;
        public Blog: BlogEntry;

        constructor() {
            super();
            this.Id = 0;
            this.BlogId = 0;
            this.InsertDate = new Date();
            this.Subject = '';
            this.Entry = '';
            this.Blog = new BlogEntry();
        }
}
