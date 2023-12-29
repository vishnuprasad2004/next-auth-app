export default function UserProfile({params}:any) {
    return (
        <div className=" flex flex-col items-center justify-center py-1 min-h-screen">
            <h1>Profile</h1>
            <hr />
            <p className="text-4xl">Profile page</p>
            <p className="text-blue-300">{params.id}</p>
        </div>
    )
}