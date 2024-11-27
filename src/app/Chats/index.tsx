
// 'use client';

// import React, { useState } from 'react';
// import { FaPaperclip } from "react-icons/fa";
// import { AiOutlineSend } from "react-icons/ai";
// import Image from 'next/image';

// const ChatRoom = () => {
//   const [messages, setMessages] = useState([
//     { id: 1, text: "Hi sir. Can we use a mixture of colors when sewing?", replies: [] },
//     { id: 2, text: "I have a question sir. Where can I get good yarn?", replies: [] },
//   ]);
//   const [input, setInput] = useState("");
//   const [replyInput, setReplyInput] = useState<{ [key: number]: string }>({});
//   const [showReplies, setShowReplies] = useState<{ [key: number]: boolean }>({});

//   const sendMessage = () => {
//     if (input.trim() === "") return;

//     const newMessage = {
//       id: messages.length + 1,
//       text: input,
//       replies: [],
//     };
//     setMessages((prev) => [...prev, newMessage]);
//     setInput("");
//   };

//   const sendReply = (messageId: number) => {
//     if (!replyInput[messageId]?.trim()) return;

//     const updatedMessages = messages.map((message) =>
//       message.id === messageId
//         ? {
//             ...message,
//             replies: [...message.replies, replyInput[messageId]],
//           }
//         : message
//     );
//     setMessages(updatedMessages);
//     setReplyInput((prev) => ({ ...prev, [messageId]: "" }));
//   };

//   const toggleReplies = (messageId: number) => {
//     setShowReplies((prev) => ({
//       ...prev,
//       [messageId]: !prev[messageId],
//     }));
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 font-sans">
//       {/* Navbar */}
//       <nav className="w-full flex justify-between h-[84px] py-5 px-32 bg-white shadow-md fixed top-0 left-0 z-10">
//         <div>
//           <Image
//             src="/images/logo.png"
//             alt="Ubora CBC Logo"
//             width={120}
//             height={140}
//             className="max-w-full h-auto"
//           />
//         </div>
//         <ul className="flex gap-12">
//           <li className="text-[30px] cursor-pointer hover:text-pink-600">Home</li>
//           <li className="text-[30px] cursor-pointer hover:text-pink-600">Practicals</li>
//           <li className="text-[30px] cursor-pointer hover:text-pink-600 text-pink-500">Q & A</li>
//           <li className="text-[30px] cursor-pointer hover:text-pink-600 ">Assignment</li>
//         </ul>
//       </nav>

//       {/* Main Content */}
//       <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-12 mt-[50px] ml-[124px]">
//         <h2 className="text-pink-500 font-bold text-7xl mb-8">Q & A</h2>
//         <div className="space-y-8 max-h-[800px] overflow-y-auto">
//           {messages.map((message) => (
//             <div key={message.id} className="space-y-6">
//               {/* Parent message */}
//               <div className="bg-pink-100 text-gray-800 rounded-lg p-8 text-2xl">
//                 {message.text}
//               </div>

//               {/* Replies to the parent message */}
//               {showReplies[message.id] &&
//                 message.replies.map((reply, index) => (
//                   <div key={index} className="ml-12 bg-gray-100 text-gray-600 rounded-lg p-6 text-xl">
//                     {reply}
//                   </div>
//                 ))}

//               {/* Button to toggle replies visibility */}
//               {message.replies.length > 0 && (
//                 <button
//                   onClick={() => toggleReplies(message.id)}
//                   className="text-pink-500 text-2xl ml-8 hover:underline"
//                 >
//                   {showReplies[message.id] ? "Hide replies" : `View ${message.replies.length} more replies`}
//                 </button>
//               )}

//               {/* Input field for replies without send button */}
//               <div className="mt-4 flex items-center ml-8">
//                 <input
//                   type="text"
//                   className="flex-1 bg-gray-100 rounded-lg px-6 py-4 outline-none text-xl"
//                   placeholder="Type a reply"
//                   value={replyInput[message.id] || ""}
//                   onChange={(e) => setReplyInput({ ...replyInput, [message.id]: e.target.value })}
//                   onKeyDown={(e) => e.key === "Enter" && sendReply(message.id)}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Parent message input */}
//         <div className="mt-10 flex items-center">
//           <button className="text-gray-500 p-4">
//             <FaPaperclip size={30} />
//           </button>
//           <input
//             type="text"
//             className="flex-1 bg-gray-100 rounded-lg px-6 py-4 mx-6 outline-none text-2xl"
//             placeholder="Type Message Here"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//           />
//           <button
//             onClick={sendMessage}
//             className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 flex items-center text-2xl"
//           >
//             <span className="ml-2">Send</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatRoom;

