import './App.css'

import { Button } from './components/ui/button'
import {
  Card,
  CardContent,
} from './components/ui/card'
import { Input } from './components/ui/input'

const App = () => {
  return (
    <div className="min-h-screen bg-[#111111] text-white p-8">
      <div className="max-w-4xl mx-auto space-y-5">

        {/* Header */}
        <div className="border border-zinc-800 rounded-2xl px-6 py-5 flex items-center justify-between bg-[#1a1a1a]">
          <h1 className="text-2xl font-bold">GitHub Finder</h1>

          <p className="text-zinc-400 font-medium">
            React + TypeScript
          </p>
        </div>

        {/* Search */}
        <div className="flex gap-3">
          <Input
            placeholder="torvalds"
            className="bg-[#1a1a1a] border-zinc-800 h-12 text-lg"
          />

          <Button className="h-12 px-7 bg-[#1a1a1a] border border-zinc-700 hover:bg-zinc-800">
            Cari
          </Button>
        </div>

        {/* Profile */}
        <Card className="bg-[#1a1a1a] border-zinc-800 rounded-2xl">
          <CardContent className="p-6">
            <div className="flex items-center gap-5">

              <img
                src="https://avatars.githubusercontent.com/u/1024025?v=4"
                alt="avatar"
                className="w-16 h-16 rounded-full"
              />

              <div>
                <h2 className="text-2xl font-bold">
                  Linus Torvalds
                </h2>

                <p className="text-zinc-400 text-lg">
                  @torvalds
                </p>

                <div className="flex gap-6 mt-3 text-zinc-300">
                  <p>
                    <span className="font-bold">35</span> repos
                  </p>

                  <p>
                    <span className="font-bold">243k</span> followers
                  </p>

                  <p>
                    <span className="font-bold">0</span> following
                  </p>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <div className="flex gap-3">
          <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
            Repositories
          </Button>

          <Button
            variant="outline"
            className="border-zinc-700 bg-[#1a1a1a]"
          >
            Info
          </Button>
        </div>

        {/* Repo List */}
        <div className="space-y-4">

          <Card className="bg-[#1a1a1a] border-zinc-800 rounded-xl">
            <CardContent className="p-5">
              <h2 className="text-emerald-400 text-xl font-semibold">
                linux
              </h2>

              <p className="text-zinc-300 mt-1">
                Linux kernel source tree
              </p>

              <div className="flex gap-5 mt-4 text-zinc-400 text-sm">
                <p>⭐ 180k</p>
                <p>C</p>
                <p>Updated 2 days ago</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1a1a1a] border-zinc-800 rounded-xl">
            <CardContent className="p-5">
              <h2 className="text-emerald-400 text-xl font-semibold">
                uemacs
              </h2>

              <p className="text-zinc-300 mt-1">
                Random version of microemacs
              </p>

              <div className="flex gap-5 mt-4 text-zinc-400 text-sm">
                <p>⭐ 2.3k</p>
                <p>C</p>
                <p>Updated 1 year ago</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1a1a1a] border-zinc-800 rounded-xl">
            <CardContent className="p-5">
              <h2 className="text-emerald-400 text-xl font-semibold">
                subsurface
              </h2>

              <p className="text-zinc-300 mt-1">
                Dive log program
              </p>

              <div className="flex gap-5 mt-4 text-zinc-400 text-sm">
                <p>⭐ 600</p>
                <p>C++</p>
                <p>Updated 3 days ago</p>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  )
}

export default App