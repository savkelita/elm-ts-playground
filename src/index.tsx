import { initializeIcons } from '@fluentui/font-icons-mdl2'
import * as ElmReact from 'elm-ts/lib/React'
import { render } from 'react-dom'
import * as App from './counter'

initializeIcons()

const main = ElmReact.program(App.init, App.update, App.view)
ElmReact.run(main, dom => render(dom, document.getElementById('root')!))
