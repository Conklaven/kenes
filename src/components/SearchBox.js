
const SearchBox = (props =>{
    return(
        <>
        <nav className="nav">
        Search <input type='text' onChange={props.searchItem}/>
    <img id="logo" src="https://1kur9t3xffe11yy9in1cqsuu-wpengine.netdna-ssl.com/wp-content/uploads/2020/08/cropped-Kenes-tours_Logo-WHITE-3-2048x803.png" height= "35px"/>
        </nav>
        </>
    )
})

export default SearchBox;