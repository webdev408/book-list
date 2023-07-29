import { useState } from "react";

const Form = ({input, edit, handleChange,handleSubmit}) => {

	return (
    <div>
      <h1 className="my-4 text-center">Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={input.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            className="form-control"
            name="author"
            value={input.author}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            type="text"
            className="form-control mb-3"
            name="description"
            value={input.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="form-control btn btn-primary">
          {edit ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
}
export default Form;