import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllCars, getCarById } from "@/utils/database";

interface CarProps {
  car: {
    id: string;
    color: string;
    image: string;
  };
}

const Car: React.FC<CarProps> = ({ car }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>Cars Server Side Rendering</h1>
      <h1>Hello {id}</h1>
      <div>
        {car.color} {car.id}
      </div>
      <img src={car.image} width="300px" />
    </>
  );
};
export default Car;

export const getStaticProps: GetStaticProps = ({ params }) => {
  if (!params) throw new Error("Missing params");

  const result = getCarById(params.id as string);

  return {
    props: { car: result },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const result = getAllCars();

  const paths = result.map((car) => ({
    params: { id: car.id },
  }));

  return {
    paths,
    fallback: false,
  };
};
