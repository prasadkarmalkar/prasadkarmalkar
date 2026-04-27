import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const resend = new Resend(process.env.RESEND_API)

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'prasadkarmalkar2020@gmail.com',
        subject: `Got message from ${name}`,
        html: `
        Name: ${name} <br>
        Email: ${email} <br>
        Message:
        <p>${message}</p>`,
    })

    return NextResponse.json({ success: true })
}
