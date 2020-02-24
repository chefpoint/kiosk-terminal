/* * */
/* IMPORTS */
import React from "react";

import Player from "../elements/animation/Player";
import animation from "../elements/animation/files/happy-dog.json";

/* * */
/* * * * */
function StatusOverlay({ loading, success, error }) {
  return (
    (loading || success || error) && (
      <div
        className="loading-overlay"
        onClick={() => error && (window.location = "/")}
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
              <h3 className="mb-4">Try again.</h3>
            </React.Fragment>
          )}
        </div>
      </div>
    )
  );
}

/* * */
export default StatusOverlay;
