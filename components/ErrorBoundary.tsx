import React, { Component, ErrorInfo, ReactNode } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import Button from "./Button";

interface Props extends WithTranslation {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  declare public readonly props: Readonly<Props>;

  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render(): ReactNode {
    const { t } = this.props;

    if (this.state.hasError) {
      return (
        <div
          className="min-h-screen flex items-center justify-center px-6"
          style={{ backgroundColor: "var(--color-bg-alt)" }}
        >
          <div className="text-center max-w-lg">
            <div
              className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 animate-pulse"
              style={{
                backgroundColor: "var(--color-primary-light)",
                color: "var(--color-primary)",
              }}
            >
              <span className="material-icons text-4xl">monitor_heart</span>
            </div>
            <h1
              className="text-3xl font-serif font-bold mb-4"
              style={{ color: "var(--color-text)" }}
            >
              {t("components.errorBoundary.title")}
            </h1>
            <p
              className="mb-8 leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              {t("components.errorBoundary.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => window.location.reload()} icon="refresh">
                {t("components.errorBoundary.refresh")}
              </Button>
              <Button to="/" variant="secondary">
                {t("components.errorBoundary.returnHome")}
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return <>{this.props.children}</>;
  }
}

export default withTranslation()(ErrorBoundary);
