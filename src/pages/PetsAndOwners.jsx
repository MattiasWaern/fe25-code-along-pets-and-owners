import Lorem from "../parts/Lorem";

PetsAndOwners.route = {
  path: '/pets-and-owners',
  label: 'Pets & owners',
  index: 3
};

export default function PetsAndOwners() {
  return <>
    <h2>Pets & owners</h2>
    <p>Here will show pets and pet owners.</p>
    <Lorem paragraphCount={3} />
  </>;
}