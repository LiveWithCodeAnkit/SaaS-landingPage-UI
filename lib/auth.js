import Credentials from "next-auth/providers/credentials";
import { NextResponse } from "next/server";
const API_ENDPOINT = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`;

export const authOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {},
      async authorize(credentials, request) {
        const { email, password } = credentials;
        console.log(credentials, "credentials");

        try {
          const response = await fetch(API_ENDPOINT, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });

          if (!response.ok) {
            const data = await response.json();
            console.log(data, "data");
            throw new Error(data?.message);
          }

          const user = await response.json();
          console.log(user, "user");
          const userRole = user?.data?.userId?.role;
          const userFirstName = user?.data?.userId?.firstName;
          const userLastName = user?.data?.userId?.lastName;
          const userEmail = user?.data?.userId?.email;
          const userAvatar = user?.data?.userId?.avatar;
          const permissionId = user?.data?.userId?.permissionId;
          const jwt = user.token;

          return {
            ...credentials,
            jwt,
            role: userRole,
            userFirstName,
            userLastName,
            userEmail,
            userAvatar,
            permissionId,
          };
        } catch (error) {
          throw new Error(error?.message);
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.jwt = token.jwt;
        session.role = token.role;
        session.userFirstName = token.userFirstName;
        session.userLastName = token.userLastName;
        session.userEmail = token.userEmail;
        session.userAvatar = token.userAvatar;
        session.permissionId = token.permissionId;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          jwt: user.jwt,
          role: user.role,
          userFirstName: user.userFirstName,
          userLastName: user.userLastName,
          userEmail: user.userEmail,
          userAvatar: user.userAvatar,
          permissionId: user.permissionId,
        };
      }
      return token;
    },
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV !== "production",
};
