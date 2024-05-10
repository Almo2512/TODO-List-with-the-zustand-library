"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://github.com/pmndrs/zustand/blob/HEAD/bear.jpg?raw=true"
            className="max-w-sm rounded-lg shadow-2xl "
          />
          <div>
            <h1 className="text-5xl font-bold">
              TODO-List with the zustand library !
            </h1>

            <button
              onClick={() => {
                router.push("/Todolist");
              }}
              className="btn btn-primary mt-5 "
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
