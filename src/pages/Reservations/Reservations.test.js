import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Reservations from "./Reservations";
import "@testing-library/jest-dom";

describe("Reservations component", () => {
  test("renders correctly", () => {
    render(<Reservations />);
    expect(screen.getByText("Reservations")).toBeInTheDocument();
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone Number")).toBeInTheDocument();
    expect(screen.getByLabelText("Number of People")).toBeInTheDocument();
  });

  test("validates form correctly", () => {
    render(<Reservations />);
    
    // Attempt to submit without filling out form
    fireEvent.click(screen.getByText("Submit Reservation"));
    expect(screen.getByText("Name is required.")).toBeInTheDocument();
    expect(screen.getByText("Phone number is required.")).toBeInTheDocument();
    
    // Fill out form partially
    fireEvent.change(screen.getByLabelText("Name"), { target: { value: "John Doe" } });
    fireEvent.click(screen.getByText("Submit Reservation"));
    expect(screen.queryByText("Name is required.")).not.toBeInTheDocument();
    expect(screen.getByText("Phone number is required.")).toBeInTheDocument();
  });

  test("submits form correctly", () => {
    render(<Reservations />);
    
    const consoleSpy = jest.spyOn(console, 'log');
    
    // Fill out form
    fireEvent.change(screen.getByLabelText("Name"), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText("Phone Number"), { target: { value: "1234567890" } });
    
    // Submit form
    fireEvent.click(screen.getByText("Submit Reservation"));
    
    expect(consoleSpy).toHaveBeenCalledWith("Form data submitted:", {
      name: "John Doe",
      phone: "1234567890",
      peopleCount: 1,
    });
    
    consoleSpy.mockRestore();
  });
});
