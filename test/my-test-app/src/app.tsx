import { FormTestApp } from './form'
import { LinkedText } from '../../../src/form/sandbox/linkedInput';
import { CtxForm, Text as CtxText } from '../../../src/form/sandbox/contextForm';
import { Tabs } from '../../../src/components/tabs';
import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';
// import { CheckName, get, Text } from '@emsquared/otto_preact_form/src/form/sandbox/textTest';
import { Text, Password, Textarea, Select, Address, SimpleModal } from '@emsquared/otto_preact_form';
import { useLinkTo } from '@emsquared/otto_preact_form/src/hooks';
import { StateType } from './types'
import { FDate } from '../../../src/form/datetime';
import { Choosy } from '../../../src/form/choosy';
import '../../../src/form/style/_choosy.scss'
export function App() {
  let [state, setState] = useState<{
    test1: '',
    test: '',
    tttteeesssttt: '',
    p: { x: 1, y: 1, z: 1 }
  }>({} as any)
  let [s1, ss1] = useState<StateType>({} as StateType);
  let idks: StateType = {
    a: 'asdf'
  } as StateType;
  let LT = useLinkTo(state, setState);
  let LTs1 = useLinkTo(s1, ss1);
  // let [state, setState] = [{}, (s: any) => ({ ...s })]
  function submit(e: any) {
    console.log(e, state)
  }
  // type User = {
  //   name: string
  //   friends: User[]
  // }
  // let user: User = {} as User;
  // type NestedKeyOf<ObjectType extends object> =
  //   { [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
  //     ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
  //     : `${Key}`
  //   }[keyof ObjectType & (string | number)];
  // type kofu = keyof StateType;
  // let k: kofu = 'c';
  // type nkofu = NestedKeyOf<StateType>;
  // let nk: nkofu = 'c.b';
  // CheckName(user, "adadfffdsa");
  // CheckName(idks, "e");
  // get(idks, "z")
  return (
    <>
      <Tabs>
        <div label="Old Style With name Autocomplete">
          <Choosy label="Choosy" items={[1,2,3,4,5,6].map(x=>({name:x, value:x}))}/>
          <SimpleModal useStyle>
            Hello
          </SimpleModal>
          <pre>STATE:{JSON.stringify(state)}</pre>
          <pre>S1:{JSON.stringify(s1)}</pre>
          <FDate value={new Date().valueOf()} />
          <Text<StateType> name="a" linkTo={LTs1} />
          <Text<typeof state> name="p.x" linkTo={LT} />
          <Password<StateType> name="a" linkTo={LTs1} />
          <Textarea<StateType> name="c.b" linkTo={LTs1} />
          <Select<StateType> name="c.a" linkTo={LTs1} items={[1, 2, 3].map(x => ({ name: x, value: x }))} />
          <Address<StateType> name="address" linkTo={LTs1} />
          <Address<StateType> name="contact" linkTo={LTs1} />
          {/* <Text<typeof state> name="test1" linkTo={LT} /> */}
          {/* <Text<typeof state> name="tttteeesssttt" linkTo={LT} /> */}
        </div>
        <FormTestApp label="Old Style?" />
        <div label="New Style?">
          <pre>{JSON.stringify(state, null, '\t')}</pre>
          <LinkedText label="test1" name="test1" setState={setState} state={state} />
          <LinkedText label="test" name="p.x" setState={setState} state={state} />
          <LinkedText label="ts1" name="a" setState={ss1} state={s1} />

          <CtxForm state={state} setState={setState} onSubmit={submit}>

            <CtxText label="Test2" name="test2" />
            <button>Submit</button>
          </CtxForm>
        </div>
      </Tabs>
    </>
  )
}
