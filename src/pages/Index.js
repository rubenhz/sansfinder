import List from "../components/List";
import SearchBar from "../components/SearchBar";
import SortOptions from "../components/SortOptions";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Index(props) {

    return (
        <div className='bg-slate-200' data-testid='home-page'>
            <Header className='hidden md:flex px-3 container md:mx-auto' />
            <div className='px-3 md:px-0 mx-auto container md:hidden pt-3'>
                <SearchBar searchFn={props.searchFn} searchResults={props.searchResults} />
            </div>

            <div className="mt-16 container mx-auto">
                <h1 className="mx-2 text-[26px] font-semibold mb-3 tracking-wider text-slate-600">
                    Search Results
                </h1>
                <div className="mb-6 flex items-end gap-[13px] mx-2">
                    <SortOptions searchResults={props.searchResults} searchFn={props.searchFn} />
                    <div className="w-full hidden md:block">
                        <SearchBar searchFn={props.searchFn} searchResults={props.searchResults} />
                    </div>
                </div>
                <List searchResults={props.searchResults} searchFn={props.searchFn} />
            </div>

            <Footer />

        </div>
    )
}