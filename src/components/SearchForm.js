import { useState } from "react";

export default function SearchForm({ search }) {
    const [searchTerm, setSearchTerm] = useState("");

    function handleChange(evt) {
        setSearchTerm(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        search(searchTerm.trim());
    }

    return (
        <div className="SearchForm my-3">
            <form onSubmit={handleSubmit}>
                <div className="row g-1">
                    <div className="col-sm-10 col-12">
                        <input
                            name="searchTerm"
                            value={searchTerm}
                            onChange={handleChange}
                            className="form-control"></input>
                    </div>
                    <div className="col d-grid">
                        <button className="btn btn-primary">
                            <i className="bi bi-search"></i> Search 
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}