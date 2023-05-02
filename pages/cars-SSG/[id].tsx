// import { useRouter } from "next/router";
// import { GetStaticProps, GetStaticPaths } from "next";

// interface CarProps {
//   car: {
//     id: string;
//     color: string;
//     image: string;
//   };
// }

// const Car: React.FC<CarProps> = ({ car }) => {
//   const router = useRouter();
//   const { id } = router.query;

//   return (
//     <>
//       <h1>Cars Static Side Gereration</h1>
//       <h1>Hello {id}</h1>
//       <div>
//         {car.color} {car.id}
//       </div>
//       <img src={car.image} width="300px" />
//     </>
//   );
// };
// export default Car;

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   if (!params) throw new Error("Missing params");

//   const req = await fetch(`http://localhost:3000/${params.id}.json`);
//   const data = await req.json();

//   return {
//     props: { car: data },
//   };
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const req = await fetch(`http://localhost:3000/cars.json`);
//   const data = await req.json();

//   const paths = data.map((car: CarProps) => {
//     return { params: { id: car } };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };
