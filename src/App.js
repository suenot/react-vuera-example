/* eslint-disable import/first */
import React from 'react'

import { observer } from 'mobx-react'
import MyVueComponent from './MyVueComponent.vue'
import MyReactComponent from './MyReactComponent.js'

@observer
class App extends React.Component {
  render() {
    return (
      <div>
        <MyReactComponent />
        <MyVueComponent message='Hello from Vue!' />
        {/* <MyVueComponent /> */}
      </div>
    )
  }
}

export default App
