import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function News(props) {

    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [hasmore, sethasmore] = useState(false)
    const [totalResults, setTotalResults] = useState(0)
    const [date] = useState(new Date())

    const update = async () => {
        let API = `https://newsapi.org/v2/everything?&qInTitle=${props.input}&from=${date.getFullYear()}-${date.getMonth()}-${date.getDate()}&apiKey=${props.apiKey}&pageSize=20&page=`
        let url = `${API}${page}`
        console.log(url)
        // console.log(url)
        let data = await fetch(url)
        let parsedData = await data.json()
        sethasmore(true)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
    }

    useEffect(() => {
        update()
    }, [])

    const fetchMore = async () => {
        setPage(page + 1)
        if (page < 5) {
            let url = `${props.api}${page + 1}`
            console.log(url)
            let data = await fetch(url)
            let parsedData = await data.json()
            setArticles(articles.concat(parsedData.articles))
            setTotalResults(parsedData.totalResults)
            sethasmore(true)
        }
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