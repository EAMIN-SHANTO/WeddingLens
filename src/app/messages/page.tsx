'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: "Ahmed Hassan",
      avatar: "👨‍💼",
      lastMessage: "Is the Canon EOS R5 still available for next weekend?",
      timestamp: "2 min ago",
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: "Fatima Khan",
      avatar: "👩‍💼",
      lastMessage: "Thank you for the great service! The equipment was perfect.",
      timestamp: "1 hour ago",
      unread: 0,
      online: false
    },
    {
      id: 3,
      name: "Rashid Ahmed",
      avatar: "👨‍💼",
      lastMessage: "Could you provide more details about the lighting setup?",
      timestamp: "3 hours ago",
      unread: 1,
      online: true
    },
    {
      id: 4,
      name: "Nusrat Jahan",
      avatar: "👩‍💼",
      lastMessage: "I'd like to book your services for a wedding in December.",
      timestamp: "1 day ago",
      unread: 0,
      online: false
    }
  ];

  const messages = [
    {
      id: 1,
      conversationId: 1,
      sender: "Ahmed Hassan",
      message: "Hi! I'm interested in renting your Canon EOS R5 for a wedding shoot next weekend.",
      timestamp: "10:30 AM",
      isOwn: false
    },
    {
      id: 2,
      conversationId: 1,
      sender: "You",
      message: "Hello Ahmed! Yes, the Canon EOS R5 is available. The rental is ৳2,500 per day. Would that work for you?",
      timestamp: "10:35 AM",
      isOwn: true
    },
    {
      id: 3,
      conversationId: 1,
      sender: "Ahmed Hassan",
      message: "That sounds perfect! I need it for Saturday and Sunday. Can I pick it up on Friday evening?",
      timestamp: "10:45 AM",
      isOwn: false
    },
    {
      id: 4,
      conversationId: 1,
      sender: "You",
      message: "Absolutely! Friday pickup works great. I'll prepare everything including the memory card and extra battery. Total would be ৳5,000 for 2 days.",
      timestamp: "10:50 AM",
      isOwn: true
    },
    {
      id: 5,
      conversationId: 1,
      sender: "Ahmed Hassan",
      message: "Is the Canon EOS R5 still available for next weekend?",
      timestamp: "Just now",
      isOwn: false
    }
  ];

  const currentConversation = conversations.find(c => c.id === selectedConversation);
  const currentMessages = messages.filter(m => m.conversationId === selectedConversation);

  const sendMessage = () => {
    if (newMessage.trim()) {
      // Here you would typically send the message to your backend
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Messages</h1>
          <p className="text-gray-600">Communicate with photographers and equipment owners</p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden h-[600px] flex">
          {/* Conversations List */}
          <div className="w-1/3 border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <input 
                type="text" 
                placeholder="Search conversations..." 
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conversation) => (
                <div 
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation.id)}
                  className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                    selectedConversation === conversation.id ? 'bg-primary-50 border-primary-200' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-lg">
                        {conversation.avatar}
                      </div>
                      {conversation.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-medium text-gray-900 truncate">{conversation.name}</h4>
                        <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                      </div>
                      <p className="text-sm text-gray-600 truncate mt-1">{conversation.lastMessage}</p>
                    </div>
                    
                    {conversation.unread > 0 && (
                      <div className="w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center">
                        <span className="text-xs text-white font-medium">{conversation.unread}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {currentConversation ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200 bg-white">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        {currentConversation.avatar}
                      </div>
                      {currentConversation.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">{currentConversation.name}</h4>
                      <p className="text-xs text-gray-500">
                        {currentConversation.online ? 'Online' : 'Last seen recently'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {currentMessages.map((message) => (
                    <div 
                      key={message.id}
                      className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.isOwn 
                          ? 'bg-primary-600 text-white' 
                          : 'bg-gray-200 text-gray-900'
                      }`}>
                        <p className="text-sm">{message.message}</p>
                        <p className={`text-xs mt-1 ${
                          message.isOwn ? 'text-primary-100' : 'text-gray-500'
                        }`}>
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-200 bg-white">
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      placeholder="Type your message..."
                      className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <button
                      onClick={sendMessage}
                      disabled={!newMessage.trim()}
                      className="bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                      Send
                    </button>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="flex space-x-2 mt-3">
                    <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors">
                      📷 Share Equipment
                    </button>
                    <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors">
                      📅 Schedule Meeting
                    </button>
                    <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors">
                      💰 Send Quote
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">💬</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Select a conversation</h3>
                  <p className="text-gray-600">Choose a conversation from the list to start messaging</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}