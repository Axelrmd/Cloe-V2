import { root } from '@lynx-js/react'

import { App } from './App.js'
import { MemoryRouter } from 'react-router'

root.render(
  <MemoryRouter>
    <App/>
  </MemoryRouter>
)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
