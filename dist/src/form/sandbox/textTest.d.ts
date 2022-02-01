import { AutoPath } from 'ts-toolbelt/out/Function/AutoPath';
declare type NestedKeyOf<ObjectType extends object> = {
    [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}` : `${Key}`;
}[keyof ObjectType & (string | number)];
declare type InputProps<T extends unknown> = {
    name: T extends object ? NestedKeyOf<T> : string;
    state?: T;
    linkTo: any;
};
export declare function Text<O extends object>(p: InputProps<O>): any;
export declare function CheckName<O, P extends string = "">(o: O, p: AutoPath<O, P>): void;
export declare function get<O extends object, P extends string>(object: O, path: AutoPath<O, P> | keyof O): void;
export {};
