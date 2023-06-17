import { useEffect } from 'react'
import { useAppDispatch } from 'src/hooks/redux'
import {
  initFiveStar,
  fiveStarApiRequest
} from 'src/store/actions'
const FiveStar = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(initFiveStar('local dispatch'))
    dispatch(fiveStarApiRequest())
  }, [])
  return (
    <div>Five Star</div>
  )
}

export default FiveStar