import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import './index.css';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findAllUsers} from "../../actions/user-actions";

const UserSearchBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector(state => state.users);
    //console.log('users', users)
    const [allUsers, setUsers] = useState([]);
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        findAllUsers(dispatch)}
            //console.log('users', users);}
    , []);

    const onChangeHandler = (text) => {
        setUsers(users);
        let matches = []
        if (text.length > 0){
            matches = users.filter(user=>{
                const regex = new RegExp(`${text}`,"gi");
                return user.username.match(regex)
            })
        }
        setSuggestions(matches)
        setText(text);
    }
    const onSuggestHandler = (text) =>{
        setText(text);
        setSuggestions([])
        //navigate('profile/${text}')
    }
    return(
        <div className='row mb-2'>
            <div className='col-10'>
                <input className='form-control ' type="text"
                       placeholder='Search user by username...'
                       onChange={e=> onChangeHandler(e.target.value)}
                       value={text}
                       onBlur={()=> {
                           setTimeout(() => {
                               setSuggestions([])
                           }, 100);
                       }}
                />
                <div className=''> {suggestions && suggestions.map((suggestion,i) =>
                    <div key={i} className='justify-content-center suggestion'
                         onClick={() =>
                             onSuggestHandler(suggestion.username)

                         }
                    >{suggestion.username}</div>
                )}
                </div>
            </div>
            <Button className='col-2 h-25' onClick={()=>navigate(`/profile/${text}`)}>Go
            </Button>
        </div>
    )

}

export default UserSearchBar;