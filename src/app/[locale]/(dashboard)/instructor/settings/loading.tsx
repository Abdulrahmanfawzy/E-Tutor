// settings/loading.tsx
export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="h-8 w-40 animate-pulse bg-gray-200" />
      <div className="h-96 animate-pulse bg-gray-200" />
      <div className="h-48 animate-pulse bg-gray-200" />
    </div>
  );
}