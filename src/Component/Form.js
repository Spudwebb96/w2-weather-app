import React, { useState } from "react";


export default function Form({setLocation, location}) {


    const [formLocation, setFormLocation] = useState('');

    const handleLocationSubmit = e => {
        setFormLocation(e.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();

        setLocation(
            e => [{location: formLocation}, ...e],
        );
    }

    return (
        <form className='my-5 mx-auto' style={{maxWidth: '450px', padding: '40px', backgroundColor: 'lightgrey'}} onSubmit={handleSubmit} >

            <div className="mb-3">
                <h2>Look for a city</h2>
                <label htmlFor="exampleInputEmail1" className="form-label">Location</label>
                <input type="text"  className="form-control center-block" id="exampleInputEmail1" aria-describedby="emailHelp"
                        onChange={handleLocationSubmit}/>
            </div>
            <button type="submit" className="btn btn-primary" >Search Weather</button>      
        </form>
    )
} 