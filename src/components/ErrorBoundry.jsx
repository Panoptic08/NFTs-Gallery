import React from 'react';

function ErrorBoundary() {
  return (
    <div className="text-center text-red-500 mt-10">
      <h1>Something went wrong!</h1>
      <p>We can't seem to find the page you're looking for.</p>
    </div>
  );
}

export default ErrorBoundary;
