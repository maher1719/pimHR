import React, {useEffect, useRef} from "react";
import {useParams} from "react-router-dom"
import {getEmploi, updateEmploi} from "../../../api/EmploiApi";
import * as Yup from "yup";
import TagsInput from "react-tagsinput";
import {DisplayFormikState} from "../helperFormik";
import {Formik} from "formik";


const ModifierEmploi = (props) => {


    const id = useParams().id;
    const formikRef = useRef();

    console.log("props", id);
    useEffect(() => {
        getEmploi({_id: id}).then((data) => {
            console.log(data)

            if (formikRef.current) {
                formikRef.current.setFieldValue(
                    "name",
                    data.name
                );
                formikRef.current.setFieldValue(
                    "society",
                    data.society
                );
                formikRef.current.setFieldValue(
                    "address",
                    data.address
                );
                formikRef.current.setFieldValue(
                    "tags",
                    data.tags
                );
                formikRef.current.setFieldValue(
                    "description",
                    data.description
                );
            }
        })
    }, [])
    /*

     */
    return (
        <div>
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
                                        Mes offres d'emploi
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    {/* /.container-fluid */}
                </section>
                {/* Main content */}
                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Projects</h3>

                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse"
                                        data-toggle="tooltip" title="Collapse">
                                    <i className="fas fa-minus"></i></button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove"
                                        data-toggle="tooltip" title="Remove">
                                    <i className="fas fa-times"></i></button>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <Formik
                                initialValues={{name: "", society: "", address: "", tags: []}}
                                innerRef={formikRef}
                                onSubmit={async values => {
                                    values.id = id;
                                    console.log("valuse", values);
                                    await new Promise(resolve => setTimeout(resolve, 500));
                                    alert(JSON.stringify(values, null, 2));
                                    await updateEmploi(values);
                                    alert(JSON.stringify(values, null, 2));
                                    console.log();
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

                    </div>
                </section>
            </div>
        </div>
    )
}
export default ModifierEmploi;