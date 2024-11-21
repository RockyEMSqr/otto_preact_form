import { FormTestApp } from './form'
import { LinkedText } from '../../../src/form/sandbox/linkedInput';
import { CtxForm, Text as CtxText } from '../../../src/form/sandbox/contextForm';
import { Tabs } from '../../../src/components/tabs';
import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';
// import { CheckName, get, Text } from '@emsquared/otto_preact_form/src/form/sandbox/textTest';
import { Text, Password, Textarea, Select, Address } from '../../../';
import { SimpleModal } from '../../../src/components/modal';
import { useLinkTo } from '../../../src/hooks';
import { StateType } from './types'
import { FDate, FDateTime } from '../../../src/form/datetime';
import { Choosy } from '../../../src/form/choosy';
import {RichTextEditor} from '../../../src/form/richTextEditor'
import '../../../src/form/style/_choosy.scss'
export function App() {
  let [state, setState] = useState<{
    test1: string,
    test: '',
    tttteeesssttt: '',
    p: { x: 1, y: 1, z: 1 }
  }>({test1:'FOOFOOFOO'} as any)
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

  const subjects = [
    {
        "_id": "5d110fef9fdbd4b7717977a4",
        "name": "Accordion",
        "legacyId": 44
    },
    {
        "_id": "579ad4474ac51cc00dfb2b6d",
        "legacyId": 33,
        "name": "Banjo",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b4e",
        "legacyId": 1,
        "name": "Baritone",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b4f",
        "legacyId": 2,
        "name": "Bass",
        "__v": 0
    },
    {
        "_id": "651d86367dcf00079a8e641d",
        "name": "Bass Clarinet"
    },
    {
        "_id": "579ad4474ac51cc00dfb2b50",
        "legacyId": 3,
        "name": "Bass Guitar",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b51",
        "legacyId": 4,
        "name": "Bassoon",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b52",
        "legacyId": 5,
        "name": "Brass",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b53",
        "legacyId": 7,
        "name": "Cello",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b54",
        "legacyId": 8,
        "name": "Chorus",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b55",
        "legacyId": 9,
        "name": "Clarinet",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b56",
        "legacyId": 10,
        "name": "Composition",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b57",
        "legacyId": 11,
        "name": "Drums",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b73",
        "legacyId": 41,
        "name": "Euphonium",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b75",
        "legacyId": 43,
        "name": "Fiddle",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b58",
        "legacyId": 12,
        "name": "Flute",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b6f",
        "legacyId": 36,
        "name": "French Horn",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b59",
        "legacyId": 13,
        "name": "Guitar",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b5a",
        "legacyId": 14,
        "name": "Harmonica",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b5b",
        "legacyId": 15,
        "name": "Horns",
        "__v": 0
    },
    {
        "_id": "5d1110109fdbd4b7717977e7",
        "name": "Little Music Makers",
        "legacyId": 45
    },
    {
        "_id": "579ad4474ac51cc00dfb2b6c",
        "legacyId": 32,
        "name": "Mandolin",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b5c",
        "legacyId": 16,
        "name": "Music Education",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b5d",
        "legacyId": 17,
        "name": "Music In Your School Specialist",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b71",
        "legacyId": 38,
        "name": "Music Production",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b72",
        "legacyId": 40,
        "name": "Music Theory",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b5e",
        "legacyId": 18,
        "name": "Music Therapy",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b5f",
        "legacyId": 19,
        "name": "Oboe",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b60",
        "legacyId": 20,
        "name": "Organ",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b61",
        "legacyId": 21,
        "name": "Percussion",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b62",
        "legacyId": 22,
        "name": "Piano",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b6e",
        "legacyId": 34,
        "name": "Recorder",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b63",
        "legacyId": 23,
        "name": "Saxophone",
        "__v": 0
    },
    {
        "_id": "5d602d7d54119e77ba6a4623",
        "name": "Singing",
        "legacyId": 46
    },
    {
        "_id": "579ad4474ac51cc00dfb2b64",
        "legacyId": 24,
        "name": "Strings",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b65",
        "legacyId": 25,
        "name": "Trombone",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b66",
        "legacyId": 26,
        "name": "Trumpet",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b67",
        "legacyId": 27,
        "name": "Tuba",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b70",
        "legacyId": 37,
        "name": "Ukulele",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b68",
        "legacyId": 28,
        "name": "Viola",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b69",
        "legacyId": 29,
        "name": "Violin",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b6a",
        "legacyId": 30,
        "name": "Voice",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b6b",
        "legacyId": 31,
        "name": "Woodwinds",
        "__v": 0
    },
    {
        "_id": "579ad4474ac51cc00dfb2b74",
        "legacyId": 42,
        "name": "mellophone",
        "__v": 0
    }
]
  return (
    <>
      <Tabs>
        <div label="Choosy">
          <Choosy items={subjects.map(s=>({name:s.name, value:s._id}))} label="Subject(s)" value={["579ad4474ac51cc00dfb2b50"]}/>
        <Choosy label="Choosy" name="foo" value={1} items={['Violin', "Viola", 'Vandolin', 'Voice', 'Vangaurd', 1, 2, 3, 4, 5, 6, 'asdf', '3456t4gf', 'asdf4rgfasert', 'asdfaw345ewf'].map(x => ({ name: x, value: x }))} />
        <Choosy label="Choosy" name="foo"  items={['Violin', "Viola", 'Vandolin', 'Voice', 'Vangaurd', 1, 2, 3, 4, 5, 6, 'asdf', '3456t4gf', 'asdf4rgfasert', 'asdfaw345ewf'].map(x => ({ name: x, value: x }))} />

        </div>
      <div label="Rich Text Editor Set State Later">
        <FDateTime maxDate={new Date()} maxTime={new Date()} />
        <RichTextEditor linkTo={LT} name="test1"/>
        <button onClick={e=>setState(x=>({...x, test1:'asdfasdfasdf'}))}>Set Test1 in State To Something</button>
        <button onClick={e=>setState(x=>({...x, test1:''}))}>Clear</button>
      </div>
      <div label="Read only">
        <Select disabled={true} readOnly={true} readonly={true} label="Select" addDefaultBlankToItems items={[111111,222222,333333,4444444].map(x=>({name:x, value:x}))}/>
        </div>
        <div label="Old Style With name Autocomplete">
          <Choosy label="Choosy" name="foo" value={1} items={[1, 2, 3, 4, 5, 6, 'asdf', '3456t4gf', 'asdf4rgfasert', 'asdfaw345ewf'].map(x => ({ name: x, value: x }))} />
          <SimpleModal buttonTabIndex={-1} useStyle label={<span>Hi</span>}>
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
