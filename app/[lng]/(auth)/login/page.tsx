"use client";

import { Formik } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { signIn } from "next-auth/react";
// import { signIn } from "next-auth/react";
export default function Login() {
  async function handleLogin(values: any) {
    console.log(values);
    // let item = {
    //   username: values?.username,
    //   password: values?.password,
    // };

    // const res = await fetch("/api/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(item),
    // });
    //
    // const data = await res.json();
    //
    // console.log(data?.data);
    // Cookies.set("bloomza_token", data?.data?.token);

    let status = "" as any;

    status = await signIn("credentials", {
      redirect: false,
      typeLogin: "pass",
      username: values?.username,
      password: values?.password,
      callbackUrl: "/",
    });

    if (status.ok) {
      console.log("ok");
    } else {
      console.log("error");
    }
  }
  return (
    <>
      <div className="container-fluid py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className={"row"}>
            <Formik
              initialValues={{
                username: "",
                password: "",
              }}
              validationSchema={Yup.object({
                username: Yup.string().required("Нэрээ оруулна уу"),
                password: Yup.string().required("Нууц үг оруулна уу"),
              })}
              onSubmit={handleLogin}
            >
              {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                errors,
                isValid,
              }) => (
                <form onSubmit={handleSubmit} className="formModal flex-fill">
                  <div className="d-flex align-items-center justify-content-between">
                    <h1 className="title fs-5 mb-0 fw-semibold">Нэвтрэх</h1>
                  </div>

                  <hr className="my-4" />
                  <div className="form-floating mb-3">
                    <div
                      className={`form-floating ${
                        errors.username ? "is-invalid" : ""
                      }`}
                    >
                      <input
                        type="text"
                        name={"username"}
                        className={`form-control ${
                          errors.username ? "is-invalid" : ""
                        }`}
                        id="emailInput"
                        placeholder="name@example.com"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label htmlFor="emailInput">Имэйл хаяг</label>
                    </div>
                    {errors.username && (
                      <div
                        id="validationServer03Feedback"
                        className="invalid-feedback"
                      >
                        {errors.username}
                      </div>
                    )}
                  </div>
                  <div className="form-floating mb-3">
                    <div
                      className={`form-floating ${
                        errors.password ? "is-invalid" : ""
                      }`}
                    >
                      <input
                        type="password"
                        name={"password"}
                        className={`form-control ${
                          errors.password ? "is-invalid" : ""
                        }`}
                        id="floatingPassword"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label htmlFor="floatingPassword">Нууц үг</label>
                    </div>
                    {errors.password && (
                      <div
                        id="validationServer03Feedback"
                        className="invalid-feedback"
                      >
                        {errors.password}
                      </div>
                    )}
                  </div>
                  <div className="d-flex justify-content-end mb-3">
                    <button type="button" className="btn">
                      Нууц үг мартсан
                    </button>
                  </div>
                  <div className="d-flex justify-content-end mb-3">
                    <button
                      type="submit"
                      className="btn btn-main py-3 w-100"
                      disabled={!isValid}
                    >
                      Нэвтрэх
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}
