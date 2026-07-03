import { NextResponse } from "next/server"
import { Resend } from "resend"
import { contactSchema } from "@/lib/validations"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Server-side Zod validation
    const result = contactSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: "Validation failed", details: result.error.format() },
        { status: 400 }
      )
    }

    const { name, email, company, message } = result.data

    const apiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_TO_EMAIL || "hello@firmname.com"

    // If API key is missing or is the placeholder, mock successful delivery
    if (!apiKey || apiKey === "your_resend_api_key") {
      console.warn("API Key for Resend is not configured. Mocking successful submission.")
      console.log("Mock Email Payload:", {
        to: toEmail,
        subject: `New Contact Request from ${name}`,
        body: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\nMessage: ${message}`
      })
      return NextResponse.json({ success: true, mocked: true })
    }

    const resend = new Resend(apiKey)

    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: toEmail,
      subject: `New Engagement Inquiry - ${name}`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company || "N/A"}

Message:
${message}
      `,
    })

    if (error) {
      console.error("Resend API error:", error)
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (err) {
    console.error("Internal API error:", err)
    const errorMessage = err instanceof Error ? err.message : "Internal server error"
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    )
  }
}