'use client';

import React, { useState } from 'react';
import { FaPaperclip } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
import Image from 'next/image';

const ChatRoom = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi sir. Can we use a mixture of colors when sewing?", replies: [] },
    { id: 2, text: "I have a question sir. Where can I get good yarn?", replies: [] },
  ]);
  const [input, setInput] = useState("");
  const [replyInput, setReplyInput] = useState<{ [key: number]: string }>({});
  const [showReplies, setShowReplies] = useState<{ [key: number]: boolean }>({});

  const sendMessage = () => {
    if (input.trim() === "") return;

    const newMessage = {
      id: messages.length + 1,
      text: input,
      replies: [],
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  const sendReply = (messageId: number) => {
    if (!replyInput[messageId]?.trim()) return;

    const updatedMessages = messages.map((message) =>
      message.id === messageId
        ? {
            ...message,
            replies: [...message.replies, replyInput[messageId]],
          }
        : message
    );
    setMessages(updatedMessages);
    setReplyInput((prev) => ({ ...prev, [messageId]: "" }));
  };

  const toggleReplies = (messageId: number) => {
    setShowReplies((prev) => ({
      ...prev,
      [messageId]: !prev[messageId],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navbar */}
      <nav className="w-full flex justify-between h-[84px] py-5 px-32 bg-white shadow-md fixed top-0 left-0 z-10">
        <div>
          <Image
            src="/images/logo.png"
            alt="Ubora CBC Logo"
            width={120}
            height={140}
            className="max-w-full h-auto"
          />
        </div>
        <ul className="flex gap-12">
          <li className="text-[30px] cursor-pointer hover:text-pink-600">Home</li>
          <li className="text-[30px] cursor-pointer hover:text-pink-600">Practicals</li>
          <li className="text-[30px] cursor-pointer hover:text-pink-600 text-pink-500">Q & A</li>
          <li className="text-[30px] cursor-pointer hover:text-pink-600 ">Assignment</li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-12 mt-[100px] ml-[124px]">
        <h2 className="text-pink-500 font-bold text-7xl mb-8">Q & A</h2>
        <div className="space-y-8 max-h-[800px] overflow-y-auto">
          {messages.map((message) => (
            <div key={message.id} className="space-y-6">
              {/* Parent message */}
              <div className="bg-pink-100 text-gray-800 rounded-lg p-8 text-2xl">
                {message.text}
              </div>

              {/* Replies to the parent message */}
              {showReplies[message.id] &&
                message.replies.map((reply, index) => (
                  <div key={index} className="ml-12 bg-gray-100 text-gray-600 rounded-lg p-6 text-xl">
                    {reply}
                  </div>
                ))}

              {/* Button to toggle replies visibility */}
              {message.replies.length > 0 && (
                <button
                  onClick={() => toggleReplies(message.id)}
                  className="text-pink-500 text-2xl ml-8 hover:underline"
                >
                  {showReplies[message.id] ? "Hide replies" : `View ${message.replies.length} more replies`}
                </button>
              )}

              {/* Input field for replies without send button */}
              <div className="mt-4 flex items-center ml-8">
                <input
                  type="text"
                  className="flex-1 bg-gray-100 rounded-lg px-6 py-4 outline-none text-xl"
                  placeholder="Type a reply"
                  value={replyInput[message.id] || ""}
                  onChange={(e) => setReplyInput({ ...replyInput, [message.id]: e.target.value })}
                  onKeyDown={(e) => e.key === "Enter" && sendReply(message.id)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Parent message input */}
        <div className="mt-10 flex items-center">
          <button className="text-gray-500 p-4">
            <FaPaperclip size={30} />
          </button>
          <input
            type="text"
            className="flex-1 bg-gray-100 rounded-lg px-6 py-4 mx-6 outline-none text-2xl"
            placeholder="Type Message Here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 flex items-center text-2xl"
          >
            <span className="ml-2">Send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
