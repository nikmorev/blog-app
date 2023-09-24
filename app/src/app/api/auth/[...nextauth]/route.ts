import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            credentials: {
                email: { type: 'text' },
                password: { type: 'password' }
            },
            async authorize(credentials) {
                console.log(credentials)

                const user = { id: 1, name: "J Smith", email: "jsmith@example.com" }

                if (user) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                }

                return null
            },
            
        }),
    ],
    secret: 'secret',
    session: {
        strategy: 'jwt'
    }
})

type Cridentials = {
    email: string,
    password: string
}

declare module 'next-auth' {
    interface User {
      id: number; // <- here it is
    }
}

export { handler as GET, handler as POST }