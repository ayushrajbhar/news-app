import React from 'react'

const NoteItem = (props)=> {

    let {title,description,imageUrl,newsUrl,date} = props

    return (
        <div className="card my-2">
        <img src={imageUrl===null || imageUrl==="null"?require("./alt.png"):imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title==="null"?"":title.length>90?title.slice(0,90)+"...":title}</h5>
          <p className="card-text">{description==="null" || description===null?"Read the complete article to know more.":description.length>160?description.slice(0,160)+"...":description}</p>
          <p className="card-text"><small className="text-body-secondary">Published on {new Date(date).toGMTString().slice(0,16)}</small></p>
          <a rel="noreferrer" href={newsUrl} target='_blank' className="read-btn btn btn-sm">Read more</a>
        </div>
      </div>
    )
}

export default NoteItem
