import { fireEvent, render } from "@testing-library/react";
import List from "./List";
import mockData from "../../__mocks__/mockData";

describe('List component', () => {
    const searchFnMock = jest.fn()
    let searchResults;

    beforeAll(() => {
        searchResults = mockData
    })

    it('calls searchFn with the current query, page, and with sortBy, and filterStr', () => {
        const { getByText } = render(<List searchFn={searchFnMock} searchResults={searchResults} />)
        const page1Button = getByText('1')
        fireEvent.click(page1Button)
        // We expect 0 when the user clicks 1 because Algolia
        // is zero-indexed.
        expect(searchFnMock).toHaveBeenCalledWith(
            searchResults.query,
            0,
            searchResults.sortBy,
            searchResults.filterStr
        )
    })

    it('calls searchFn with the current query and selected page for the last page', () => {
        const { getByText } = render(<List searchFn={searchFnMock} searchResults={searchResults} />)
        const lastPageButton = getByText('3')
        fireEvent.click(lastPageButton)
        expect(searchFnMock).toHaveBeenCalledWith(
            searchResults.query,
            2,
            searchResults.sortBy,
            searchResults.filterStr
        )
    })

    it('renders the correct number of Cards', () => {
        const { getAllByTestId } = render(<List searchFn={searchFnMock} searchResults={searchResults} />)
        const cards = getAllByTestId('card')
        expect(cards.length).toBe(searchResults.hitsPerPage)
    })
})