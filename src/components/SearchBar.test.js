import SearchBar from './SearchBar'
import { render, fireEvent } from '@testing-library/react'
import mockData from '../../__mocks__/mockData'

describe("SearchBar", () => {
    describe('when the search button is clicked', () => {
        let searchFnMock;
        let button;
        let searchInput;
        let searchResults

        beforeEach(() => {
            searchFnMock = jest.fn()
            const { getByRole } = render(<SearchBar searchFn={searchFnMock} searchResults={searchResults} />)
            button = getByRole("button")
            searchInput = getByRole('textbox')
        })

        beforeAll(() => {
            searchResults = mockData
        })

        it('calls the searchFn prop onSubmit', () => {
            fireEvent.click(button)
            expect(searchFnMock).toHaveBeenCalled()
        })

        it('calls the seachFn prop onSubmit with input value', () => {
            const searchQuery = 'Sansevieria'
            fireEvent.change(searchInput, {target: {value: searchQuery}})
            fireEvent.click(button)
            expect(searchFnMock).toHaveBeenCalledWith(
                searchQuery,
                0,
                searchResults.sortBy,
                searchResults.filterStr
            )
        })

        it('clears the input text onSubmit', () => {
            fireEvent.click(button)
            expect(searchInput.value).toBe('')
        })

    })
})