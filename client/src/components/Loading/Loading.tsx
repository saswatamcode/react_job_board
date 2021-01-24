import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Loader
        type="Puff"
        color="#1edfd5"
        height={200}
        width={200}
        timeout={3000}
      />
    </div>
  );
};

export default Loading;
