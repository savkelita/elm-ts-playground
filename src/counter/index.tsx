import { Html } from 'elm-ts/lib/React'
import * as Cmd from 'elm-ts/lib/Cmd'
import { DefaultButton } from '@fluentui/react'

// --- Model
export type Model = {
  counter: number
}

export const init: [Model, Cmd.Cmd<Msg>] = [{ counter: 0 }, Cmd.none]

// --- Messages
export type Msg = { type: 'Increment' }

// --- Update
export const update = (msg: Msg, model: Model): [Model, Cmd.Cmd<Msg>] => {
  switch (msg.type) {
    case 'Increment':
      return [model, Cmd.none]
  }
}

// --- View
export const view = (model: Model): Html<Msg> => {
  return dispatch => <div>Counter</div>
}
