import React, { Component, ErrorInfo, ReactNode } from "react";
import { withTranslation, WithTranslation } from "react-i18next";

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
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
              >
                <span className="material-icons text-sm mr-2">refresh</span>
                {t("components.errorBoundary.refresh")}
              </button>
              <a
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold rounded-lg border transition-colors"
                style={{
                  color: "var(--color-text)",
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                {t("components.errorBoundary.returnHome")}
              </a>
            </div>
          </div>
        </div>
      );
    }

    return <>{this.props.children}</>;
  }
}

export default withTranslation()(ErrorBoundary);
