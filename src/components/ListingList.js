import ListingCard from "./ListingCard";


export default function ListingList({ listings }) {
    return (
        <div className='ListingList row'>
            {listings.map(listing => <ListingCard key={listing.id} listing={listing}/>)}
        </div>
    )
}