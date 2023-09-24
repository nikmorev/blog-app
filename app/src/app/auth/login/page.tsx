'use client'
import { ChangeEvent } from "react"
import { getCsrfToken, signIn } from 'next-auth/react'

export default function LoginPage() {

    const submit = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        // const csrfTokenResponse = await fetch('/api/auth/csrf')
        // const csrfToken = await csrfTokenResponse.json()

        const csrfToken = await getCsrfToken()
        console.log({csrfToken})

        const fields = e.target.elements

        // const loginResult = await fetch('')

        console.log(fields)
        
        const signin = await signIn('credentials', {
            email: 'dsf@fdf.fdf',
            password: '2434'
        })

        console.log(signin)
        // fetch('/api/auth/signin')
    }

    return (
        <form onSubmit={submit}>
            <input name="email" type="email" placeholder="example@email.com"/>
            <input name="password" type="password" placeholder="password"/>
            <button>Submit</button>
        </form>
    )
}