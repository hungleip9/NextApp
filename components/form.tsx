import React from "react";

export default React.memo(function Form({
  submit,
  total,
}: {
  submit: () => void;
  total: number;
}) {
  console.log("Render form");
  return (
    <>
      <p>Total: {total}</p>
      <div>Form</div>
      <input type="text" id="name" />
      <label htmlFor="name">Name</label>
      <button className="block border" onClick={submit}>
        Submit
      </button>
    </>
  );
});
