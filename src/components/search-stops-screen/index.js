import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import '../user-search/index.css';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findAllStopsInMBTA} from "../../actions/search-action";

const StopSearchBar = () => {
    const navigate = useNavigate();
    const [allStops, setStops] = useState([]);
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const MBTAStops = useSelector(state => state.MBTAStops);
    console.log('stops', MBTAStops)

    const dispatch = useDispatch();
    useEffect(() => {
            findAllStopsInMBTA(dispatch);
        }, []);

    console.log('stops', MBTAStops)

    const onChangeHandler = (text) => {
        setStops(MBTAStops);
        let matches = []
        if (text.length > 0){
            matches = MBTAStops.filter(MBTAStop =>{
                const regex = new RegExp(`${text}`,"gi");
                return MBTAStop.attributes.name.match(regex)
            })
        }
        setSuggestions(matches)
        setText(text);
    }
    const onSuggestHandler = (text) =>{
        setText(text);
        setSuggestions([])
    }

    return(
        <div className='row mb-2 wrap-search'>
            <div className='  '>
                <input className='form-control ' type="text"
                       placeholder='Search for an MBTA stop'
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
                             onSuggestHandler(suggestion.id)

                         }
                    >{suggestion.attributes.name}
                    <br/>
                        {suggestion.id}
                    <br/>
                        {suggestion.attributes.vehicle_type}
                    </div>
                )}
                </div>
            </div>
        <div>
            <Button className='go-button ' onClick={()=>navigate(`/search/details/${text}`)}>Go
            </Button>
        </div>
        </div>
    )

}

export default StopSearchBar;