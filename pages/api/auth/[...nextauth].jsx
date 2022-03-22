import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "./lib/mongodb"
import GoogleProvider from "next-auth/providers/google";
import Auth0Provider from "next-auth/providers/auth0";

// import { FirebaseAdapter } from "@next-auth/firebase-adapter"
// import { getStorage } from "firebase/storage";
// import { initializeApp, getApps, getApp } from "firebase/app";
// import {
//     getFirestore,
//     collection,
//     query,
//     getDocs,
//     where,
//     limit,
//     doc,
//     getDoc,
//     addDoc,
//     updateDoc,
//     deleteDoc,
//     runTransaction,
// } from "firebase/firestore";
// const firebaseConfig = {
//     apiKey: "AIzaSyAH0F6rxLjI_FKxFlxUkDaLsgFUzqT656g",
//     authDomain: "next-auth-final.firebaseapp.com",
//     projectId: "next-auth-final",
//     storageBucket: "next-auth-final.appspot.com",
//     messagingSenderId: "732044732167",
//     appId: "1:732044732167:web:0871e8ae71dfe953cd07a2"
// };

// const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

// const db = getFirestore(app);
// const storage = getStorage(app);

// export { app, db, storage };

export default NextAuth({
    // Configure one or more authentication providers
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        // ...add more providers here
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        Auth0Provider({
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            issuer: process.env.AUTH0_ISSUER
        }),
    ],
    pages: {
        signIn: '/signin'
    },
    secret: 'secret'

    // adapter: FirebaseAdapter({
    //     db,
    //     collection,
    //     query,
    //     getDocs,
    //     where,
    //     limit,
    //     doc,
    //     getDoc,
    //     addDoc,
    //     updateDoc,
    //     deleteDoc,
    //     runTransaction,
    // }),
})