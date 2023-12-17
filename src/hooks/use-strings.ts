const strings = {
    en: {
        posts: "Posts",
        comments: "Comments",
        search: "Search by user name",
        noPosts: "No posts found",
        allPosts: "All posts",
        somethingWentWrong: "Something went wrong",
        pleaseTryAgainLatter: "Please try again latter",
        anonymous: "Anonymous",
        anonymousShort: "AN",
        noComments: "No comments found",
    },
};

function useStrings(lang?: keyof typeof strings) {
    return strings[lang || "en"];
}

export default useStrings;
