import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Citaa from 'src/projects/Citaa'

const id = 'react--citaa--root'
const rootElement = document.createElement('DIV')
rootElement.id = id
if (!document.getElementById(id)) {
  document.body.append(rootElement)
}
// New as of React v18.x
const root = createRoot(rootElement!)

root.render(
  <StrictMode>
    <Citaa />
  </StrictMode>
)