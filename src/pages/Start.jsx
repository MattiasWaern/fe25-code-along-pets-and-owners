import Lorem from "../parts/Lorem";

Start.route = {
  path: '/',
  label: 'Start',
  index: 1
};

export default function Start() {
  return <>
    <h2>Welcome!</h2>
    <Lorem paragraphCount={4} />
  </>;
}