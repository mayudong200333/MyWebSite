import { useState } from "react";
import { useSession } from "next-auth/react";


export default function CommentForm() {
  const [enteredComment,setEnteredComment] = useState('');
  const {data:session} = useSession();


  async function sendCommentHandler(event:any){
    event.preventDefault();  
    const user = session?.user
    const name = user?.name
    const email = user?.email
    const image = user?.image

    const commendData = {
      sender:name,
      comment:enteredComment,
      datetime:new Date().toString(),
      email,
      image
    }

    try{
      const response = await fetch('/api/comment',{
        method:'POST',
        body:JSON.stringify(commendData),
        headers:{
          'Content-Type': 'application/json'
        }
      })

      const data = await response.json();

      if (!response.ok){
        throw new Error(data.message || 'Something went wrong!')
      }

      setEnteredComment('')
    } catch(error){
      throw new Error('Something went wrong!')
    }
  }

  return (
    <div className="flex items-start space-x-4">
      <div className="min-w-0 flex-1">
        <form onSubmit={sendCommentHandler} className="relative">
          <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
            <label htmlFor="comment" className="sr-only">
              Add your comment
            </label>
            <textarea
              rows={5}
              name="comment"
              id="comment"
              className="block w-full resize-none border-0 py-3 focus:ring-0 sm:text-sm"
              placeholder="Add your comment..."
              value={enteredComment}
              onChange={e=>setEnteredComment(e.target.value)}
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
            <div className="flex items-center space-x-5">
            </div>
            <div className="flex-shrink-0">
              <button
                type="submit"
                className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}