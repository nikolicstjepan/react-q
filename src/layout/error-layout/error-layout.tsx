import BaseLayout from "../base-layout";

function ErrorLayout({ children }: { children: React.ReactNode }) {
    return (
        <BaseLayout>
            <div className="error-layout">{children}</div>
        </BaseLayout>
    );
}

export default ErrorLayout;
