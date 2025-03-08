import { useForm } from "react-hook-form";
import axios from "axios";

const CreateBlog = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios({
        method: 'post',
        url: `${import.meta.env.VITE_BURL}/newpost`,
        data: data,
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log("Blog created:", response.data);
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  return (
    <div className="mt-20 flex flex-col items-center">
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div>
      <label>title : </label>
        <input
          {...register("title", { required: "Name is required" })}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div>
      <label>Description : </label>
        <input
          {...register("desp", { required: "description is required" })}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div>
      <label>Content : </label>
        <input
          {...register("content", { required: "content is required" })}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default CreateBlog;