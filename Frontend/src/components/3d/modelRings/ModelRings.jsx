
import "./ModelRings.scss";

function ModelRings({ layer = "back" }) {
  return (
    <div className={`model-rings model-rings--${layer}`}>
      <div className="model-rings__ring model-rings__ring--outer" />
      <div className="model-rings__ring model-rings__ring--middle" />
      <div className="model-rings__ring model-rings__ring--inner" />
    </div>
  );
}

export default ModelRings;
