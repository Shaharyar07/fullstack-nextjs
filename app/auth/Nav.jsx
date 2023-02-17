import Link from "next/link";

export default async function Nav() {
  return (
    <nav className='flex justify-between items-center py-8'>
      <Link href='/'>
        <h1 className='font-bold '>Send It</h1>
      </Link>
    </nav>
  );
}
