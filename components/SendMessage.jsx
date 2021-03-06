import React , {useState} from 'react'
import { useMoralis } from 'react-moralis'

function SendMessage({endOfMessagesRef}) {
 const {user , Moralis} = useMoralis();
 const[message , setMessage] = useState("")

 const sendMessage = (e) => {
     e.preventDefault()
     if(!message) return ;

     const Messages = Moralis.Object.extend('Messages');

     const messages = new Messages();

     messages.save({
         message : message,
         username : user.getUsername(),
         ethAddress : user.get("ethAddress")
     }).then((message) => {
 
     },
      (error) => {
          console.log(error.message)
      }
     )

     endOfMessagesRef.current.scrollIntoView({behaviour: 'smooth'})

     setMessage('')
 }
  return (
    <form action=""
     className="flex justify-between fixed bottom-10 bg-black opacity-80 w-11/12 px-6 py-4 max-w-xl shadow-xl rounded-full  brder-blue-400"
    >
        <input type="text" 
         className="outline-none bg-transparent text-white placeholder-gray-500 pr-5"
         placeholder= {`Enter a Message ${user.getUsername()}...`}
         value = {message}
         onChange = {(e) => setMessage(e.target.value)}
        />
        <button
         className='font-bold text-blue-500'
         onClick = {sendMessage}
        >Send</button>
    </form>
  )
}

export default SendMessage