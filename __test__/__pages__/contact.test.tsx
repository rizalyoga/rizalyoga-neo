import { expect, describe, it, beforeEach, afterEach, vi } from "bun:test";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "@/app/components/pages/Contact";

// Mock environment variables for EmailJS
process.env.NEXT_PUBLIC_SERVICE_ID = "mock_service_id";
process.env.NEXT_PUBLIC_TEMPLATE_ID = "mock_template_id";
process.env.NEXT_PUBLIC_PUBLIC_KEY = "mock_public_key";

// Mock the global fetch function
const mockFetch = vi
  .spyOn(globalThis, "fetch")
  .mockImplementation((url: any, init: any) => {
    const bodyStr = init?.body?.toString() || "";
    if (url === "https://api.emailjs.com/api/v1.0/email/send") {
      if (bodyStr.includes("fail@example.com")) {
        return Promise.resolve({
          ok: false,
          status: 500,
          json: () => Promise.resolve({ message: "Failed to send" }),
        } as Response);
      }
      return Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve({ message: "Success" }),
      } as Response);
    }

    return Promise.reject(new Error("Unhandled URL: " + url));
  });

describe("Contact component test", () => {
  beforeEach(() => {
    // Clear mocks before each test
    mockFetch.mockClear();
    render(<Contact />);
  });

  afterEach(() => {
    // No mock.restoreAll() needed for bun:test
  });

  // Helper function to fill the form
  const fillForm = (
    name = "John Doe",
    email = "john.doe@example.com",
    subject = "Inquiry",
    message = "This is a test message with at least 10 characters."
  ) => {
    fireEvent.change(screen.getByLabelText(/Name \*/i), {
      target: { value: name },
    });
    fireEvent.change(screen.getByLabelText(/Email \*/i), {
      target: { value: email },
    });
    fireEvent.change(screen.getByLabelText(/Subject \*/i), {
      target: { value: subject },
    });
    fireEvent.change(screen.getByLabelText(/Message \*/i), {
      target: { value: message },
    });
  };

  it("should render the contact section and form elements", () => {
    // Check for main title
    expect(
      screen.getByRole("heading", { name: /CONTACT/i })
    ).toBeInTheDocument();

    // Check for form fields
    expect(screen.getByLabelText(/Name \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Subject \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message \*/i)).toBeInTheDocument();

    // Check for submit button
    const submitButton = screen.getByRole("button", { name: /SEND MESSAGE/i });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeEnabled();

    // Check for initial error messages (should not be present)
    expect(
      screen.queryByText(/Name must be at least 2 characters/i)
    ).toBeNull();
  });

  it("should display validation errors for empty fields on submit", async () => {
    const submitButton = screen.getByRole("button", { name: /SEND MESSAGE/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText(/Name must be at least 2 characters/i)
      ).toBeInTheDocument();
      expect(screen.getByText(/Invalid email address/i)).toBeInTheDocument();
      expect(
        screen.getByText(/Subject must be at least 3 characters/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Message must be at least 10 characters/i)
      ).toBeInTheDocument();
    });
  });

  it("should display validation errors for invalid email format", async () => {
    fillForm("John Doe", "invalid-email", "Subject", "This is a test message.");
    fireEvent.click(screen.getByRole("button", { name: /SEND MESSAGE/i }));

    await waitFor(() => {
      expect(screen.getByText(/Invalid email address/i)).toBeInTheDocument();
    });
  });

  it("should display validation errors for too short inputs", async () => {
    fillForm("J", "john.doe@example.com", "Su", "Too short");
    fireEvent.click(screen.getByRole("button", { name: /SEND MESSAGE/i }));

    await waitFor(() => {
      expect(
        screen.getByText(/Name must be at least 2 characters/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Subject must be at least 3 characters/i)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Message must be at least 10 characters/i)
      ).toBeInTheDocument();
    });
  });

  it("should enable and disable the submit button correctly during submission", async () => {
    fillForm(); // Fill with valid data
    const submitButton = screen.getByRole("button", { name: /SEND MESSAGE/i });

    // Click submit
    fireEvent.click(submitButton);

    // Button should be disabled and show "SENDING..."
    await waitFor(() => {
      expect(submitButton).toBeDisabled();
      expect(submitButton).toHaveTextContent(/SENDING.../i);
    });

    // After submission (success mock), button should be re-enabled and show "SEND MESSAGE"
    await waitFor(() => {
      expect(submitButton).toBeEnabled();
      expect(submitButton).toHaveTextContent(/SEND MESSAGE/i);
    });
  });

  it("should handle successful form submission", async () => {
    fillForm(); // Fill with valid data
    const submitButton = screen.getByRole("button", { name: /SEND MESSAGE/i });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledTimes(1);
      expect(mockFetch).toHaveBeenCalledWith(
        "https://api.emailjs.com/api/v1.0/email/send",
        expect.objectContaining({
          method: "POST",
          body: expect.stringContaining('"service_id":"mock_service_id"'),
        })
      );
    });

    // Verify form reset
    await waitFor(() => {
      expect(screen.getByLabelText(/Name \*/i)).toHaveValue("");
      expect(screen.getByLabelText(/Email \*/i)).toHaveValue("");
      expect(screen.getByLabelText(/Subject \*/i)).toHaveValue("");
      expect(screen.getByLabelText(/Message \*/i)).toHaveValue("");
    });
  });

  it("should handle failed form submission", async () => {
    fillForm(
      "John Doe",
      "fail@example.com",
      "Subject",
      "This is a test message."
    ); // Use a specific email to trigger fetch mock failure
    const submitButton = screen.getByRole("button", { name: /SEND MESSAGE/i });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledTimes(1);
    });

    // Verify form fields are NOT reset on failure
    await waitFor(() => {
      expect(screen.getByLabelText(/Name \*/i)).toHaveValue("John Doe");
      expect(screen.getByLabelText(/Email \*/i)).toHaveValue(
        "fail@example.com"
      );
    });
  });
});
