'use client';

import dynamic from 'next/dynamic';

const TasksContent = dynamic(() => import('./TasksContent'), { ssr: false });

export default function TasksPage() {
    return <TasksContent />;
}
