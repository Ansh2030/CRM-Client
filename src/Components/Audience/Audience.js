import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Audience.css';
import Head from '../Navbar/Head';
const Audience = () => {
    const [rules, setRules] = useState([]);
    const [audienceSize, setAudienceSize] = useState(null);
    const [message, setMessage] = useState("");
    const [op, setOp] = useState("");

    const addRule = () => {
        setRules([...rules, { field: '', operator: '', value: '' }]);
    };

    const handleInputChange = (index, event) => {
        const values = [...rules];
        values[index][event.target.name] = event.target.value;
        setRules(values);
    };
    const addOp = (e)=>{
        const f = e.target.value;
        setOp(f);
    }

    const checkAudienceSize = async () => {
        const response = await fetch('http://localhost:8080/customers/query', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ rules,op })
        });
        const data = await response.json();
        setAudienceSize(data.length);
    };

    const handleSendCampaign = async () => {
        if(message!=""){
            const response = await fetch(' http://localhost:8080/campaigns/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ audience: rules, message })
            });
            const data = await response.json();
            alert(data.message);
        }
        else{
            alert("Please enter message");
        }
       
    };

    return (
        <>
        
        
      
        <Head/>
        <div className='aud'>
            <div>
            <Navbar/>
            </div>
           

            <div className='mainAud'>
                <div className='secol'>
                <h1>Create Audience</h1>
            <button type="button" onClick={addRule} className="btn btn-light">Add Rule</button>
            <input className='ops' type="text"  placeholder='operation' onChange={addOp}  value={op}/>
            <div className='form'>
            {rules.map((rule, index) => (
                <div className='formfield' key={index}>
                    <input
                        name="field"
                        placeholder="Field"
                        value={rule.field}
                        onChange={event => handleInputChange(index, event)}
                    />
                    <input
                        name="operator"
                        placeholder="Operator"
                        value={rule.operator}
                        onChange={event => handleInputChange(index, event)}
                    />
                    <input
                        name="value"
                        placeholder="Value"
                        value={rule.value}
                        onChange={event => handleInputChange(index, event)}
                    />
                </div>
            ))}
            </div>
           
            <button type="button" onClick={checkAudienceSize} className=" check btn btn-light">Check Audience Size</button>

                <div className='audsize'>
                {audienceSize !== null && <div>Audience Size: {audienceSize}</div>}
                </div>
                </div>
           
        
         


           
            
          
          

            <div className='thirdcol'>
           
            <input
            type="text"
                placeholder=" Enter the Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
            />
             <button type="button"  onClick={handleSendCampaign} className="btn btn-light">Send Campaign</button>
            </div>
           
            {/* <button onClick={handleSendCampaign}>Send Campaign</button> */}

            </div>
           
        </div>
        </>
    );
};

export default Audience;
