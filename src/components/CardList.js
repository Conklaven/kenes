import React, {Component} from 'react';
import Card from './Card';
import SearchBox from './SearchBox';


class CardList extends Component {
    constructor() {
        super();
        this.state = {
            arr:[],
            txt:''
        }
    }
    componentDidMount() {
        fetch('http://kenes-tours.herokuapp.com/restaurants')
    .then(response => response.json())
    .then(data =>{
      this.setState({arr:data})
    })
    }
  
    searchItem =(e) => {
        // console.log(e)
this.setState({txt:e.target.value})
console.log(e.target.value)
    }

    newPage =(e) => {
        console.log(e)
        window.open(`./restaurant.html?${e.target.id}`);
    }
    render(){
        const {arr,txt} = this.state;
        const filterArr = arr.filter(item => {
            // console.log(item)
            return item.restaurant_name.toLowerCase().includes(txt.toLowerCase());
        })
        return(
           
            <>
        <SearchBox  searchItem={this.searchItem}/>
                {
                    filterArr.map((item, i) =>{
                      return <Card user={item} newPage={this.newPage}/>
                    })
                  }

            </>
        )
    }
}

export default CardList;