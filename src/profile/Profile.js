import PropTypes from 'prop-types';
const Profile=(props)=>{
    
    return(<>
        <h3>{props.fullName}</h3>
        <p>{props.bio}</p>
        <h4>{props.profession}</h4>
        {props.children}
        <button onClick={props.onClick}><a href="#">button</a></button>
        </>)
}
Profile.defaultProps ={
    fullName:'fullName',
    bio:'lorem parg',
    profession:'profession'
}
Profile.prototype={
    fullName: PropTypes.string,
    bio : PropTypes.string,
    profession: PropTypes.string,
}
export default Profile