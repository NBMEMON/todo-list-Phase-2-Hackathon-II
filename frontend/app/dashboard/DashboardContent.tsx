'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';
import TaskList from '@/components/task-list';
import InlineTaskInput from '@/components/inline-task-input';
import ToastNotifications from '@/components/toast-notifications';
import { taskApi } from '@/lib/api';

export default function DashboardContent() {
    const { user } = useAuth();
    const [refreshKey, setRefreshKey] = useState(0);

    const handleAddTask = async (title: string) => {
        if (!user?.id) return;
        try {
            await taskApi.createTask(user.id, {
                title,
                description: '',
                priority: 3
            });
            // Trigger list refresh
            setRefreshKey(prev => prev + 1);
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    if (!user) return null;

    return (
        <ProtectedRoute>
            <div className="space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-6 flex items-center justify-between">
                        <div>
                            <h2 className="text-3xl font-heading font-bold text-white mb-1">Today's Focus</h2>
                            <p className="text-slate-400">What do you want to achieve?</p>
                        </div>
                        <div className="text-right hidden md:block">
                            <span className="text-sm font-medium text-slate-400">12 Tasks Pending</span>
                        </div>
                    </div>

                    <InlineTaskInput onAddTask={handleAddTask} />

                    <div className="bg-slate-800/30 backdrop-blur-lg rounded-2xl border border-white/10 p-6 shadow-xl relative overflow-hidden">
                        {/* Visual texture */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

                        <TaskList key={refreshKey} />
                    </div>
                </motion.div>

                {/* Toast Notifications */}
                <ToastNotifications />
            </div>
        </ProtectedRoute>
    );
}
