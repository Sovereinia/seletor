// src/pages/Selector.tsx
import { useState, useEffect, ChangeEvent } from 'react'
import featuresData from '../data/features.json'
import platformsData from '../data/platforms.json'
import weights from '../data/ranking-weights.json'
import * as Icons from 'lucide-react'

type Feature = { id: string; label: string; tooltip?: string; icon?: string }
type FeaturesJSON = Record<string, Feature[]>
type Platform = {
  name: string
  url: string
  categories: string[]
  features: string[]
  ranking: Record<string, number>
  logo?: string
  description?: string
}

export default function Selector() {
  const [category, setCategory] = useState<string | null>(null)
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    const saved = localStorage.getItem('category')
    if (saved) setCategory(saved)
  }, [])

  if (!category) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="space-x-4">
          <button
            className="px-4 py-2 border rounded"
            onClick={() => {
              localStorage.setItem('category', 'social')
              setCategory('social')
            }}
          >
            Social Networks
          </button>
          <button
            className="px-4 py-2 border rounded"
            onClick={() => {
              localStorage.setItem('category', 'professional')
              setCategory('professional')
            }}
          >
            Professional Solutions
          </button>
        </div>
      </div>
    )
  }

  function toggleFeature(e: ChangeEvent<HTMLInputElement>) {
    const next = new Set(selected)
    if (e.target.checked) next.add(e.target.value)
    else next.delete(e.target.value)
    setSelected(next)
  }

  const processed = (platformsData as Platform[])
    .filter((p) => p.categories.includes(category!))
    .map((p) => {
      const matchCount = [...selected].filter((f) =>
        p.features.includes(f)
      ).length
      const score = Object.entries(p.ranking).reduce(
        (sum, [key, val]) => sum + (weights as any)[key] * val,
        0
      )
      return { ...p, matchCount, score }
    })
    .filter((p) => selected.size === 0 || p.matchCount > 0)
    .sort((a, b) => {
      if (b.matchCount !== a.matchCount) return b.matchCount - a.matchCount
      return b.score - a.score
    })

  const groups = Object.entries(featuresData as FeaturesJSON)
    .map(([group, feats]) => ({
      group,
      feats: feats.filter((f) =>
        f.label.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((g) => g.feats.length > 0)

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/3 p-4 bg-gray-50 dark:bg-gray-800 space-y-6">
        <input
          type="text"
          placeholder="Search features…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <fieldset>
          <legend className="font-semibold mb-2">Category</legend>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="category"
              value="social"
              checked={category === 'social'}
              onChange={() => {
                localStorage.setItem('category', 'social')
                setCategory('social')
              }}
            />
            <span>Social Networks</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="category"
              value="professional"
              checked={category === 'professional'}
              onChange={() => {
                localStorage.setItem('category', 'professional')
                setCategory('professional')
              }}
            />
            <span>Professional Solutions</span>
          </label>
        </fieldset>

        {groups.map(({ group, feats }) => (
          <fieldset key={group} className="space-y-2">
            <legend className="font-semibold">{group}</legend>
            {feats.map((f) => {
              const Icon = (Icons as any)[f.icon || '']
              return (
                <label key={f.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={f.id}
                    onChange={toggleFeature}
                    className="form-checkbox"
                  />
                  {Icon && <Icon className="w-4 h-4 text-gray-500" />}
                  <span title={f.tooltip}>{f.label}</span>
                </label>
              )
            })}
          </fieldset>
        ))}
      </div>

      {/* Results */}
      <div className="w-full md:w-2/3 p-4 bg-white dark:bg-gray-900">
        {processed.length > 0 ? (
          processed.map((p) => (
            <div
              key={p.name}
              className="border-b py-4 flex flex-col md:flex-row md:justify-between"
            >
              <div className="flex items-center space-x-4">
                {p.logo && (
                  <img
                    src={`/logos/${p.logo}`}
                    alt={p.name}
                    className="w-10 h-10"
                  />
                )}
                <div>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-semibold text-blue-600"
                  >
                    {p.name}
                  </a>
                  <p className="text-sm text-gray-500">
                    Matches {p.matchCount} features
                  </p>
                </div>
              </div>
              <div className="text-sm font-medium mt-2 md:mt-0">Score: {p.score}</div>
            </div>
          ))
        ) : (
          <p className="mt-8 text-center text-gray-500">
            No platforms match your filters.
          </p>
        )}
      </div>
    </div>
  )
}
