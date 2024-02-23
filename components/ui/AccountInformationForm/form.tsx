import { useState } from "react"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AccountForm(userProp: any) {

    const [user, setUser] = useState(userProp);

    return (
        <form action="">
            <div className="space-y-2">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                <Input id="name" type="text" value={user.name} onChange={e => setUser(e.target.value)} />
            </div>
            <div className="space-y-2">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <Input id="email" type="text" value={user.name} onChange={e => setUser(e.target.value)} />
            </div>
            <Button type="submit" className="mt-3">Update profile</Button>
        </form>
    )
}