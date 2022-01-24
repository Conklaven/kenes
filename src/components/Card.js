import './Card.css'
const Card = (props) => {
    const {user} = props;
    const {restaurant_id,email,restaurant_name,city} = props.user;
    const mail = `mailto:${email}`
    // console.log(this.props.newPage)

    return(
        <>

    <div className='tc white grow bg-dark-red br3 pa3 ma3 dib shadow-5' onClick={props.newPage} id={restaurant_name}>
        <h1 id={restaurant_name}>{restaurant_name}</h1>
        <h4 id={restaurant_name}>{city}</h4>
        <a id={restaurant_name} href={mail}>{email}</a>
    </div>
        </>
    )
}


export default Card