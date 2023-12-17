import withLogging from "@/lib/with-logging";

import Posts from "./posts";
import PostsLoadingError from "./error";
import loader from "./loader";

export default withLogging(Posts, "Posts");
export const ErrorElement = withLogging(PostsLoadingError, "PostsLoadingError");
export { loader };
