import React, { useContext, useEffect } from "react";
import { LogMessageContext } from "./log-message-context";

type WithLoggingProps = {
    logMessage?: string;
};

export default function withLogging<T>(
    WrappedComponent: React.ComponentType<T>,
    componentName: string
): React.FC<T & WithLoggingProps> {
    const WithLogging: React.FC<T & WithLoggingProps> = (props: T & WithLoggingProps) => {
        const { logMessage } = props;

        const message = logMessage || useContext(LogMessageContext);

        useEffect(() => {
            console.log(`${message} ${componentName}`);
        }, [message, componentName]);

        return <WrappedComponent {...props} />;
    };

    return WithLogging;
}
