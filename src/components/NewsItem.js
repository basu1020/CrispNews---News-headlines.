import React from 'react'

export default function NewsItem(props) {
    return (
        <>
            <div className="card mx-1 my-3" key={props.key} >
            <span className="badge bg-dark" style={{position:"absolute",right:"0px"}}>{props.source.name}</span>
                <img src={props.imgUrl?props.imgUrl:`https://i.stack.imgur.com/WeyM8.jpg`} className="card-img-top" alt='img' style={{maxHeight : '212px'}}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title.slice(0,90) + "..."}</h5>
                        <p className="card-text">{props.description?props.description.slice(0,90) + "...":"kuch nahi hai"}</p>
                        <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
                    </div>
            </div>
        </> 
    )
}

