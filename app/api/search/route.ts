import { NextResponse } from 'next/server'
import algoliasearch from 'algoliasearch/lite'

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
  process.env.ALGOLIA_SEARCH_ADMIN_KEY || ''
)

const index = client.initIndex('panw_content')

export async function POST(req: Request) {
  try {
    const { query } = await req.json()

    if (!query) {
      return NextResponse.json({ hits: [] })
    }

    const { hits } = await index.search(query, {
      hitsPerPage: 10,
    })

    return NextResponse.json({ hits })
  } catch (error) {
    console.error('Algolia search error:', error)
    return NextResponse.json({ error: 'Search failed' }, { status: 500 })
  }
}
