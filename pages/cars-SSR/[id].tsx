import { useRouter } from "next/router";

export default function Car({ car }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>Hello {id}</h1>
      <div>
        {car.color} {car.id}
      </div>
      <img src={car.image} width="300px" />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const req = await fetch(`http://localhost:3000/api/cars/${params.id}`);
  const data = await req.json();

  return {
    props: { car: data.result },
  };
}
