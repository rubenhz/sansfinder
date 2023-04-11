import { Route, Routes } from 'react-router-dom';
import useSearch from '../hooks/useSearch'
import Index from '../pages/Index';
import { useEffect } from 'react';
import About from '../pages/About';

function App() {

  const [searchResults, search] = useSearch()

  useEffect(() => {
    search('')
    // eslint-disable-next-line
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Index searchResults={searchResults} searchFn={search} />} />
      <Route path='/about' element={<About />} />
    </Routes>
  )
}

export default App;
