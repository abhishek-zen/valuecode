'use client';

import { useEffect, useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";

interface UserPresence {
  id: string;
  name: string;
  color: string;
  active: boolean;
}

const DEMO_USERS: UserPresence[] = [
  { id: "1", name: "Alex", color: "#2563eb", active: true },
  { id: "2", name: "Sam", color: "#f59e42", active: false },
  { id: "3", name: "Jordan", color: "#84cc16", active: true },
];

export function CollaborationIndicator() {
  const [users, setUsers] = useState<UserPresence[]>([]);

  useEffect(() => {
    // Simulate real-time presence (replace with actual presence logic)
    setUsers(DEMO_USERS);

    const interval = setInterval(() => {
      setUsers((prev) =>
        prev.map((u) =>
          Math.random() > 0.8
            ? { ...u, active: !u.active }
            : u
        )
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2">
      {users.map((user) => (
        <div key={user.id} className="flex items-center gap-1">
          <UserCircleIcon
            className={`w-6 h-6`}
            style={{
              color: user.active ? user.color : "#94a3b8",
              opacity: user.active ? 1 : 0.5,
              filter: user.active
                ? "drop-shadow(0 0 4px rgba(59,130,246,0.3))"
                : "none",
            }}
            aria-label={user.name}
          />
          <span
            className={`text-xs font-medium ${
              user.active ? "text-slate-800" : "text-slate-400"
            }`}
          >
            {user.name}
          </span>
        </div>
      ))}
      <span className="ml-2 text-xs text-slate-500">in room</span>
    </div>
  );
}
