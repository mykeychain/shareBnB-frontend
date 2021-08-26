import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { useParams } from 'react-router-dom';
import ShareBnBApi from "../api";

export default function ListingDetails() {
    const { id } = useParams();
    const [listing, setListing] = useState(null);
    const [host, setHost] = useState(null);
    
    useEffect(function loadListingInfo() {
        async function getListingInfo() {
            const curr_listing = await ShareBnBApi.getListingById(id);
            const curr_host = await ShareBnBApi.getUserById(curr_listing.host_id);
            setListing(curr_listing);
            setHost(curr_host);
        }
        getListingInfo();
    }, []);

    if (listing && host) {
        return (
            <div className='ListingDetails container'>
                <h1 className='mt-3'>{listing.title}</h1>
                <h4>Hosted by: {host.first_name} {host.last_name} - {host.username}</h4>
                <div className="ListingCardCarousel mb-4">
                    <Carousel showThumbs={false} showStatus={false}>
                        {listing.photos.map(photo => (
                            <div key={photo.id}>
                                <img src={photo.url} alt=""/>
                            </div>
                        ))}
                    </Carousel>
                </div>
                <h2>${listing.price} /night</h2>
                <h2>{listing.address}</h2>
                <h4>{listing.details}</h4>
            </div>
        )
    } else {
        return <p>Loading...</p>
    }
}