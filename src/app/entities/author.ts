import { BaseEntity } from './baseentity';
import { BlogEntry } from './blogentry';

export class Author extends BaseEntity {

        constructor() {
            super();
            this.Blogentrys = [];
            this.Id = 0;
            this.Firstname = '';
            this.Lastname = '';
            this.EMail = '';
            this.Birth = null;
        }

        public Id: number;
        public Firstname: string;
        public Lastname: string;
        public EMail: string;
        public Birth: Date;
        public Blogentrys: Array<BlogEntry>;

        GetFullName() {
            return this.Firstname + ' ' + this.Lastname;
        }
}
