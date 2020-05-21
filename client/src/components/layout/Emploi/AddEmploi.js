import React from "react";
import {useSelector} from "react-redux";
import {Formik} from "formik";
import * as Yup from "yup";
import {DisplayFormikState} from "../helperFormik";
import {createEmplois} from "../../../api/EmploiApi";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";


const AddEmploi = () => {
    const userEmploi = useSelector(state => state.auth.user);
    document.getElementsByTagName("input").addClass = "form-control";

    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>{userEmploi.name}</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item">
                                    <a href="#">Home</a>
                                </li>
                                <li className="breadcrumb-item active">
                                    Ajouter Emploi
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
                        <h3 className="card-title">Ajouter un emploi</h3>
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
                            initialValues={{user: userEmploi._id, tags: ["emploi"], name: ""}}
                            onSubmit={async values => {
                                values.user = userEmploi._id;
                                await new Promise(resolve => setTimeout(resolve, 500));
                                alert(JSON.stringify(values, null, 2));
                                await createEmplois(values);
                                alert(JSON.stringify(values, null, 2));
                                console.log()
                            }}
                            validationSchema={Yup.object().shape({
                                name: Yup.string()
                                    .required("Le titre d'emploi est obligatoire"),
                                description: Yup.string()
                                    .required("La description d'emploi est obligatoire"),


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
                                    handleReset,
                                    setFieldValue
                                } = props;
                                return (

                                    <form className="form" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="name">titre</label>
                                            <input
                                                id="name"
                                                placeholder="Enter your email"
                                                type="text"
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}

                                                className={
                                                    errors.name && touched.name
                                                        ? "text-input form-control error"
                                                        : "text-input form-control"
                                                }
                                            />
                                            {errors.name && touched.name && (
                                                <div className="input-feedback">{errors.name}</div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="description">description</label>
                                            <textarea
                                                id="description"
                                                placeholder="Enter your email"
                                                type="textarea"
                                                rows="4"
                                                value={values.description}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className=""
                                                className={
                                                    errors.description && touched.description
                                                        ? "text-input form-control error"
                                                        : "text-input form-control"
                                                }
                                            > </textarea>
                                            {errors.description && touched.description && (
                                                <div className="input-feedback">{errors.description}</div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="society">nom de societé</label>
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
                                                        ? "text-input form-control error"
                                                        : "text-input form-control"
                                                }
                                            />
                                            {errors.society && touched.society && (
                                                <div className="input-feedback">{errors.society}</div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="address">address</label>
                                            <input
                                                id="address"
                                                placeholder="Enter your email"
                                                type="text"
                                                value={values.address}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={
                                                    errors.address && touched.address
                                                        ? "text-input form-control error"
                                                        : "text-input form-control"
                                                }
                                            />
                                            {errors.address && touched.address && (
                                                <div className="input-feedback">{errors.address}</div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="tags">tags <span>(les mot clé de votre emploi ex tunis,javascript...)</span></label>
                                            <TagsInput
                                                name="tags"
                                                value={values.tags}
                                                className={
                                                    errors.tags && touched.tags
                                                        ? "text-input form-control error"
                                                        : "text-input form-control"
                                                }
                                                onChange={tags => {
                                                    console.log(tags);
                                                    setFieldValue("tags", tags);
                                                }}
                                            />
                                            {errors.tags && touched.tags && (
                                                <div className="input-feedback">{errors.tags}</div>
                                            )}
                                        </div>


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
