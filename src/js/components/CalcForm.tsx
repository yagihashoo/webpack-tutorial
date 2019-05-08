import * as React from 'react'
import FormNum from './FormNum'
import FormSubmit from './FormSubmit'
import axiosBase from 'axios'

const axios = axiosBase.create({
  baseURL: 'https://sqli.moe',
  responseType: 'json'
})

export interface Props {}

export default class CalcForm extends React.Component<Props, {}> {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormNum name="a" autofocus={true} />
        <FormNum name="b" />
        <FormSubmit value="calc" />
      </form>
    )
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    axios.get('/add.php')
  }
}
