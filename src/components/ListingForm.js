import { useState } from "react"
import { useHistory } from "react-router-dom";
import ShareBnBApi from "../api";

export default function ListingForm() {
    const history = useHistory();

    const [formData, setFormData] = useState({host_id: 1});
    const [files, setFile] = useState([]);

    function handleChange(evt) {
        const { name, value } = evt.target;

        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    function handleFileChange(evt) {
        setFile(evt.target.files);
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const dataArray = new FormData();
            for (const key in formData) {
                dataArray.append(key, formData[key])
            }
            Array.from(files).forEach((file, ind) => dataArray.append(`photo${ind}`, file));
            // dataArray.append("formData", formData);
            // dataArray.append("photo", file);
            const resp = await ShareBnBApi.addListing(dataArray);
            history.push(`/listings/${resp.id}`)
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <div className="ListingForm container">
            <h4>Add a Listing</h4>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label
                        htmlFor="title"
                        className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="form-control">
                    </input>
                </div>
                <div className="form-group mt-3">
                    <label
                        htmlFor="price"
                        className="form-label">
                        Price
                    </label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="form-control">
                    </input>
                </div>
                <div className="form-group mt-3">
                    <label
                        htmlFor="address"
                        className="form-label">
                        Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="form-control">
                    </input>
                </div>
                <div className="form-group mt-3">
                    <label
                        htmlFor="details"
                        className="form-label">
                        Details
                    </label>
                    <input
                        type="text"
                        id="details"
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        className="form-control">
                    </input>
                </div>
                <div className="form-group mt-3">
                    <label
                        htmlFor="photos"
                        className="form-label">
                        Photos
                    </label>
                    <input
                        type="file"
                        id="photos"
                        name="photos"
                        onChange={handleFileChange}
                        value={formData.photos}
                        className="form-control"
                        multiple
                        >
                    </input>
                </div>
                <button className="btn btn-primary mt-4">Add</button>
            </form>
        </div>
    )
}