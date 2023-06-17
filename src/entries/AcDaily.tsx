import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AcDaily from 'src/projects/AcDaily'
import { store } from 'src/store'
import { Provider } from 'react-redux'

const id = 'react--acDaily--root'
const rootElement = document.createElement('DIV')
rootElement.id = id
if (!document.getElementById(id)) {
  document.body.append(rootElement)
}
// New as of React v18.x
const root = createRoot(rootElement!)
const Node = () => (
  <Provider store={store}>
    <AcDaily />
  </Provider>
)

if (process.env.NODE_ENV != 'development') {
  root.render(<Node />)
} else {
  root.render(
    <StrictMode>
      <Node />
    </StrictMode>
  )
}
