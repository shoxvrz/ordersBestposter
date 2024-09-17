
import './SearchBar.scss'

const SearchBar = () => {
  return (
    <div className='searchBar'>
        <input type="text" placeholder='Buyurtma id raqamini kiriting...'/>
        <button>Qidirish</button>
    </div>
  )
}

export default SearchBar