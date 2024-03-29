import { Field, Form, Formik } from "formik";
import React from "react";
import toast from "react-hot-toast";
import usePost from "../../hooks/usePost";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();

  const onSubmit = (Values) => {
    console.log(Values);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(Values)
    };

    fetch("http://localhost:8082/auth/create", requestOptions).then((res) => {
      return res.json();
    })
      .then((res) => {
        console.log(res.json());
        if (!res.ok) throw new Error();

        toast.success("Successfully Created Account");
        localStorage.setItem('token', res.access_token);
      })
      .catch((error) => {
        alert("Failed to Created Account");
      }
      );

  };

  const { loading: iscreateLoading, mutate: createacc } = usePost(
    `${process.env.REACT_APP_API_URL}/auth/create`,
    {
      onSuccess: (res) => {
        toast.success("Successfully Created Account");
        localStorage.setItem('token', res.access_token);
      navigate("/");


      },
      onError: (error) => {

        toast.error("Failed to Created Account");
      }
    }
  );
  return (
    <>
      <div className="min-h-lvh flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://i.ibb.co/XS7XpHP/e-commerce.png"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <Formik initialValues={{}} onSubmit={createacc}>
              <Form className="space-y-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <div className="mt-1">
                    <Field
                      id="username"
                      name="username"
                      type="text"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Sign Up
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;