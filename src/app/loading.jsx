export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#030712]">
      
      <div className="flex flex-col items-center gap-5">

        {/* Spinner */}
        <div className="h-14 w-14 rounded-full border-4 border-gray-200 border-t-blue-600 animate-spin">
        </div>


        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 animate-pulse">
          Loading...
        </p>

      </div>

    </div>
  );
}