import * as React from 'react'
import * as PropTypes from 'prop-types'

class FormNum extends React.Component {
  render() {
    return (
      <div>
        <label>
          {this.props.name}:
          <input
            type="number"
            name={this.props.name}
            autoFocus={this.props.autofocus}
          />
        </label>
        <style jsx>{`
          label {
            display: block;
          }

          input {
            margin-left: 1em;
          }
        `}</style>
      </div>
    )
  }
}

FormNum.propTypes = {
  name: PropTypes.string,
  autofocus: PropTypes.bool
}

FormNum.defaultProps = { name: '', autofocus: false }

export default FormNum
