import { useGlobalContext } from './context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const handleSubmit = (event) => {
    event.preventDefault()
    const searchValue = event.target.elements.search.value
    if (!searchValue) return
    // console.log(searchValue)
    setSearchTerm(searchValue)
  }
  return (
    <section>
      <h1 className='title'>unsplash images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          className='form-input search-input'
          type='text'
          name='search'
          placeholder='cat'
        />
        <button type='submit' className='btn'>
          search
        </button>
      </form>
    </section>
  )
}
export default SearchForm
