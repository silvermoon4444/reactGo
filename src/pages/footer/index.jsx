import React from 'react'

export default function Index(props) {
    const {count ,className}=props
    return (
        <div className={className}>
            已选择：<span>{count}个</span>
        </div>
    )
}
