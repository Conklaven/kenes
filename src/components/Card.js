import './Card.css'
const Card = (props) => {
    const {user} = props;
    const {restaurant_id,email,restaurant_name,city} = props.user;
    const mail = `mailto:${email}`
    return(
        <>

    <div className='tc white grow bg-dark-red br3 pa3 ma3 dib shadow-5'>
        <h1>{restaurant_name}</h1>
        <h4>{city}</h4>
        <a href={mail}>{email}</a>
    </div>
        </>
    )
}


export default Card