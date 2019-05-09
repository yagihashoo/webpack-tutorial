import * as React from 'react'
import * as PropTypes from 'prop-types'

class FormSubmit extends React.Component {
  render() {
    return <input type="submit" value={this.props.value} />
  }
}

FormSubmit.propTypes = {
  value: PropTypes.string
}

export default FormSubmit
