'use client'
import { Card, CardHeader, CardBody, CardFooter, Avatar } from '@nextui-org/react'
import Link from 'next/link'
import { IconHeart, IconMessageCircle, IconRepeat } from '@tabler/icons-react'

export default function PostCard ({
  userFullName,
  userName,
  avatarUrl,
  content
}: {
  userFullName: string | null
  userName: string | null
  avatarUrl: string | null
  content: string | null
}) {
//   console.log(userName)

  return (
    <Card className="bg-transparent shadow-none hover:bg-slate-800 transition border-b rounded-none cursor-pointer border-white/20">
      <CardHeader className="justify-between p-1">
        <div className="flex gap-x-2">
            <Link href={`/${userName}`}> </Link>
          <Avatar classNames={{ base: 'w-[40px] h-[40px]' }} radius="full" size="sm" src={avatarUrl ?? '/'} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{userFullName}</h4>
            <h5 className="text-small tracking-tight text-default-400">@{userName}</h5>
          </div>
        </div>

      </CardHeader>
      <CardBody className="px-3 py-2 text-xs text-white">
        <p>
          {content}
        </p>

      </CardBody>
      <CardFooter className="gap-3 p-3">
        <button>
        <IconMessageCircle className='w-4 h-4' />
        </button>
        <button>
        <IconHeart className='w-4 h-4'/>
        </button>
        <button>
        <IconRepeat className='w-4 h-4'/>
        </button>

      </CardFooter>
    </Card>
  )
}
