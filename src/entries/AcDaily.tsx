import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AcDaily from '../projects/AcDaily'

const id = 'react--acDaily--root'
const rootElement = document.createElement('DIV')
rootElement.id = id
if (!document.getElementById(id)) {
  document.body.append(rootElement)
}
// New as of React v18.x
const root = createRoot(rootElement!)

root.render(
  <StrictMode>
    <AcDaily />
  </StrictMode>
)