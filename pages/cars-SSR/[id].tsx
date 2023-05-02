import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (!params) throw new Error("Missing params");

  const req = await fetch(`${process.env.VERCEL_URL}/api/cars/${params.id}`);
  const data = await req.json();

  return {
    props: { car: data.result },
  };
};
