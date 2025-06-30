import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/label";

function TreasuryEntry() {
  return (
    <main className="bg-gray-100">
      <section className="flex justify-around items-center p-4">
        <div className="flex flex-col gap-3">
          <Label className="">Student #</Label>
          <Input className="w-[320px]" type="number" placeholder="Enter student number..." />
        </div>

        <div className="flex flex-col gap-3">
          <Label>Student name</Label>
          <Input className="w-[320px]" type="text" placeholder="Enter student name..." />
        </div>
      </section>
    </main>
  );
}

export default TreasuryEntry;
