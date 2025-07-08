import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/label";
import MultiSelectDropdown from "@/components/ui/MultiSelectDropdown";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import "@/components/styles/treasury-entry.css";

function ManualEntry() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-PH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  });

  const formattedTime = today.toLocaleTimeString('en-PH', {
      hour: 'numeric',
      minute: 'long',
  });

  return (
    <main>
      <section className="manual-receipt">
        <section className="header">
          <img className="logo" src="./plm-logo.png" alt="plm-logo"/>
          <span className="text-black font-bold text-lg">
            {formattedDate}
          </span>
          <span className="text-black font-bold text-lg">
            {formattedTime}
          </span>
        </section>
        <section className="content">
          <div className="input-container">

          </div>
          <div className="receipt-container">

          </div>
        </section>
      </section>
    </main>
  );
}

export default ManualEntry;
