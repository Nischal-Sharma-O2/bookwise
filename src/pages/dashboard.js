import { Outlet , Link } from "react-router-dom";

const admin = {
  name: "Anurag Prajapati",
  email: "projectreact78@gmail.com",
  imageUrl:
    "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
};

export default function Dashboard() {
  return (
    <>
    <div className="menu">
        <div className="flex justify-between">
          <div className="h-screen border-r-4 border-indigo-500">
            <div className="flex my-5">
              <div className="mx-3">
                <img
                  className="h-20 w-20 rounded-full"
                  src={admin.imageUrl}
                  alt="Profile Picture"
                />
              </div>
              <div className="mx-3">
                <h2>{admin.name}</h2>
                <p>{admin.email}</p>
              </div>
            </div>
            <a
              href="/"
              className="flex my-5 w-full justify-center bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Dashboard
            </a>
            <Link
              to="/dashboard/order"
              className="flex my-5 w-full justify-center bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Orders
            </Link>
            <Link to='/dashboard/addproduct'
              className="flex my-5 w-full justify-center bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Products
            </Link>
            <button
              type="submit"
              className="flex mt-auto w-full justify-center bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Log Out
            </button>
          </div>
        <Outlet/>
        </div>
        </div>
        </>
  );
}
