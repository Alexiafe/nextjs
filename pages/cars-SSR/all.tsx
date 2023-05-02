import Link from "next/link";

interface CarProps {
  cars: {
    id: string;
    color: string;
    image: string;
  }[];
}

const Car: React.FC<CarProps> = ({ cars }) => {
  return (
    <>
      <h1>Cars Server Side Rendering</h1>
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
};
export default Car;

export async function getServerSideProps() {
  const req = await fetch(`/api/cars/all`);
  const data = await req.json();

  return {
    props: { cars: data.data },
  };
}
