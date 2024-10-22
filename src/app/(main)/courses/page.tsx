// page.tsx
import { cache } from "react";
import { getCourses } from "@/index"; // Adjust the path as needed

const UsersPage = async () => {
    // Fetch user data
    const data = await getCourses();

    return (
        <div className="h-full max-w-[912px] px-3">
            <h1 className="font-bold text-2xl text-slate-700">Users</h1>
            {/* Display the user data as JSON */}
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default UsersPage;
