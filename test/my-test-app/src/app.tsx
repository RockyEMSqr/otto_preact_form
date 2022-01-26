import { FormTestApp } from './form'
import { LinkedText } from '../../../src/form/sandbox/linkedInput';
import { CtxForm, Text as CtxText } from '../../../src/form/sandbox/contextForm';
import { Tabs } from '../../../src/components/tabs';
import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';
import { Text } from '@emsquared/otto_preact_form';
import { linkTo } from '@emsquared/otto_preact_form/src/hooks';
export function App() {
  let [state, setState] = useState<{
    test1: '',
    test: '',
    tttteeesssttt: ''
  }>({} as any)
  let LT = linkTo(state, setState);
  // let [state, setState] = [{}, (s: any) => ({ ...s })]
  function submit(e: any) {
    console.log(e, state)
  }
  return (
    <>
      <Tabs>
        <div label="Old Style With name Autocomplete">
          <pre>{JSON.stringify(state)}</pre>
          <Text<typeof state> name="test1" linkTo={LT} />
          <Text<typeof state> name="test" linkTo={LT} />
          <Text<typeof state> name="tttteeesssttt" linkTo={LT} />
        </div>
        <FormTestApp label="Old Style?" />
        <div label="New Style?">
          <pre>{JSON.stringify(state, null, '\t')}</pre>
          <LinkedText label="test1" name="test1" setState={setState} state={state} />
          <LinkedText label="test" name="test" setState={setState} state={state} />

          <CtxForm state={state} setState={setState} onSubmit={submit}>

            <CtxText label="Test2" name="test2" />
            <button>Submit</button>
          </CtxForm>
        </div>
      </Tabs>
    </>
  )
}
