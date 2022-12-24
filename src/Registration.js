import { Formik, Form, Field } from "formik";
import * as yup from "yup"
import React from "react";
// import KErrorMessage from "./KErrorMessage";

function Registration() {
    const validationSchema = yup.object({
    name: yup.string().min(2).max(25).required("*Required"),
    destination: yup.string().required("*Required"),
    date: yup.number().required("*Required"),
    time: yup.string().required("*Required"),
    vacancy: yup.string().required("*Required"),
    price: yup.number().required("*Required"),
  })
  const getdata = localStorage.getItem("key");

  return (
    <>
    < div className="mainDiv">
      

        <Formik initialValues={{ 
            name: "",
            destination: "", 
            date: "",
            time: "", 
            vacancy:"",
            price:"" , 
        }}
            onSubmit={(values) => { localStorage.setItem("key",JSON.stringify(values))}}>
           

            <Form className="form">

              <Field  name="name" type="text"  placeholder="Starting From ..." className="field" ></Field>
              <br/>
              {/* <KErrorMessage name="name" /> */}

              <Field  name="destination" type="text"  placeholder="Destination ..." className="field"></Field>
              <br/>
              {/* <KErrorMessage name="destination" /> */}

              <Field  name="date" type="date"  placeholder="" className="field"></Field>
              <br/>
              {/* <KErrorMessage name="date" /> */}

              <Field  name="time" type="time"  placeholder="time" className="field"></Field>
              <br/>
              <Field name="vacancy" type="text"  placeholder="Vacancies" className="field" ></Field>
              <br/>
              <Field name="price" type="text"  placeholder="Price" className="field" ></Field>
              <br/>
{/*             
              <div className="submit">
              <button name="submit" type="submit"  id="submit">Publish a ride </button>
              <br/>
              </div> */}

            </Form>
          
        </Formik>
      </div>
    
    </>
  )
}
export default Registration;