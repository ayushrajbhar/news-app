import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import LoadingItems from './LoadingItems'
import Categories from './Categories'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const NewsContainer = (props) => {

    const [articles, setArticles] = useState([])
    // const [loading, setLoading] = useState(false)
    const [pageNo, setPageNo] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    NewsContainer.defaultProps = {
        country: 'in',
        pageSize: 15,
        category: 'general'
    }

    NewsContainer.propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    const updateNews = async () => {
        props.setProgress(0)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${pageNo}`
        // setLoading(true)
        props.setProgress(30)
        let data = await fetch(url)
        let parsedData = await data.json()
        props.setProgress(70)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        // setLoading(false)
        props.setProgress(100)
    }

    useEffect(() => {
        updateNews();
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${pageNo + 1}`
        // setLoading(true)
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setPageNo(pageNo + 1)
        // setLoading(false)
    }

    console.log(articles.length)
    console.log(totalResults)

    // const handlePrevious = async () => {
    //     props.setProgress(0)
    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${pageNo - 1}`
    //     setLoading(true)
    //     props.setProgress(30)
    //     let data = await fetch(url)
    //     let parsedData = await data.json()
    //     props.setProgress(70)
    //     setArticles(parsedData.articles)
    //     setPageNo(pageNo - 1)
    //     setLoading(false)
    //     props.setProgress(100)
    // }

    // const handleNext = async () => {
    //     props.setProgress(0)
    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${pageNo + 1}`
    //     setLoading(true)
    //     props.setProgress(30)
    //     let data = await fetch(url)
    //     let parsedData = await data.json()
    //     props.setProgress(70)
    //     setArticles(parsedData.articles)
    //     setPageNo(pageNo + 1)
    //     setLoading(false)
    //     props.setProgress(100)
    // }

    return (

        <div className="container my-3">
            <h1>The Latest News</h1>
            <Categories />
            {/* {loading && <LoadingItems />} */}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<LoadingItems />}>
                <div className="container d-flex align-items-center justify-content-center">
                    <div className="row d-flex align-items-center justify-content-center">
                        {articles.map((element) => {
                            return <div className='col-md-4' key={element.url}>
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} />
                            </div>

                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className="container pagination d-flex justify-content-between align-items-center my-5">
                <button disabled={pageNo <= 1} className="read-btn" onClick={handlePrevious}>&larr; Previous</button>
                <button disabled={pageNo + 1 > Math.ceil(totalResults / props.pageSize)} className="read-btn" onClick={handleNext}>Next &rarr;</button>
            </div> */}
        </div>
    )
}

export default NewsContainer
