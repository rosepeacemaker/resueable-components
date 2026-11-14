import { GlassButton } from "./components/buttons"

function App() {
  return (
    <GlassButton
      variant="primary"
      size="large"
      onClick={() => alert("Welcome to Rose UI")}
    >
      Explore Rose UI
    </GlassButton>
  );
}

export default App;