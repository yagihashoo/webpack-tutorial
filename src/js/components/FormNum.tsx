import * as React from 'react'

export interface Props {
  name: string
  autofocus: boolean
}

export default class FormNum extends React.Component<Props, {}> {
  static defaultProps: Props = { name: '', autofocus: false }

  render() {
    return (
      <label>
        {this.props.name}:
        <input
          type="number"
          name={this.props.name}
          autoFocus={this.props.autofocus}
        />
        <style jsx>{`
          label {
            display: block;
          }

          input {
            margin-left: 1em;
          }
        `}</style>
      </label>
    )
  }
}
