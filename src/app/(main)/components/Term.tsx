import Link from "next/link"

interface Props {
  term: string
  slug: string
  description: string
  video: boolean
  categories?: string[]
  definicoes: number
}

const Term: React.FC<Props> = ({ term, definicoes, slug, description, categories, video }) => {
  return  (
    <Link href={`/termos/${slug}`}>
      <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md mt-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">{term}</h2>
        <p className="font-light text-gray-500">{description}</p>
        {definicoes > 1 && (
          <div className="flex justify-between items-center mt-2">
            <div
              className="inline-flex items-center font-medium text-primary-600"
            >
              {definicoes === 2 ? "Mais uma definição disponivel" : `Mais ${definicoes} definições disponíveis`}
              <svg
                className="ml-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        )}
        {(video || (categories?.length || 0) > 0 && categories?.[0]) && (
          <div className="flex items-center mt-3 text-gray-500 gap-2">
            {video && (
              <span className="bg-blue-700 text-gray-100 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
                <svg
                  className="mr-1 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
                Contem vídeo
              </span>
            )}
            {categories?.map(category => (
              <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded" key={category}>
                {category}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  )
}

export default Term
