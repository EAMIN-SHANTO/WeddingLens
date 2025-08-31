'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    totalUsers: 1247,
    totalEquipment: 456,
    totalBookings: 789,
    totalRevenue: 125000,
    pendingVerifications: 23,
    activeDisputes: 5
  };

  const recentActivity = [
    { id: 1, type: 'booking', user: 'Ahmed Hassan', item: 'Canon EOS R5', time: '2 hours ago' },
    { id: 2, type: 'verification', user: 'Fatima Khan', item: 'Profile Verification', time: '4 hours ago' },
    { id: 3, type: 'dispute', user: 'Rashid Ahmed', item: 'Equipment Damage', time: '6 hours ago' },
    { id: 4, type: 'listing', user: 'Nusrat Jahan', item: 'Sony A7 IV', time: '1 day ago' }
  ];

  const pendingVerifications = [
    { id: 1, name: 'Kamal Uddin', type: 'Photographer', submitted: '2024-01-15', documents: ['NID', 'Portfolio'] },
    { id: 2, name: 'Sabrina Rahman', type: 'Equipment Owner', submitted: '2024-01-14', documents: ['NID', 'Equipment'] },
    { id: 3, name: 'Jahangir Alam', type: 'Photographer', submitted: '2024-01-13', documents: ['NID', 'Portfolio'] }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
          <p className="text-gray-600">Manage users, listings, verifications, and platform operations</p>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {['overview', 'users', 'equipment', 'bookings', 'verifications', 'disputes'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <div className="text-3xl text-blue-500 mr-4">👥</div>
                  <div>
                    <p className="text-sm text-gray-600">Total Users</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalUsers.toLocaleString()}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <div className="text-3xl text-green-500 mr-4">📷</div>
                  <div>
                    <p className="text-sm text-gray-600">Equipment Listed</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalEquipment.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <div className="text-3xl text-purple-500 mr-4">📅</div>
                  <div>
                    <p className="text-sm text-gray-600">Total Bookings</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalBookings.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <div className="text-3xl text-yellow-500 mr-4">💰</div>
                  <div>
                    <p className="text-sm text-gray-600">Revenue (৳)</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalRevenue.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <div className="text-3xl text-orange-500 mr-4">⏳</div>
                  <div>
                    <p className="text-sm text-gray-600">Pending Verifications</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.pendingVerifications}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center">
                  <div className="text-3xl text-red-500 mr-4">⚠️</div>
                  <div>
                    <p className="text-sm text-gray-600">Active Disputes</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.activeDisputes}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        activity.type === 'booking' ? 'bg-green-500' :
                        activity.type === 'verification' ? 'bg-blue-500' :
                        activity.type === 'dispute' ? 'bg-red-500' :
                        'bg-gray-500'
                      }`}></div>
                      <div>
                        <p className="text-sm text-gray-900">
                          <span className="font-medium">{activity.user}</span> {
                            activity.type === 'booking' ? 'booked' :
                            activity.type === 'verification' ? 'submitted' :
                            activity.type === 'dispute' ? 'reported' :
                            'listed'
                          } {activity.item}
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Verifications Tab */}
        {activeTab === 'verifications' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Pending Verifications</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Documents</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {pendingVerifications.map((verification) => (
                    <tr key={verification.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{verification.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {verification.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {verification.submitted}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-1">
                          {verification.documents.map((doc, index) => (
                            <span key={index} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800">
                              {doc}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                        <button className="text-green-600 hover:text-green-900">Approve</button>
                        <button className="text-red-600 hover:text-red-900">Reject</button>
                        <button className="text-blue-600 hover:text-blue-900">Review</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Other tabs content placeholder */}
        {activeTab !== 'overview' && activeTab !== 'verifications' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 capitalize">{activeTab} Management</h3>
            <p className="text-gray-600">Content for {activeTab} tab will be implemented here.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}