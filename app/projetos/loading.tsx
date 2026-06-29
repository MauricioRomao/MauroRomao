
import Spinner from "@/components/Skeletons/Spinner";

export default function RootLoading() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <Spinner />
    </div>
  );
}
