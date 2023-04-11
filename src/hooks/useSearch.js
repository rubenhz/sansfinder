import { useState } from 'react'
import algoliasearch from 'algoliasearch'

const useSearch = () => {
    // Use the algolia search service to retrieve data from
    // an Algolia index.
    
    const [resultsData, setResultsData] = useState(null)

    const client = algoliasearch(
        process.env.REACT_APP_ALGOLIA_APP_ID,
        process.env.REACT_APP_ALGOLIA_API_KEY
      )

    function search(query, page=0, sortBy='relevance', filterStr='') {
        let index;
        switch(sortBy) {
            case 'relevance':
                index = client.initIndex(
                    process.env.REACT_APP_ALGOLIA_INDEX
                )
                break
            case 'ascending':
                index = client.initIndex(
                    process.env.REACT_APP_ALGOLIA_INDEX_ASC
                )
                break
            case 'descending':
                index = client.initIndex(
                    process.env.REACT_APP_ALGOLIA_INDEX_DES
                )
                break
            default:
                index = client.initIndex(
                    process.env.REACT_APP_ALGOLIA_INDEX
                )
        }
        index.search(query, {page: page, filters: filterStr})
            .then(data => {
                const extraProperties = {
                    filterStr,
                    sortBy
                }
                setResultsData({...data, ...extraProperties})
            })
    }

    return [resultsData ? resultsData : {hits: []}, search]
}

export default useSearch
