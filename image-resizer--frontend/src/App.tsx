import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {} = useForm({
    defaultValues: {
      title: '',
      image: []
    }
  })
  return (
    <div>
      <div className="form_div">
        <form action="" className="form">
          <label htmlFor="">Title</label>
          <input type="text" placeholder="Title" />
          <label>Select Image</label>
          <input type="file" accept="image/*" className="custom-file-input" />
          <input type="submit" />
        </form>
      </div>
      <div>resized image</div>
    </div>
  );
}

export default App;
