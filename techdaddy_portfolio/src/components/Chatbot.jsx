import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const newMessages = [...messages, { text: input, sender: 'user' }];
    setMessages(newMessages);
    setInput('');

    // Simple rule-based response
    setTimeout(() => {
      let botResponse = "I'm sorry, I don't understand that. Please ask about our services, pricing, or contact information.";
      const lowerInput = input.toLowerCase();

      if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        botResponse = "Hello! How can I assist you today?";
      } else if (lowerInput.includes('services')) {
        botResponse = "We offer Social Media Marketing, Website Development, SEO, Digital Marketing, and Creative Studio services. You can find more details on our Services section.";
      } else if (lowerInput.includes('pricing')) {
        botResponse = "Our pricing plans include Basic, Standard, and Premium packages. Please check our Pricing section for more details.";
      } else if (lowerInput.includes('contact')) {
        botResponse = "You can reach us through the contact form on our website, or find our social media links in the footer.";
      } else if (lowerInput.includes('thank you') || lowerInput.includes('thanks')) {
        botResponse = "You're welcome! Is there anything else I can help you with?";
      } else if (lowerInput.includes('mission') || lowerInput.includes('purpose')) {
        botResponse = "Our mission is to empower businesses with cutting-edge digital solutions, helping them thrive in the online world.";
      } else if (lowerInput.includes('values') || lowerInput.includes('principles')) {
        botResponse = "We value innovation, client satisfaction, transparency, and continuous learning. These principles guide everything we do.";
      } else if (lowerInput.includes('team') || lowerInput.includes('who are you')) {
        botResponse = "We are TechDaddy, a dedicated team of digital marketing and web development experts passionate about helping your business succeed.";
      } else if (lowerInput.includes('history') || lowerInput.includes('founded')) {
        botResponse = "TechDaddy was founded with the vision of providing comprehensive and effective digital solutions to businesses of all sizes.";
      }

      setMessages((prevMessages) => [...prevMessages, { text: botResponse, sender: 'bot' }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.button
        onClick={toggleChatbot}
        className="bg-neon text-dark rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-neon focus:ring-opacity-75"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <FaTimes size={20} /> : <FaRobot size={20} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="absolute bottom-20 right-0 w-80 h-96 bg-dark border border-primary rounded-lg shadow-xl flex flex-col overflow-hidden"
          >
            <div className="bg-primary text-light p-3 flex justify-between items-center">
              <h3 className="font-bold" style={{fontFamily : "Intel One Mono"}}>TechDaddy Bot</h3>
            </div>
            <div className="flex-grow p-4 overflow-y-auto space-y-3 custom-scrollbar">
              {messages.length === 0 && (
                <div className="text-center text-light/60 text-sm mt-4">
                  Type a message to start chatting!
                </div>
              )}
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[75%] p-3 rounded-lg ${msg.sender === 'user' ? 'bg-neon text-dark' : 'bg-accent/30 text-light'}`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="p-3 border-t border-primary flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow bg-dark border border-primary rounded-full px-4 py-2 text-light text-sm focus:outline-none focus:border-neon"
              />
              <button
                type="submit"
                className="ml-2 bg-neon text-dark rounded-full p-3 hover:bg-neon/80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neon focus:ring-opacity-75"
              >
                <FaPaperPlane size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}