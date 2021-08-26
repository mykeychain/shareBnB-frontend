import ListingList from "./ListingList";
import SearchForm from "./SearchForm";
import Loading from "./Loading";
import React, { useEffect, useState } from "react";
import ShareBnBApi from "../api";

export default function ListingContainer() {
    const [listings, setListings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(function loadListings() {
        getListings();
    }, [ ]);

    async function getListings(searchTerm) {
        if (!isLoading) setIsLoading(true);
        const newListings = await ShareBnBApi.getListings(searchTerm);
        setListings(newListings);
        setIsLoading(false);
    }

    return (
        <div className="ListingContainer col-11 mx-auto">
            <h1 className="mt-3">Listings</h1>
            <small className="text-muted">{listings.length} listings found</small>
            <SearchForm search={getListings}/>
            {isLoading ? <Loading /> : <ListingList listings={listings}/>}
        </div>  
    );
}