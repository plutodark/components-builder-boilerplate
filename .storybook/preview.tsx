import type { Preview } from "@storybook/react"
import { Provider as StoreProvider } from 'react-redux'
import { store } from '../src/store'
import React from 'react'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <StoreProvider store={store}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </StoreProvider>
    ),
  ],
}

export default preview;
