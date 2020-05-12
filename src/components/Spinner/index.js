import React from "react";

const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "calc(100vh - 120px)"
}

export default () => (
    <div style={styles} >
        <div className="spinner-border text-primary" style={{width: 50, height: 50}} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
)   