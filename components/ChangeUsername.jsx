import React from 'react'
import { useMoralis } from 'react-moralis'

function ChangeUsername() {
  const {setUserData , isUserUpdating , userError , user} = useMoralis()

  const set_Username = () => {
      console.log('ran')
      const username = prompt(`Enter your new Username (current : ${user.getUsername()})`)

      if(!username) return;

      setUserData({
          username,
      })
  }
  return (
    <div className = "text-sm absolute top-5 right-5">
        <button className="hover:text-blue-700"
         onClick = {set_Username}
        >
            Change your username
        </button>
        {/* <button
         className = 'text-white'
        >HII</button> */}
    </div>
  )
}

export default ChangeUsername