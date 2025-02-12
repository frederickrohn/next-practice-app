"use client";   //component needs to be a client component for interactive parts
                //not implemented yet

export default function MessageList({ messages }){
    return (
        <div className='w-full max-w-2xl'>
            {messages.length === 0 ? (
                <p>No messages yet, be the first one to post!</p>
            ) : (messages.map(message=>(
                <div 
                key={ message.id }
                className="border border-[0.5px] border-gray-800 p-6 mb-4 rounded shadow-sm bg-transparent"
                >
                    <p className='text-s text-gray-350'>{message.content}</p>
                    <small className='text-xs text-gray-800'>
                        Posted by {message.username} in{" "}
                        {message.category || "Uncategorized"}
                    </small>
                </div>
            )))}
        </div>
    )
};