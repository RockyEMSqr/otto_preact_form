import { render } from 'preact'
import { App } from './app'
import './index.css'
import {hello} from 'otto_preact_form';
hello();
render(<App />, document.getElementById('app')!)
