import {useState} from "react";
import SearchForm from "../../component/search/SearchForm.jsx";
import ShowSearchResult from "../../component/search/ShowSearchResult.jsx";

const Search = () => {
    const [status, setStatus] = useState("");
    const [user, setUser] = useState("");

    return (
        <div className="container-fluid">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6 col-12">
                    <div className="card">
                        <div className="card-header bg-dark text-light">
                            <h3>Search</h3>
                        </div>
                        <div className="card-body">
                            {
                                !status &&
                                <SearchForm setStatus={setStatus} setUser={setUser}/>
                            }
                            {
                                status &&
                                <ShowSearchResult status={status} setStatus={setStatus} user={user} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
