import { Html } from 'elm-ts/lib/React'
import * as Cmd from 'elm-ts/lib/Cmd'
import { Either } from 'fp-ts/lib/Either'
import { TextField, DefaultButton } from '@fluentui/react'
import { send, HttpError } from 'elm-ts/lib/Http'
import { fetchGif, ApiGif } from './api'

const TOPIC = 'CAT'

// --- Model
export type Model = {
  data: ApiGif | null
  topic: string
}

export const init: [Model, Cmd.Cmd<Msg>] = [{ data: null, topic: '' }, Cmd.none]

// --- Messages
export type Msg =
  | { type: 'FetchGif'; data: Either<HttpError, ApiGif> }
  | { type: 'ChangeTopic'; value: string }
  | { type: 'StartFetch' }

// --- Update
export const update = (msg: Msg, model: Model): [Model, Cmd.Cmd<Msg>] => {
  switch (msg.type) {
    case 'StartFetch':
      return [model, Cmd.none]
    case 'FetchGif': {
      return [model, Cmd.none]
    }
    case 'ChangeTopic':
      return [model, Cmd.none]
  }
}

// --- View
export const view = (model: Model): Html<Msg> => {
  return dispatch => <div>Giphy</div>
}
