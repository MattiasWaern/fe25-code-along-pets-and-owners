import useFetch from '../utils/useFetch';
import HeroImage from "../parts/HeroImage";

PetsAndOwners.route = {
  path: '/pets-and-owners',
  label: 'Pets & owners',
  index: 3
};

export default function PetsAndOwners() {

  const [pets, petOwners, loading] = useFetch(
    '/api/pets',
    '/api/petOwners'
  );

  return !loading && <>
    <HeroImage
      src="dog-and-owner.webp"
      alt="A dog and its owner"
      heading="Pets & owners"
    />
    <p>Here we use our own custom hook to load all data.</p>
    <h3>Pets</h3>
    <section className="pets">
      {pets.map(({ id, name, species }) => <div key={id}>
        <h4>{name}</h4>
        <p>{name} is a {species}.</p>
      </div>)}
    </section>
    <h3>Pet owners</h3>
    <section className="pet-owners">
      {petOwners.map(({ id, name, email }) => <div key={id}>
        <h4>{name}</h4>
        <p>{name} has the email <a href={`mailto:${email}`}>{email}</a>.</p>
      </div>)}
    </section>
  </>;
}