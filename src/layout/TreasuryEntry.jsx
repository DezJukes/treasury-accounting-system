import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/label";
import MultiSelectDropdown from "@/components/ui/MultiSelectDropdown";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

function TreasuryEntry() {
  return (
    <main>
      <section className="flex m-20 gap-10"> 
        {/* Left Side: Receipt Inputs */}
        <section className="bg-white shadow-xs shadow-black rounded-2xl">


          {/* Student name and student # */}
          <section className="flex items-center px-10 mt-10 gap-10">
            <div className="flex flex-col gap-3">
              <Label className="text-h4 font-bold">Student #</Label>
              <Input className="text-small border-indigoHue w-[320px]" type="number" placeholder="Enter student number..." />
            </div>
            <div className="flex flex-col gap-3">
              <Label className="text-h4 font-bold">Student name</Label>
              <Input className="text-small border-indigoHue w-[320px]" type="text" placeholder="Enter student name..." />
            </div>
          </section>


          {/* Document Preset */}
          <section className="flex items-center px-10 mt-10">
            <div className="flex flex-col gap-3">
              <Label className="text-h4 font-bold">Document Preset</Label>
              <RadioGroup className="flex" defaultValue="default-option">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem className="border-indigoHue" value="default-option" id="default-option" />
                  <Label htmlFor="default-option">None</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem className="border-indigoHue" value="scholarship-option" id="scholarship-option" />
                  <Label htmlFor="scholarship-option">Scholarship</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem className="border-indigoHue" value="graduating-option" id="graduating-option" />
                  <Label htmlFor="graduating-option">Graduating</Label>
                </div>
              </RadioGroup>
            </div>
          </section>


          {/* Documents */}
          <section className="px-10 mt-10">
            <div>
              <Label className="text-h4 font-bold mb-3">Select document</Label>
              <MultiSelectDropdown />
            </div>
          </section>


          {/* Payment Type and Amount */}
          <section className="flex gap-10 px-10 my-10">
            <div className="flex flex-col gap-3">
              <Label className="text-h4 font-bold">Document Preset</Label>
              <RadioGroup className="flex" defaultValue="default-option">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem className="border-indigoHue" value="default-option" id="default-option" />
                  <Label htmlFor="default-option">None</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem className="border-indigoHue" value="scholarship-option" id="scholarship-option" />
                  <Label htmlFor="scholarship-option">Scholarship</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem className="border-indigoHue" value="graduating-option" id="graduating-option" />
                  <Label htmlFor="graduating-option">Graduating</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex flex-col gap-3">
              <Label className="text-h4 font-bold">Amount</Label>
              <Input className="text-small border-indigoHue w-[320px]" type="number" placeholder="Enter amount..." />
            </div>
          </section>


          {/* Buttons for clear and generate report */}
          <section className="flex justify-around my-10">
            <Button className="btn-clear bg-[#71717A] w-xs">Clear</Button>
            <Button className="btn-generate bg-freshGreen w-xs">Generate Receipt</Button>
          </section>
        </section>

        {/* Right Side: Summary List */}
        <section className="bg-indigoHue">
          <section>
            <div>
              <h1 className="text-h2 text-textBase">Summary</h1>
              <hr className="border-t-2 border-white mt-4 py-4 w-full" />
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}

export default TreasuryEntry;
