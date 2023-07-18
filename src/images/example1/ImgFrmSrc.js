import texture from "../imgs/Free-Textures-design.jpg";

export default function ImgFrmSrc() {
  return (
    <>
      <div
        style={{
          height: "700px",
          width: "700px",
          backgroundImage:`url(${texture})`,
        }}
      >
        <img src={require("../imgs/logo192.png")} />
        {/* <img src={texture}/> */}
      </div>
    </>
  );
}
