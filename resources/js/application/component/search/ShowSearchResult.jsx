import {Link} from "react-router-dom";

const ShowSearchResult = ({status, setStatus,user}) => {
    let result = "";
    switch (status) {
        case "Not registered":
            result = <p>You are not registered. Please <Link to="/register">register.</Link></p>
            break;
        case "Not scheduled":
            result = <p>Your vaccine date hasn't been scheduled yet.</p>
            break;
        case "Scheduled":
            result = <p>Your vaccination schedule at <b>{user?.scheduled_date}</b> on <b>{user?.vaccine_center?.name}</b></p>
            break;
        case "Vaccinated":
            result = <p>You are vaccinated.</p>
            break;
        default:
            result = <p>Unable to get any result. Please try again</p>
    }
    return (
        <div className="text-center">
            {result}
            <button className="btn btn-primary btn-sm" onClick={() => setStatus("")}>Search Again</button>
        </div>
    )
}

export default ShowSearchResult;
