import React, { Component } from 'react'
import spinner from './spinner.gif'

export default class LoadSpinner extends Component {
  render() {
    return (
      <div className='text-center'>
            <img className="my-3" src={spinner} alt="spinner" />
      </div>
    )
   


  }
}



