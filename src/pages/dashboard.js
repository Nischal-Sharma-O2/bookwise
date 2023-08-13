const admin = {
  name: "Kalpit Karki",
  email: "projectreact78@gmail.com",
  imageUrl:
    "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
};

export default function Dashboard() {
  return (
    <>
      <div className="min-h-full bg-grey">
        <header className="shadow border-b-4 border-black">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-black">
              Dashboard
            </h1>
          </div>
        </header>
        <main className="h-screen flex w-1/4 flex-col p-5 border-r-4 border-black">
            <div className="flex min-w-0 gap-x-4">
              <img
                className="h-20 w-20 flex-none rounded-full bg-gray-50"
                src={admin.imageUrl}
                alt=""
              />
              <div className="min-w-0 m-auto flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {admin.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {admin.email}
                </p>
              </div>
            </div>
            <div className="mt-5">
            <a
                href="/"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Add Product
              </a>
            </div>
            <div className="mt-5">
            <a
                href="/"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Orders
              </a>
            </div>
            <div className="mt-auto">
            <a
                href="/"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Log Out
              </a>
            </div>
        </main>
        <div className="sales">
              <h3>Weekly Sales</h3>
              <h1>$ 520</h1>
        </div>
        <div className="orders">
              <h3>Weekly Orders</h3>
              <h1>50</h1>
        </div>
      </div>
    </>
  );
}
