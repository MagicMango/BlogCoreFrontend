export class BaseEntity {
    public deserialize(obj: any) {
        Object.assign(this, obj);
    }
}
