import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { useParams } from 'react-router-dom';
import ShareBnBApi from "../api";
import NewMessageModal from "./NewMessageModal";
import './ListingDetails.css';

/** ListingDetails
 * 
 *  Listing Detail page that shows information about listing
 * 
 *  Params:
 *      - id
 * 
 *  State:
 *      - listing
 *      - host
 *  
 *  Routes -> ListingDetails
 */
export default function ListingDetails({ sendMessage }) {
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
            <div className='ListingDetails container mt-4'>
                <div className='row'>
                    <div className='col-6'>
                        <div className="ListingCardCarousel mb-4">
                            <Carousel showStatus={false}>
                                {listing.photos.map(photo => (
                                    <div key={photo.id}>
                                        <img src={photo.large_photo_url} alt=""/>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        </div>
                    <div className='col-6'>
                        <h1 className="">{listing.title}</h1>
                        <h2 className="text-muted">{listing.address}</h2>
                        <h2 className="text-muted">${listing.price} /night</h2>
                        <h4>Hosted by: {host.first_name} {host.last_name} - {host.username}</h4>
                        <NewMessageModal host={host} sendMessage={sendMessage}/>
                        <h4>{listing.details}</h4>
                    </div>
                </div>
            </div>
        )
    } else {
        return <p>Loading...</p>
    }
}