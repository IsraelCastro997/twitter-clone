import { type Database } from '../types/database'

type PostType = Database['public']['Tables']['posts']['Row']
type UserEntity = Database['public']['Views']['users']['Row']

export type Post = PostType & {
  user: UserEntity
}
