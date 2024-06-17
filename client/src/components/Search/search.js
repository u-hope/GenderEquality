import './search.css';

const Search = ({setSearch})=>{
    return(
        <div className='searchMain'>
        <input input
            type='text' 
            className='search' 
            placeholder='Search' 
            onChange={({currentTarget: input})=>setSearch(input.value)}/>
        </div>
    
    )
}
export default Search;