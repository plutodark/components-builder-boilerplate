import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
type Props = {
  id: string,
  component: ReactNode
}
const Portal = ({ id, component }: Props) => {
  const ele = document.getElementById(id)
  if (ele) {
  return (<>{
      createPortal(component, ele)
    }</>)
  }
}
export default Portal
