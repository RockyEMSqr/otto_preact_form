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
const x = () => {
    return <>
        <Text<AType> name="z.x" />
    </>
}