import { ReactPainter } from "react-painter";

const Drawable = () => (
  <ReactPainter
    width={300}
    height={300}
    onSave={(blob) => console.log(blob)}
    render={({ triggerSave, canvas }) => (
      <div>
        <button onClick={triggerSave}>Save Canvas</button>
        <div>{canvas}</div>
      </div>
    )}
  />
);

export default Drawable;
