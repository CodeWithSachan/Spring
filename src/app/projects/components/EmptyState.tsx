export default function EmptyState() {
  return (
    <div className="col-span-full text-center py-20">
      <div className="mx-auto mb-6 h-20 w-20 rounded-full
        bg-gradient-to-r from-pink-500/20 to-purple-500/20
        flex items-center justify-center text-3xl">
        🌸
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">
        No projects found
      </h3>

      <p className="text-gray-400 max-w-md mx-auto">
        Try adjusting your filters or check back later.
        New projects are added continuously.
      </p>
    </div>
  );
}
