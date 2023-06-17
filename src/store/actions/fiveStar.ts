import {
  INIT_FIVE_STAR,
  FIVE_STAR__API_REQUEST,
  FIVE_STAR__API_FAILURE,
  FIVE_STAR__API_SUCCESS
} from "src/store/types"

export const initFiveStar = (value: string) => ({
  type: INIT_FIVE_STAR,
  payload: {
    value
  }
})

export const fiveStarApiRequest = () => ({
  type: FIVE_STAR__API_REQUEST
})

export const fiveStarApiFailure = () => ({
  type: FIVE_STAR__API_FAILURE,
  payload: {
    fiveStar: {}
  }
})

export const fiveStarApiSuccess = (fiveStar: any) => ({
  type: FIVE_STAR__API_SUCCESS,
  payload: {
    fiveStar
  }
})
