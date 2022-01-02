import { FormTestApp } from './form'
import { LinkedText } from '../../../src/form/sandbox/linkedInput';
import { CtxForm, Text } from '../../../src/form/sandbox/contextForm';
import { Tabs } from '../../../src/components/tabs';
import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';
export function App() {
  let [state, setState] = useState<{
    test1: '',
    test: ''
  }>({} as any)
  // let [state, setState] = [{}, (s: any) => ({ ...s })]
  function submit(e: any) {
    console.log(e, state)
  }
  return (
    <>
      <Tabs>
        <FormTestApp label="Old Style?" />
        <div label="New Style?">
          <pre>{JSON.stringify(state, null, '\t')}</pre>
          <LinkedText label="test1" name="test1" setState={setState} state={state} />
          <LinkedText label="test" name="test" setState={setState} state={state} />

          <CtxForm state={state} setState={setState} onSubmit={submit}>

            <Text label="Test2" name="test2" />
            <button>Submit</button>
          </CtxForm>
        </div>
      </Tabs>
    </>
  )
}
