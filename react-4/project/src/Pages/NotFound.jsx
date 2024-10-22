import React, { Component } from 'react'

export default class NotFound extends Component {
  render() {
    return (
      <div className='alert alert-danger m-5 '>
        <div className="container text-bg-black p-5">
            <h1>404 Not Found</h1> 
        </div>
      </div>
    )
  }
}
