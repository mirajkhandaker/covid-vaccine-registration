import InputField from "../../component/shared/form/InputField.jsx";
import {useEffect, useState} from "react";
import {get, post} from "../../utils/fetch-api.js";
import {showErrorToast, showSuccessToast} from "../../utils/toaster-alert.js";
import SelectField from "../../component/shared/form/SelectField.jsx";

const Registration = () => {

    const initialFormData = {
        name: "",
        email: "",
        nid: "",
        vaccine_center_id: "",
    }

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [vaccineCenter, setVaccineCenter] = useState([]);

    useEffect(() => {
        getVaccineCenter();
    }, []);

    const getVaccineCenter = () => {
        get('/api/get-vaccine-centers')
            .then(res => {
                setVaccineCenter(res?.data)
            })
            .catch(err => showErrorToast("Unable to get vaccine center list."))
    }

    const handleFormDataChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleOnSubmit= (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors({});
        post('/api/registration',formData)
            .then(res => {
                setFormData(initialFormData)
                showSuccessToast("Your registration is complete for vaccine.")
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
        <div className="container-fluid">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6 col-12">
                    <div className="card">
                        <div className="card-header bg-dark text-light">
                            <h3>Registration</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleOnSubmit}>
                                <div className="row">
                                    <div className="col-md-6 col-12 mb-3">
                                        <InputField
                                            type="text"
                                            label="Name"
                                            name="name"
                                            isRequired={true}
                                            value={formData.name}
                                            handleChange={handleFormDataChange}
                                            errors={errors}
                                        />
                                    </div>
                                    <div className="col-md-6 col-12 mb-3">
                                        <InputField
                                            type="email"
                                            label="Email"
                                            name="email"
                                            isRequired={true}
                                            value={formData.email}
                                            handleChange={handleFormDataChange}
                                            errors={errors}
                                        />
                                    </div>
                                    <div className="col-md-6 col-12 mb-3">
                                        <InputField
                                            type="text"
                                            label="NID No"
                                            name="nid"
                                            isRequired={true}
                                            value={formData.nid}
                                            handleChange={handleFormDataChange}
                                            errors={errors}
                                        />
                                    </div>
                                    <div className="col-md-6 col-12 mb-3">
                                        <SelectField
                                            options={vaccineCenter}
                                            label="Vaccine Center"
                                            name="vaccine_center_id"
                                            isRequired={true}
                                            value={formData.vaccine_center_id}
                                            handleChange={handleFormDataChange}
                                            errors={errors}
                                        />
                                    </div>
                                    <div className="col-12 text-end">
                                        <button type="submit" className="btn btn-primary btn-sm"
                                                disabled={isSubmitting}>
                                            {isSubmitting ? 'Submitting...' : 'Submit'}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration
