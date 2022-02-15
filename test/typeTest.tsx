import { FDate, Text } from '../index';
type AType = {
    x: number,
    y: number,
    z: {
        x: number,
        y: number,
        atype: AType,
        d:Date
    },
    d:Date
};
let xxx : AType = {} as AType;
const x = () => {
    return <>
        <Text name="get" />
        <Text<typeof xxx> name="z.atype.z.x" />
        <Text<AType> name="d" />
        <Text<AType> name="z.d" />
        <FDate value={new Date().valueOf()} />
    </>
	// push test 1000 
}