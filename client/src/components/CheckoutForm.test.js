import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import CheckoutForm from "./CheckoutForm"

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)

    const header = screen.getByText(/checkout form/i)

    expect(header).toBeInTheDocument()
  })
  
  test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
  
    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)
    const submit = screen.getByRole("button", { name: /checkout/i })
  
    fireEvent.change(firstNameInput, { target: { value: "Bea" } })
    fireEvent.change(lastNameInput, { target: { value: "Del Rosario" } })
    fireEvent.change(addressInput, { target: { value: "17 Sunny Drive" } })
    fireEvent.change(cityInput, { target: { value: "Bellport" } })
    fireEvent.change(stateInput, { target: { value: "NY" } })
    fireEvent.change(zipInput, { target: { value: 11713 } })
    fireEvent.click(submit)

    const successMess = screen.getByTestId(/successMessage/i)
  
    expect(successMess).toBeInTheDocument()
  })