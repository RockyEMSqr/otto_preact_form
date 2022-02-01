import { Text } from '../index';
type AType = {
    x: number,
    y: number,
    z: {
        x: number,
        y: number,
        atype: AType
    }
};
let xxx : AType = {} as AType;
const x = () => {
    return <>
        <Text name="get" />
        <Text<typeof xxx> name="z.atype.z.x" />
    </>
}