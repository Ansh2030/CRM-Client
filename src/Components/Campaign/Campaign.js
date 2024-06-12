import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Head from '../Navbar/Head';
import './Camp.css';

const Campaign= () => {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        const fetchCampaigns = async () => {
            const response = await fetch('http://localhost:8080/campaigns');
            const data = await response.json();
            setCampaigns(data);
            
        };
        fetchCampaigns();
    }, []);

    return (

        <>

        <Head/>
        <div className='campcont'>
            <div className='left'>
        <Navbar/>
            </div>
            <div >

            <h1>Campaigns</h1>

            
            <div className='right'>
            {campaigns.map(campaign => (
    <div className='card' key={campaign._id}>
        <div className='card-body'>

        <div className='up'>
        <p>Message:{campaign.message}</p>
        </div>


        <div className='down'>
        <p>Sent At: {new Date(campaign.sentAt).toLocaleString()}</p>
        <p>Status: {campaign.status}</p>
        <p>Sent: {campaign.sentCount}</p>
        <p>Failed: {campaign.failedCount}</p>
        </div>

    </div>
    </div>
))}
            </div>

            </div>

      

        </div>
        
    
        </>
       
    );
};

export default Campaign;
