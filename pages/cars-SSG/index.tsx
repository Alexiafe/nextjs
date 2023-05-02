import { getAllCars } from "@/utils/database";
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
            <Link href={`/cars-SSG/${car.id}`}>
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

export async function getStaticProps() {
  const result = getAllCars();

  return {
    props: { cars: result },
  };
}
