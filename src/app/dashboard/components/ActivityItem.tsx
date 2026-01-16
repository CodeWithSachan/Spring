// import { Activity } from "../types/activity";

// const iconMap: Record<Activity["type"], string> = {
//   JOINED: "🌸",
//   APPLY: "📌",
//   PR_OPENED: "🔧",
//   PR_MERGED: "✅",
//   BADGE: "🏅",
// };

// export default function ActivityItem({ activity }: { activity: Activity }) {
//   return (
//     <div className="relative flex gap-4 pb-8">
//       {/* Line */}
//       <div className="absolute left-4 top-0 h-full w-px bg-white/10" />

//       {/* Icon */}
//       <div className="
//         relative z-10
//         flex h-9 w-9 items-center justify-center
//         rounded-full
//         bg-pink-500/15
//         text-pink-400
//         border border-pink-500/30
//       ">
//         {iconMap[activity.type]}
//       </div>

//       {/* Content */}
//       <div className="flex-1">
//         <p className="text-sm font-medium text-white">
//           {activity.title}
//         </p>

//         {activity.description && (
//           <p className="mt-1 text-sm text-gray-400">
//             {activity.description}
//           </p>
//         )}

//         <p className="mt-1 text-xs text-gray-500">
//           {new Date(activity.date).toLocaleDateString("en-US", {
//             month: "short",
//             day: "numeric",
//             year: "numeric",
//           })}
//         </p>
//       </div>
//     </div>
//   );
// }
