import {useState} from "react";
import InputField from "../shared/form/InputField.jsx";
import {getWithParams} from "../../utils/fetch-api.js";
import {showErrorToast} from "../../utils/toaster-alert.js";

const SearchForm = ({setStatus, setUser}) => {
    const [nid, setNid] = useState('');
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFormDataChange = (name, value) => {
        setNid(value);
    }

    const handleOnSubmit= (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors({});
        getWithParams('/api/search',{search: nid})
            .then(res => {
                setStatus(res?.data?.status)
                setUser(res?.data?.user)
            })
            .catch(err => {
                if (err?.response?.data?.errors){
                    const errors = err?.response?.data?.errors;
                    setErrors(errors)
                }
                showErrorToast(err.response?.data?.message)
            })
            .finally(() => setIsSubmitting(false));
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <div className="row">
                <div className="col-12 mb-3">
                    <InputField
                        type="text"
                        label="Search By NID No."
                        name="search"
                        isRequired={true}
                        value={nid}
                        handleChange={handleFormDataChange}
                        errors={errors}
                    />
                </div>
                <div className="col-12 text-end">
                    <button type="submit" className="btn btn-primary btn-sm"
                            disabled={isSubmitting}>
                        {isSubmitting ? 'Searching...' : 'Search'}
                    </button>
                </div>
            </div>
        </form>
    )
}

export default SearchForm;
