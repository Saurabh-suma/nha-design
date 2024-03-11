import React from "react";

const Loader = ({ open }) => {
  return (
    <>
      {open && (
        <div className="spinner-overlay">
          <div className="spinner-border text-success" role="status">
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
