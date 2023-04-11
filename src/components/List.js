import { Pagination } from "@mui/material"
import { useState } from 'react'
import Card from "./Card"
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'


export default function List(props) {

    const searchResultElements = props.searchResults.hits.map(h => {
        return <Card key={h.objectID} plant={h} />
    })

    const [page, setPage] = useState(1)

    function handleChange(event, value) {
        props.searchFn(
            props.searchResults.query, 
            // Algolia's pagination is zero-indexed, which is why
            // I'm substracting 1 from `value`.
            value - 1,
            props.searchResults.sortBy,
            props.searchResults.filterStr
        )
        setPage(value)
    }

    return (
        <div>
            <div className="flex justify-center">
            <ResponsiveMasonry
                className="w-full"
                columnsCountBreakPoints={{0: 1, 600: 2, 900: 3, 1200: 5}}
            >
                <Masonry gutter='13px'>
                    {searchResultElements}
                </Masonry>
            </ResponsiveMasonry>
            </div>
            <div className="flex justify-center my-4 mb-2">
                <Pagination 
                    count={props.searchResults.nbPages}
                    page={page}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}