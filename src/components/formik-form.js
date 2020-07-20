import React from "react"
import { theme, Button } from '@styles'
import styled from 'styled-components'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { useFormik } from "formik";
const { colors, fontSizes, fonts } = theme

const SignupForm = () => {

  const formik = useFormik({
    initialValues: { email: "tim@apple.com" },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Submit</button>
    </form>
  );