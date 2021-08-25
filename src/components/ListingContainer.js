import ListingList from "./ListingList";
import SearchForm from "./SearchForm";
import React, { useEffect, useState } from "react";
import ShareBnBApi from "../api";

export default function ListingContainer() {
    const [listings, setListings] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(function loadListings() {
        async function getListings() {
            const newListings = await ShareBnBApi.getListings(searchTerm);
            setListings(newListings);
        }
        getListings();
    }, []);

    return (
        <div className="ListingContainer">
            <h1>Listings</h1>
            <SearchForm />
            <ListingList listings={listings}/>
        </div>  
    );
}