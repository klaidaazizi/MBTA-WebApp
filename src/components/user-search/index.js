import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import './index.css';
import * as service from '../../services/user-service'
import {useNavigate} from "react-router-dom";

const UserSearchBar = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    useEffect(async () => {
        const users = await service.findAllUsers();
        console.log('users', users)
        setUsers(users);
    }, [])

    const onChangeHandler = (text) => {
        let matches = []
        if (text.length > 0){
            matches = users.filter(user=>{
                const regex = new RegExp(`${text}`,"gi");
                return user.username.match(regex)
            })
        }
        console.log('matches',matches)
        setSuggestions(matches)
        setText(text)
    }
    const onSuggestHandler = (text) =>{
        setText(text);
        setSuggestions([])
        //navigate('profile/${text}')
    }
    return(
        <>
            <div className='container'>
            <input className='form-control' type="text"
                   placeholder='Search user by username'
                   onChange={e=> onChangeHandler(e.target.value)}
                   value={text}
                   onBlur={()=> {
                       setTimeout(() => {
                           setSuggestions([])
                       }, 100);
                   }}
                   />
                {suggestions && suggestions.map((suggestion,i) =>
                        <div key={i} className='justify-content-center suggestion'
                             onClick={() =>
                                 onSuggestHandler(suggestion.username)

                             }
                        >{suggestion.username}</div>
                    )}
        </div>
            </>
        )

}

export default UserSearchBar;