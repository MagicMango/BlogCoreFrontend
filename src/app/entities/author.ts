import { BaseEntity } from './baseentity';
import { BlogEntry } from './blogentry';

export class Author extends BaseEntity {

        constructor() {
            super();
            this.blogentrys = [];
            this.id = 0;
            this.firstname = '';
            this.lastname = '';
            this.eMail = '';
            this.birth = new Date();
        }

        public id: number;
        public firstname: string;
        public lastname: string;
        public eMail: string;
        public birth: Date;
        public blogentrys: Array<BlogEntry>;

        GetFullName() {
            return this.firstname + ' ' + this.lastname;
        }
}
