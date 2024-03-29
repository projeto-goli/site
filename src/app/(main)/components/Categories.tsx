interface Categoria {
  id: string
  nome: string
  slug: string
}

async function getCategories() {
  if (process.env.FIRST_BUILD === "true") return []
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/categorias`)
  const categorias: Categoria[] = await res.json()

  return categorias
}

const Categories = async () => {
  const categorias = await getCategories()

  return (
    <div className="w-full md:w-1/3">
      <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900">
            Categorias
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">
              {categorias.length}
            </span>
          </h5>
        </div>
        <div>
          <ul role="list" className="divide-y divide-gray-200">
            {categorias.map(categoria => (
              <li className="py-3 sm:py-4" key={categoria.id}>
                <a href={`/pesquisar?gooli-termos[refinementList][categoria][0]=${categoria.nome}`} className="flex items-center">
                  <span className="ml-4 text-sm font-medium text-gray-900">
                    {categoria.nome}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Categories
