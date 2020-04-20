import React from "react";
import {useSelector} from "react-redux";
import BigCalendar from "../Calendar/BigCalendar";
import {Field, Formik} from "formik";
import * as Yup from "yup";
import {DisplayFormikState} from "../helperFormik";
import {createEmplois} from "../../../api/EmploiApi";


const AddEmploi = () => {
    const userEmploi = useSelector(state => state.auth.user);

    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Blank Page</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">
                                    <a href="#">Home</a>
                                </li>
                                <li className="breadcrumb-item active">
                                    Blank Page
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                {/* /.container-fluid */}
            </section>
            {/* Main content */}
            <section className="content">
                {/* Default box */}
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Title</h3>
                        <div className="card-tools">
                            <button
                                type="button"
                                className="btn btn-tool"
                                data-card-widget="collapse"
                                data-toggle="tooltip"
                                title="Collapse"
                            >
                                <i className="fas fa-minus"/>
                            </button>
                            <button
                                type="button"
                                className="btn btn-tool"
                                data-card-widget="remove"
                                data-toggle="tooltip"
                                title="Remove"
                            >
                                <i className="fas fa-times"/>
                            </button>
                        </div>
                    </div>
                    <div className="card-body">


                        <Formik
                            initialValues={{user: userEmploi._id}}
                            onSubmit={async values => {
                                values.user = userEmploi.id;
                                console.log("values", values);
                                await new Promise(resolve => setTimeout(resolve, 500));
                                alert(JSON.stringify(values, null, 0));
                                const data = JSON.stringify(values, null, 0);
                                await createEmplois(values);
                                alert(JSON.stringify(values, null, 2));
                                console.log()
                            }}
                            validationSchema={Yup.object().shape({
                                name: Yup.string()
                                    .required("Required"),


                            })}
                        >
                            {props => {
                                const {
                                    values,
                                    touched,
                                    errors,
                                    dirty,
                                    isSubmitting,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    handleReset
                                } = props;
                                return (

                                    <form className="form" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="name">Project Name</label>
                                            <input
                                                id="name"
                                                placeholder="Enter your email"
                                                type="text"
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}

                                                className={
                                                    errors.name && touched.name
                                                        ? "text-input error"
                                                        : "text-input"
                                                }
                                            />
                                            {errors.name && touched.name && (
                                                <div className="input-feedback">{errors.name}</div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="description">Project Name</label>
                                            <textarea
                                                id="description"
                                                placeholder="Enter your email"
                                                type="textarea"
                                                rows="4"
                                                value={values.description}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className="form-control"
                                                className={
                                                    errors.description && touched.description
                                                        ? "text-input error"
                                                        : "text-input"
                                                }
                                            />
                                            {errors.description && touched.description && (
                                                <div className="input-feedback">{errors.description}</div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="society">Project Name</label>
                                            <input
                                                id="society"
                                                placeholder="Enter your email"
                                                type="text"
                                                value={values.society}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className="form-control"
                                                className={
                                                    errors.society && touched.society
                                                        ? "text-input error"
                                                        : "text-input"
                                                }
                                            />
                                            <input
                                                id="address"
                                                type="text"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                name="address"

                                                value={userEmploi._id}
                                            />
                                            {errors.society && touched.society && (
                                                <div className="input-feedback">{errors.society}</div>
                                            )}
                                        </div>


                                        <label htmlFor="location">Where do you work?</label>
                                        <Field
                                            className="form-control custom-select"
                                            component="select"
                                            id="location"
                                            name="location"
                                            multiple={true}
                                        >
                                            <option value="NY">New York</option>
                                            <option value="SF">San Francisco</option>
                                            <option value="CH">Chicago</option>
                                            <option value="OTHER">Other</option>
                                        </Field>
                                        <div className="label">
                                            What best describes you? (check all that apply)
                                        </div>
                                        <label>
                                            <Field type="checkbox" name="jobType" value="designer"/>
                                            Designer
                                        </label>
                                        <label>
                                            <Field type="checkbox" name="jobType" value="developer"/>
                                            Developer
                                        </label>
                                        <label>
                                            <Field type="checkbox" name="jobType" value="product"/>
                                            Product Manager
                                        </label>
                                        <label htmlFor="email" style={{display: "block"}}>
                                            Email
                                        </label>


                                        <button
                                            type="button"
                                            className="outline"
                                            onClick={handleReset}
                                            disabled={!dirty || isSubmitting}
                                        >
                                            Reset
                                        </button>
                                        <button type="submit" disabled={isSubmitting}>
                                            Submit
                                        </button>

                                        <DisplayFormikState {...props} />
                                    </form>
                                );
                            }}
                        </Formik>
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer">Footer</div>
                    {/* /.card-footer*/}
                </div>
                {/* /.card */}
            </section>
            {/* /.content */}
        </div>
    );

};
export default AddEmploi;
