const SearchBox = (props =>{
    return(
        <>
        <h4>Search</h4>
        <div>
        <input type='text' onChange={props.searchItem}/>
        </div>
        </>
    )
})

export default SearchBox;