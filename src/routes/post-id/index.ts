import withLogging from "@/lib/with-logging";

import Post from "./post-id";
import PostLoadingError from "./error";
import loader from "./loader";

export default withLogging(Post, "Post");
export const ErrorElement = withLogging(PostLoadingError, "PostLoadingError");
export { loader };
