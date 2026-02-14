
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
          <div className="text-center max-w-lg">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-50 text-red-500 mb-6 animate-pulse">
              <span className="material-icons text-4xl">monitor_heart</span>
            </div>
            <h1 className="text-3xl font-serif font-bold text-slate-900 mb-4">Something went wrong</h1>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We encountered an unexpected error. Our technical team has been notified. Please try refreshing the page or return home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.reload()} 
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
              >
                <span className="material-icons text-sm mr-2">refresh</span> Refresh Page
              </button>
              <a href="/" className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                Return Home
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
