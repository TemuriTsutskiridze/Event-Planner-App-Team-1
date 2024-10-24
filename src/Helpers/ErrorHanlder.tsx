import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../Context/useAuth";

export const handleError = (error: any) => {
  if (axios.isAxiosError(error)) {
    const { setErr } = useAuth();
    var err = error.response;
    console.log(err);
    setErr(err);
    if (Array.isArray(err?.data.errors)) {
      for (let val of err.data.errors) {
        toast.warning(val.description);
      }
    } else if (typeof err?.data.errors === "object") {
      for (let e in err?.data.errors) {
        toast.warning(err.data.errors[e][0]);
      }
    } else if (err?.data) {
      toast.warning(err.data);
    } else if (err?.status == 401) {
      toast.warning("Please login");
      window.history.pushState({}, "LoginPage", "/login");
    } else if (err) {
      toast.warning(err?.data);
    }
  }
};
