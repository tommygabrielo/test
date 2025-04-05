import Link from 'next/link'

export default function Page404() {
  return (
    <div className="w-full h-screen flex flex-col gap-4 items-center justify-center" >
      <h1 className="text-3xl">
        Article non trouvé
      </h1>
      <Link href="/" className="hover:underline hover:text-gray-800 text-gray-400">
        Revenir à l&apos;accueil
      </Link>
    </div>
  )
}