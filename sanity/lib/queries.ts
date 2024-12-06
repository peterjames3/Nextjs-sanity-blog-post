import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "post"] {
_id,
  _createdAt,
  title,
  slug,
  mainImage,
  "imageURL": mainImage.asset->url,
  "authorName": author->name,
   "authorImage": author->image.asset->url,
    "categories": categories[]->title
}`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    _id,title, description, mainImage, body,"authorName": author->name, "authorImage": author->image.asset->url, "categories": categories[]->title
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

  // Get the latest posts by published date, limited to the first 5 posts
  export const latestPostsQuery = groq`
  *[_type == "post"] | order(_createdAt desc) [0...8] {
  _id,
    _createdAt,
    title,
    slug,
    body,
    mainImage,
    "imageURL": mainImage.asset->url,
    "authorName": author->name,
     "authorImage": author->image.asset->url,
    "categories": categories[]->title
    
  }
`;
// filtering  posts by categort title
export const techPostsQuery = groq`*[_type == "post" && "Frontend  Technologies" in categories[]->title] | order(_createdAt, desc)[0...5]{
_id,  
_createdAt,
   title,
   slug,
       mainImage,
    "imageURL": mainImage.asset->url,
    "authorName": author->name,
     "authorImage": author->image.asset->url,
     "categories": categories[]->title

}`

export const newsExpertPostsQuery = groq`*[_type == "post" && "News & Experts" in categories[]->title] | order(_createdAt, desc){
_id,
_createdAt,
title,
slug,
mainImage,
    "imageURL": mainImage.asset->url,
    "authorName": author->name,
     "authorImage": author->image.asset->url,

}`

export const healthWellnessPostsQuery = groq ` *[_type == "post" && "Health & Wellness" in categories[]->title] | order(_createdAt, desc){
_id,
_createdAt,
title,
slug,
body,
mainImage,
    "imageURL": mainImage.asset->url,
    "authorName": author->name,
    "authorImage": author->image.asset->url,
    

}`