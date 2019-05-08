import * as React from 'react'
import * as ReactDOM from 'react-dom'
import CalcForm from './components/CalcForm'

export interface Props {}

class Layout extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <CalcForm />
      </div>
    )
  }
}

const app = document.getElementById('app')
ReactDOM.render(<Layout />, app)
