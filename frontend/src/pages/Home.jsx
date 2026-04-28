import Button from "../components/ui/Button";

export default function Home() {
  const handleClick = () => {
    alert("Button clicked");
  };

  return (
    <div>
      <h1>Home</h1>
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
}