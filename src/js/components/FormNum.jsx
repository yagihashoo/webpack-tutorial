import * as React from 'react'
import * as PropTypes from 'prop-types'

class FormNum extends React.Component {
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

FormNum.propTypes = {
  name: PropTypes.string,
  autofocus: PropTypes.boolean
}

FormNum.defaultProps = { name: '', autofocus: false }

export default FormNum
