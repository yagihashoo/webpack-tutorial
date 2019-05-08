import * as React from 'react'

export interface Props {
  value: string
}

export default class FormSubmit extends React.Component<Props, {}> {
  render() {
    return <input type="submit" value={this.props.value} />
  }
}
