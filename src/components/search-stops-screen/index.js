import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import '../user-search/index.css';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findAllStopsInMBTA} from "../../actions/search-action";

const StopSearchBar = () => {
    const navigate = useNavigate();
    const [allStops, setStops] = useState([]);
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [id, setId] = useState('');

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
    const onSuggestHandler = (text1, text2, id) =>{
        if(text1 !== null){
            setText(text1);
        }else{
            setText(text2);
        }
        setId(id);
        setSuggestions([]);
    }

    const goToDetail = (text) => {
        navigate(`/search/details/${text}`);
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
                         onClick={() => onSuggestHandler(suggestion.attributes.description, suggestion.attributes.name, suggestion.id)}>
                        Stop: {suggestion.attributes.name}
                        <br/>
                        {suggestion.attributes.description !== null ?
                            <>
                        Description: {suggestion.attributes.description}
                        </>
                            :
                            ""}
                    </div>

                )}
                </div>
            </div>
            <Button className='col-2 h-25 bg-success' onClick={() => goToDetail(id)}>Go
            </Button>
        </div>
        // <div className='row mb-2 wrap-search'>
        //     <div className='  '>
        //         <input className='form-control ' type="text"
        //                placeholder='Search for an MBTA stop'
        //                onChange={e=> onChangeHandler(e.target.value)}
        //                value={text}
        //                onBlur={()=> {
        //                    setTimeout(() => {
        //                        setSuggestions([])
        //                    }, 100);
        //                }}
        //         />
        //         <div className=''> {suggestions && suggestions.map((suggestion,i) =>
        //             <div key={i} className='justify-content-center suggestion'
        //                  onClick={() =>
        //                      onSuggestHandler(suggestion.id)
        //
        //                  }
        //             >{suggestion.attributes.name}
        //             <br/>
        //                 {suggestion.id}
        //             <br/>
        //                 {suggestion.attributes.vehicle_type}
        //             </div>
        //         )}
        //         </div>
        //     </div>
        // <div>
        //     <Button className='go-button ' onClick={()=>navigate(`/search/details/${text}`)}>Go
        //     </Button>
        // </div>
        // </div>
    )

}

export default StopSearchBar;