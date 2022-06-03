import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function News(props) {

    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [hasmore, sethasmore] = useState(false) 
    const [totalResults, setTotalResults] = useState(0) 
    // const [title, settitle] = useState(document.title) 

    const update = async () => {
        let url = `${props.api}${page}`
        // console.log(url)
        let data = await fetch(url)
        let parsedData = await data.json()
        sethasmore(true)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
    }

    useEffect(() => {
        // document.title = `${props.parameter.charAt(0).toUpperCase() + props.parameter.slice(1)} - CrispNews`
        update()
        //  eslint-disable-next-line
    }, [])

    const fetchMore = async () => {
        setPage(page + 1)
        let url = `${props.api}${page + 1}`
        console.log(url)
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        sethasmore(true)
    }

        return (
            <>
                <div className="container my-3">
                    <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                        <h1 className='my-1'>Crisp News - Top headlines</h1>
                    </div>
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMore}
                        hasMore={hasmore}
                        loader={""}>
                        <div className="row">
                            {articles.map(element => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem source={element.source} imgUrl={element.urlToImage} title={element.title} description={element.description} url={element.url} />
                                </div>
                            })}
                        </div>
                    </InfiniteScroll>
                </div>
            </>
        )
}
