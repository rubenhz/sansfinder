import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SortOptions(props) {

    const [sort, setSort] = useState('relevance')
    const [priceRange, setPriceRange] = useState('Any')

    function handleChangeSort(event) {
        props.searchFn(
            props.searchResults.query,
            props.searchResults.page,
            event.target.value,
            priceRange === 'Any' ? '' : priceRange
            )
        setSort(event.target.value)
    }

    function handleChangePriceRange(event) {
        props.searchFn(
            props.searchResults.query,
            props.searchResults.page,
            sort,
            // "Any" is not a valid value for Algolia's search function,
            // but an empty string is, showing all prices.
            event.target.value === 'Any' ? '' : event.target.value
        )
        setPriceRange(event.target.value)
    }

    return (
        <div className="flex gap-2 text-sm">
            
            <FormControl size='small' sx={{minWidth: 100}}>
                <InputLabel id="sort-select-label">Sort By</InputLabel>
                <Select
                    labelId="sort-select-label"
                    id="sort-select"
                    data-testid="sort-select"
                    value={sort}
                    label="Sort By"
                    onChange={handleChangeSort}
                >
                    <MenuItem value={'relevance'}>
                        Relevance
                    </MenuItem>
                    <MenuItem value={'ascending'}>
                        Ascending
                    </MenuItem>
                    <MenuItem value={'descending'}>
                        Descending
                    </MenuItem>
                </Select>
            </FormControl>

            <FormControl size='small' sx={{minWidth: 100}}>
                <InputLabel id="price-range-select-label">Price Range</InputLabel>
                <Select
                    labelId="price-range-select-label"
                    id="price-range-select"
                    value={priceRange}
                    label="Price Range"
                    onChange={handleChangePriceRange}
                >
                    {/* These values correspond to Algolia filters for
                        the `price` property of the index items. */}
                    <MenuItem value={'Any'}>Any</MenuItem>
                    <MenuItem value={'price:0 TO 25'}>$0 - $25</MenuItem>
                    <MenuItem value={'price:25 TO 50'}>$25 - $50</MenuItem>
                    <MenuItem value={'price:50 TO 100'}>$50 - $100</MenuItem>
                    <MenuItem value={'price > 100'}>$100+</MenuItem>
                </Select>
            </FormControl>
            
        </div>
    )
}