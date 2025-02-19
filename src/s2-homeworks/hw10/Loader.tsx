import s from "./Loader.module.css";
import ClipLoader from "react-spinners/ClipLoader";

// export const Loader = () => <div className={s.loader}/>
export const Loader = () => (
  <ClipLoader color="blue" loading={true} size={40} />
);
