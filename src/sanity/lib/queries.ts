import { defineQuery } from 'next-sanity'

export const settingsQuery = defineQuery(`*[_type == "settings"][0]`)
export const homeQuery = defineQuery(`*[_type == "home" && language == $language][0]`)

const postFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{"name": coalesce(name, "Anonymous"), picture},
`

export const heroQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) [0] {
    content,
    ${postFields}
  }
`)

export const moreStoriesQuery = defineQuery(`
  *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
    ${postFields}
  }
`)

export const postQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug] [0] {
    content,
    ${postFields}
  }
`)

export const messagesQuery = defineQuery(`
  *[_type == "message"] {
    key,
    "value": value[_key == $language][0].value
  }
`)

// Query that will fetch FAQs (faq), questions and answers are internationalized
export const faqQuery = defineQuery(`
  *[_type == "faq"] {
    "question": question[_key == $language][0].value,
    "answer": answer[_key == $language][0].value
  }
`)
