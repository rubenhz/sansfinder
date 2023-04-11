import data from './algoliaSearchResponse.json'

// These extra properties are added to each response from
// an Algolia search.
const extraProperties = {
    sortBy: 'relevance',
    filterStr: ''
}

export default {...data, ...extraProperties}