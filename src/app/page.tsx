import Link from "next/link";


export default function Home() {
  return (
    <>
      <h1>Hola mundo</h1>

      <ul>
        <li>      <Link
          href={'/order'}
        >
          Order
        </Link></li>
        <li>    <Link
          href={'/admin/kitchen'}
        >
          Kitchen
        </Link></li>

      </ul>

    </>
  );
}
