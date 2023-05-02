import Link from "next/link";

export default function Car({ cars }) {
  return (
    <>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <Link href={`/cars-SSR/${car.id}`}>
              {car.color} {car.id}
              <img src={car.image} width="300px" />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getServerSideProps() {
  const req = await fetch(`http://localhost:3000/api/cars/all`);
  const data = await req.json();

  return {
    props: { cars: data.data },
  };
}
