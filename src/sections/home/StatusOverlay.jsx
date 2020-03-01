/* * */
/* IMPORTS */
import React from "react";

import Player from "../../components/animation/Player";
import animation from "../../components/animation/files/happy-dog.json";

/* * */
/* * * * */
export default function StatusOverlay({ loading, success, error, location }) {
  return (
    (loading || success || error) && (
      <div
        className="loading-overlay"
        onClick={() => error && (window.location = "/" + location)}
      >
        <div className="display-card loading-card text-center sh-light animate p-3 my-3">
          {/* If status is Loading */}
          {loading && (
            <Player animationData={animation} height={200} align="center" />
          )}

          {/* If status is Success */}
          {success && (
            <React.Fragment>
              <h1 style={{ fontSize: 100 }} className="mt-2">
                <span role="img" aria-label="Nice!">
                  👍
                </span>
              </h1>
              <h2 className="my-4">Obrigado!</h2>
            </React.Fragment>
          )}

          {/* If status is Error */}
          {error && (
            <React.Fragment>
              <h1 style={{ fontSize: 80 }} className="mt-2">
                <span role="img" aria-label="An Error Occurred">
                  ❌
                </span>
              </h1>
              <h2 className="mt-4">Tente novamente.</h2>
              <p className="mb-4">{error}</p>
            </React.Fragment>
          )}
        </div>
      </div>
    )
  );
}
