import Searchbar from "./Searchbar"

const Header = () => {
    return (
        <div className="flex justify-between">
            <h1 className="font-bold text-3xl">Discover Events</h1>
            <Searchbar />
        </div>

    )
}

export default Header
