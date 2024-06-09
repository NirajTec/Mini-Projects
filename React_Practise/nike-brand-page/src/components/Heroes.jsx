import React from "react";
import "./Navigation.css";
export const Heroes = () => {
  return (
    <main className="global_container hero">
      <div className="hero_tx">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero_btn">
          <button type="button" className="btn btn-danger">
            Danger
          </button>
          <button type="button" className="btn btn-outline-secondary">
            Secondary
          </button>
        </div>
      </div>
      <div className="hero_im">
        <img src="/images/shoe_image.png" alt="shoe img" />
      </div>
    </main>
  );
};
