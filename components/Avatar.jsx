import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'

function Avatar({username , logoutOnPress}) {
  const {user , logout} = useMoralis()
  return (
   <>
     <Image
      src = {`https://avatars.dicebear.com/api/male/${user.get("username") || username}.svg`}
      onClick = {() => logoutOnPress && logout()}
      className = 'rounded-full bg-black cursor-pointer hover:opacity-75'
      layout = "fill"
     />
   </>
  )
}

export default Avatar