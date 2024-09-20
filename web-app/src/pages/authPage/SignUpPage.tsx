import { useState, ChangeEvent, FormEvent } from "react";
// import axios from "axios";
import { apiCall } from "../../utils/ApiClient";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      interface ApiResponse {
        success: boolean;
      }

      const response = await apiCall<ApiResponse>({
        url: "/api/auth/signup",
        method: "POST",
        data: formData,
      });
      console.log("Response:", response);
      if (response?.success) {
        toast.success("Verify Your Email and then proceed to login");
        navigate("/login");
        setFormData({
          name: "",
          email: "",
          password: "",
        });
      }
    } catch (err: any) {
      if (err.response?.data?.message) {
        toast.error(err.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container h-75 d-flex justify-content-center align-content-center"
      style={{ minHeight: "80vh" }}
    >
      <form
        className="d-flex flex-column justify-content-center align-content-center"
        style={{ minWidth: "20vw" }}
        onSubmit={handleSubmit} // Form should handle submit here
      >
        <h3 className="text-white w-100 text-center">Sign Up</h3>
        <div className="mb-3">
          <label className="text-white mb-2">Full name</label>
          <input
            type="text"
            name="name"
            className="form-control py-2"
            placeholder="First name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="text-white mb-2">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control py-2"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="text-white mb-2">Password</label>
          <input
            type="password"
            name="password"
            className="form-control py-2"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary py-2">
            {loading ? (
              <div className="w-100 text-center py-3 ">
                <Spinner animation="border" variant="light" />
              </div>
            ) : (
              <>Submit</>
            )}
          </button>
          <div
            className="my-2 text-white"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Have an account?{"  "}
            <span
              className="text-primary text-decoration-underline mx-1"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
