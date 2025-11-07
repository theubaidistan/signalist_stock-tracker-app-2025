import {Inngest} from "inngest";

export const inngest=new Inngest({
  id:'signalist',
  signingKey: process.env.INNGEST_SIGNING_KEY,
  ai:{
    gemini:{
      apikey:process.env.GEMINI_API_KEY!,
    }
  }
})
