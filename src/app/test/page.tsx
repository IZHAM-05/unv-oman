import connectDB from "@/lib/mongodb";

export default async function TestPage() {
  await connectDB();

  return (
    <h1 className="text-3xl p-10">
      Database Connected
    </h1>
  );
}