import { Component } from 'preact';
import { AutoPath } from 'ts-toolbelt/out/Function/AutoPath';
// export class Text<O, P extends string = "">{
//     render() {
//         return <>
//             Text
//         </>
//     }
// }
// export const Text<O, P extends string = ""> = (p: {}) => {
//     return <>Text</>
// }
type NestedKeyOf<ObjectType extends object> =
    { [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
        ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
        : `${Key}`
    }[keyof ObjectType & (string | number)];
type InputProps<T extends unknown> = {
    name: T extends object ? NestedKeyOf<T> : string,
    // label: string | preact.FunctionalComponent | Component,
    state?: T,
    // setState: Function
    linkTo: any
}
export function Text<O extends object>(p: InputProps<O>) {
    return <></>
}
export function CheckName<O, P extends string = "">(o: O, p: AutoPath<O, P>) {

}
export function get<O extends object, P extends string>(object: O, path: AutoPath<O, P> | keyof O) {
}