import { supabase } from "../utils/supabaseClient";
import { uploadImage } from "./storageService";

const TABLE_NAME = "blog";

const normalizeTags = (tags) => {
  if (Array.isArray(tags)) return tags.filter((t) => t && t.trim());
  if (typeof tags === "string") {
    return tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
  }
  return [];
};

const withDefaults = (post) => {
  if (!post) return null;

  return {
    ...post,
    tags: post.tags || [],
    seo_keywords: post.seo_keywords || [],
    schema_markup: post.schema_markup || null,
    featured_image: post.featured_image || null,
    view_count: post.view_count ?? 0,
    likes_count: post.likes_count ?? 0,
  };
};

export const createBlogPost = async (postData, imageFile) => {
  try {
    let featuredImage = postData.featured_image || null;

    if (imageFile) {
      featuredImage = await uploadImage(imageFile, "blog");
    }

    const payload = {
      ...postData,
      excerpt: postData.excerpt ? postData.excerpt.slice(0, 300) : null,
      tags: normalizeTags(postData.tags),
      seo_keywords: normalizeTags(postData.seo_keywords),
      featured_image: featuredImage,
      reading_time: postData.reading_time ?? null,
      status: postData.status || "draft",
    };

    const { data, error } = await supabase
      .from(TABLE_NAME)
      .insert(payload)
      .select("*")
      .single();

    if (error) throw error;
    return withDefaults(data);
  } catch (error) {
    throw new Error(`Error creating blog post: ${error.message}`);
  }
};

export const updateBlogPost = async (id, postData, imageFile) => {
  try {
    let featuredImage = postData.featured_image || null;

    if (imageFile) {
      featuredImage = await uploadImage(imageFile, "blog");
    }

    const payload = {
      ...postData,
      excerpt: postData.excerpt ? postData.excerpt.slice(0, 300) : null,
      tags: normalizeTags(postData.tags),
      seo_keywords: normalizeTags(postData.seo_keywords),
      featured_image: featuredImage,
      reading_time: postData.reading_time ?? null,
    };

    const { data, error } = await supabase
      .from(TABLE_NAME)
      .update(payload)
      .eq("id", id)
      .select("*")
      .single();

    if (error) throw error;
    return withDefaults(data);
  } catch (error) {
    throw new Error(`Error updating blog post: ${error.message}`);
  }
};

export const deleteBlogPost = async (id) => {
  try {
    const { error } = await supabase.from(TABLE_NAME).delete().eq("id", id);
    if (error) throw error;
    return true;
  } catch (error) {
    throw new Error(`Error deleting blog post: ${error.message}`);
  }
};

export const getPublishedPosts = async ({
  page = 1,
  pageSize = 10,
  tag,
  search,
  featuredFirst = true,
} = {}) => {
  try {
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;

    let query = supabase
      .from(TABLE_NAME)
      .select(
        "id, title, slug, excerpt, featured_image, reading_time, tags, is_featured, sort_order, published_at",
        { count: "exact" },
      )
      .eq("status", "published")
      .not("published_at", "is", null);

    if (tag) {
      query = query.contains("tags", [tag]);
    }

    if (search) {
      query = query.or(
        `title.ilike.%${search}%,excerpt.ilike.%${search}%,content.ilike.%${search}%`,
      );
    }

    if (featuredFirst) {
      query = query
        .order("is_featured", { ascending: false })
        .order("sort_order", { ascending: true })
        .order("published_at", { ascending: false });
    } else {
      query = query.order("published_at", { ascending: false });
    }

    const { data, error, count } = await query.range(from, to);

    if (error) throw error;

    return {
      posts: (data || []).map(withDefaults),
      total: count || 0,
      page,
      pageSize,
    };
  } catch (error) {
    throw new Error(`Error fetching blog posts: ${error.message}`);
  }
};

export const getRecentPublishedPosts = async (limit = 3) => {
  const { posts } = await getPublishedPosts({
    page: 1,
    pageSize: limit,
    featuredFirst: true,
  });

  return posts;
};

export const getPostBySlug = async (slug) => {
  try {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select("*")
      .eq("slug", slug)
      .limit(1)
      .maybeSingle();

    if (error) throw error;
    return withDefaults(data);
  } catch (error) {
    throw new Error(`Error fetching blog post: ${error.message}`);
  }
};

export const incrementBlogViewCount = async (id) => {
  try {
    const { error } = await supabase.rpc("increment_blog_view_count", {
      p_blog_id: id,
    });
    if (error) throw error;
  } catch (error) {
    throw new Error(`Error incrementing blog view count: ${error.message}`);
  }
};

export const incrementBlogLikesCount = async (id) => {
  try {
    const { error } = await supabase.rpc("increment_blog_likes_count", {
      p_blog_id: id,
    });
    if (error) throw error;
  } catch (error) {
    throw new Error(`Error incrementing blog likes count: ${error.message}`);
  }
};
