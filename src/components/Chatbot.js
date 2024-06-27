// import React, { useState } from 'react';
// import OpenAIApi from 'openai';



// const Chatbot = () => {
//     const [messages, setMessages] = useState([]);
//     const [input, setInput] = useState('');
//     const openai = new OpenAIApi({
//         //apiKey: process.env.REACT_APP_OPENAI_API_KEY,
//         apiKey: "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",
//         dangerouslyAllowBrowser: true
//     });
//     const handleSendMessage = async () => {
//         const response = await openai.chat.completions.create({
//             messages: [{ role: 'user', content: 'Say this is a test' }],
//             model: 'gpt-3.5-turbo',
//         });

//         setMessages([...messages, { role: 'user', content: input }, { role: 'assistant', content: response.choices[0].message.content }]);
//         setInput('');
//     };

//     return (
//         <div>
//             <div className="chatbox">
//                 {messages.map((message, index) => (
//                     <div key={index} className={`message ${message.role}`}>
//                         {message.content}
//                     </div>
//                 ))}
//             </div>
//             <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 placeholder="Type your message..."
//             />
//             <button onClick={handleSendMessage}>Send</button>
//         </div>
//     );
// };

// export default Chatbot;