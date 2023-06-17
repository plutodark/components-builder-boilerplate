import _get from 'lodash/get'
import {
  INIT_FIVE_STAR,
  FIVE_STAR__API_REQUEST,
  FIVE_STAR__API_FAILURE,
  FIVE_STAR__API_SUCCESS
} from 'src/store/types'
const initialState = {
  value: '',
  fetching: false,
  fiveStar: null
}
const reducer = (state = initialState, action: any) => {
  const type = _get(action, 'type', '')
  switch(type) {
    case INIT_FIVE_STAR: {
      const value = _get(action, 'payload.value')
      return {
        ...state,
        ...{
          value
        }
      }
    }
    case FIVE_STAR__API_REQUEST: {
      return {
        ...state,
        ...{
          fetching: true
        }
      }
    }
    case FIVE_STAR__API_FAILURE: {
      return {
        ...state,
        ...{
          fetching: false,
          fiveStar: null
        }
      }
    }
    case FIVE_STAR__API_SUCCESS: {
      return {
        ...state,
        ...{
          fetching: false,
          fiveStar: _get(action, 'payload.fiveStar')
        }
      }
    }
    default:
      return state
  }
}

export default reducer