import { Html } from 'elm-ts/lib/React'
import * as Cmd from 'elm-ts/lib/Cmd'
import { DefaultButton } from '@fluentui/react'

// --- Model
export type Model = {
  dice: number | null
}

export const init: [Model, Cmd.Cmd<Msg>] = [{ dice: null }, Cmd.none]

// --- Messages
export type Msg = { type: 'StartRandomValue' } | { type: 'Dice'; value: number }

// --- Update
export const update = (msg: Msg, model: Model): [Model, Cmd.Cmd<Msg>] => {
  switch (msg.type) {
    case 'StartRandomValue':
      return [model, Cmd.none]
    case 'Dice':
      return [model, Cmd.none]
  }
}

// --- View
export const view = (model: Model): Html<Msg> => {
  return dispatch => <div>Dice</div>
}
