import { Button } from '../components/ui/button'
import {
    Card,
    CardContent,
} from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Skeleton } from '../components/ui/skeleton'
import GetUser from '@/hooks/useDebounce'
import NotFound from './Notfound'
import { useEffect } from 'react'
import useGetRepos from '@/hooks/Repos'

const HomePage = () => {

    const { getUser, users, loading, error, search, setSearch } = GetUser()
    const { errorRepos, getRepos, repos, loadingRepos } = useGetRepos()

    useEffect(() => {
        if (!search) return // kalau kosong, tidak perlu fetch

        const timer = setTimeout(() => {
            getUser(search)
            getRepos(search)
        }, 500) // tunggu 500ms setelah user berhenti ketik

        return () => clearTimeout(timer) // cleanup — timer lama dibatalkan setiap search berubah

    }, [search])



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
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        className="bg-[#1a1a1a] border-zinc-800 h-12 text-lg"
                    />

                    <Button

                        className="h-12 px-7 bg-[#1a1a1a] border border-zinc-700 hover:bg-zinc-800"
                    >
                        Cari
                    </Button>
                </div>

                {/* Error */}
                {error && <p className="text-rose-500 text-sm">{error}</p>}
                {errorRepos && <p className="text-rose-500 text-sm">{errorRepos}</p>}


           
                {/* Skeleton */}
                {loading && loadingRepos ? (
                    <div className="space-y-5">

                        {/* Profile Skeleton */}
                        <Card className="bg-[#1a1a1a] border-zinc-800 rounded-2xl">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-5">

                                    <Skeleton className="w-16 h-16 rounded-full bg-zinc-800" />

                                    <div className="space-y-3">
                                        <Skeleton className="h-6 w-52 bg-zinc-800" />
                                        <Skeleton className="h-4 w-28 bg-zinc-800" />

                                        <div className="flex gap-4">
                                            <Skeleton className="h-4 w-16 bg-zinc-800" />
                                            <Skeleton className="h-4 w-24 bg-zinc-800" />
                                            <Skeleton className="h-4 w-20 bg-zinc-800" />
                                        </div>
                                    </div>

                                </div>
                            </CardContent>
                        </Card>

                        {/* Button Skeleton */}
                        <div className="flex gap-3">
                            <Skeleton className="h-10 w-32 bg-zinc-800 rounded-md" />
                            <Skeleton className="h-10 w-20 bg-zinc-800 rounded-md" />
                        </div>

                        {/* Repo Skeleton */}
                        {[1, 2, 3].map((item) => (
                            <Card
                                key={item}
                                className="bg-[#1a1a1a] border-zinc-800 rounded-xl"
                            >
                                <CardContent className="p-5 space-y-4">

                                    <Skeleton className="h-5 w-40 bg-zinc-800" />

                                    <Skeleton className="h-4 w-72 bg-zinc-800" />

                                    <div className="flex gap-5">
                                        <Skeleton className="h-4 w-16 bg-zinc-800" />
                                        <Skeleton className="h-4 w-10 bg-zinc-800" />
                                        <Skeleton className="h-4 w-28 bg-zinc-800" />
                                    </div>

                                </CardContent>
                            </Card>
                        ))}

                    </div>
                ) : (
                    <>
                        {/* Profile */}
                        <Card className="bg-[#1a1a1a] border-zinc-800 rounded-2xl">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-5">

                                    {users.map((item) => (
                                        <div
                                            // key={item.id}
                                            className="flex items-center gap-5"
                                        >
                                            <img
                                                src={item.avatar_url}
                                                alt="avatar"
                                                className="w-16 h-16 rounded-full"
                                            />

                                            <div>
                                                <h2 className="text-2xl font-bold">
                                                    {item.name}
                                                </h2>

                                                <p className="text-zinc-400 text-lg">
                                                    {item.login}
                                                </p>

                                                <div className="flex gap-6 mt-3 text-zinc-300">
                                                    <p>
                                                        <span className="font-bold">
                                                            {item.public_repos}
                                                        </span>{" "}
                                                        repos
                                                    </p>

                                                    <p>
                                                        <span className="font-bold">
                                                            {item.followers}
                                                        </span>{" "}
                                                        followers
                                                    </p>

                                                    <p>
                                                        <span className="font-bold">
                                                            {item.following}
                                                        </span>{" "}
                                                        following
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}


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

                        {repos.map((item) => (

                            <div className="space-y-4">

                                <Card className="bg-[#1a1a1a] border-zinc-800 rounded-xl">
                                    <CardContent className="p-5">
                                        <h2 className="text-emerald-400 text-xl font-semibold">
                                            {item.name}
                                        </h2>

                                        <p className="text-zinc-300 mt-1">
                                            {/* {item.description} */}
                                        </p>

                                        <div className="flex gap-5 mt-4 text-zinc-400 text-sm">
                                            <p>⭐ {item.stargezer_count}</p>
                                            <p>{item.language}</p>
                                            <p>{item.updated_at}</p>
                                        </div>
                                    </CardContent>
                                </Card>

                            </div>
                        ))}
                        {/* Repo List */}

                    </>
                )}

                {error && <NotFound />}
                {errorRepos && <NotFound />}

            </div>
        </div>
    )
}

export default HomePage