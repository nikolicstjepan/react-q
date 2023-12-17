import ErrorLayout from "@/layout/error-layout";
import useStrings from "@/hooks/use-strings";

function Error() {
    const strings = useStrings();

    return (
        <ErrorLayout>
            <h1>{strings.somethingWentWrong}</h1>
            <p>{strings.pleaseTryAgainLatter}</p>
        </ErrorLayout>
    );
}

export default Error;
