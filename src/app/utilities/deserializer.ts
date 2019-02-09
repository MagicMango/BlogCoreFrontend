import { BaseEntity } from '../entities/baseentity';

export class Deserializer {

    static getTypedObjectArrayFromApi<T extends BaseEntity>(arr: any[], type: new() => T ): Array<T> {
        const value: Array<T> = [];
        arr.forEach(element => {
            const o: T = Object.create(type.prototype);
            o.deserialize(element);
            value.push(o);
        });
        return value;
    }
}
