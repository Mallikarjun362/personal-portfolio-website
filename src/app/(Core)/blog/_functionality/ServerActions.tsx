"use server";
import { getMainDBModels } from "@/database/1_mongodb/MainDB/Connection";

// PRIMITIVE SERVER ACTIONS
// CREATE NEW
export const createNewBlogPost = async ({}: { title: string }) => {
};

// DELETE EXISTING
export const deleteBlogPost = async () => {};

// UPDATE EXISTING
export const updateBlogPost = async () => {};

// JUST READ EXISTING
export const getAllBlogPosts = async () => {};

export const getRecentBlogPosts = async () => {};

export const getBlogPostDetails_Public = () => {};

export const getBlogPostDetails_Owner = () => {};

// FORM ACTIONS
// CREATE NEW
export const formAction_createNewBlogPost = async () => {};
