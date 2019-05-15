import * as React from 'react'
import FormNum from './FormNum'
import FormSubmit from './FormSubmit'
import axiosBase from 'axios'

const axios = axiosBase.create({
  baseURL: 'https://sqli.moe',
  responseType: 'json'
})

export default class CalcForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormNum name="a" autofocus={true} />
        <FormNum name="b" />
        <FormSubmit value="calc" />
      </form>
    )
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/add.php', { a: 1, b: 2 }).then(res => {
      alert(res.data.result)
    })
  }
}
