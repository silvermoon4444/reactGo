import React, { Component } from 'react'

export default class Index extends Component {

    staChange=(e)=>{
        const {onChange} =this.props
        onChange(e.target.id,e.target.checked)
    }
    render() {
        const {className,id,children} =this.props
        return (
            <div className={className}>
          <input
            type="checkbox"
            id={id}
            onChange={this.staChange}
          />
          <span>{children}</span>
        </div>
        )
    }
}
