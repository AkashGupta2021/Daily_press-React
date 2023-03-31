import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, date } = this.props;
    return (
      <>
        <div className='my-3'>
          <div className="card" >
            <img className="card-img-top" src={!imageUrl ? "https://image.cnbcfm.com/api/v1/image/107207719-1678729348624-gettyimages-1248149767-FDIC_HQ.jpeg?v=1679246541&w=1920&h=1080" : imageUrl} alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text" ><small className="text-primary">By {author ? author : "Unknown"} on {new Date(date).toGMTString()} </small></p>
              <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>
        </div>

      </>
    )
  }
}

export default NewsItem