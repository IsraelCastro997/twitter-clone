import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { PostLists } from './components/posts-list'
import { type Database } from './types/database'
import { ComposePost } from './components/compose-post'
import { AuthButtonServer } from './components/auth-button-server'

export default async function Home () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { session } } = await supabase.auth.getSession()
  const { data: posts } = await supabase
    .from('posts')
    .select('*,user:users(*)')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

    <section className="max-w-[800px] w-full mx-auto border-l border-r border-white/30 h-full min-h-screen">
      <ComposePost userAvatarUrl={session?.user?.user_metadata?.avatar_url}/>
      <PostLists posts={posts}/>

    </section>
    <AuthButtonServer />
    </main>
  )
}
