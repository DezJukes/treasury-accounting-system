import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/label";
import MultiSelectDropdown from "@/components/ui/MultiSelectDropdown";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import SelectSearch from "@/components/ui/search-select";
import { useState } from "react";
 
export function ChipDefault() {
  return <Chip value="chip"/>;
}

function ManualEntry() {
  const [ isStudentPayor, setIsStudentPayor ] = useState(true);

  function toggleStudentPayor() {
    setIsStudentPayor(true);
    console.log("student payor!");
  }

  function toggleNonStudentPayor() {
    setIsStudentPayor(false);
    console.log("non-student payor!");
  }

  return (
    <main>
      <section className="manual-receipt">
        <section className="content">
          {/* left content */}
          <div className="input-container bg-white m-[0.5rem]">

            {/* payor selection */}
            <div className="payor-container">
              <RadioGroup className="payor-radio">
                <div className="payor">
                  <span className="stud-payor">
                    <input type="radio" id="studPay" name="payor-radios" onClick={toggleStudentPayor}/>
                    <label htmlFor="studPay">STUDENT PAYOR</label>
                  </span>
                  <span className="nonstud-payor">
                    <input type="radio" id="nstudPay" onClick={toggleNonStudentPayor} name="payor-radios"/>
                    <label htmlFor="nstudPay">NON-STUDENT PAYOR</label>
                  </span>
                </div>
              </RadioGroup>
            </div>

            <div className="info-container">
              
              {/* payor input */}
              <div className="input-payor border-b-2 border-plmWhite">
                
                <div className="student-no">
                  <Label>Student Name</Label>
                  <Input placeholder="Enter student no.."/>
                </div>

                <div>
                  <Label>College</Label>
                  <SelectSearch/>
                </div>
              
              </div>

              {/* document search */}
              <div className="multiselect-container">
                <Label>Search Documents</Label>
                <MultiSelectDropdown/>
              </div>

              {/* document category */}
              <div className="doc-category">
                <Label>Documents by Category</Label>
                <RadioGroup className="category-radio">
                  <div className="category-items">
                    <span className="category-item">
                      <input type="radio" id="cat-all" name="cat-radios"/>
                      <label htmlFor="cat-all">All</label>
                    </span>
                    <span className="category-item">
                      <input type="radio" id="cat-cert" name="cat-radios"/>
                      <label htmlFor="cat-cert">Certificates</label>
                    </span>
                    <span className="category-item">
                      <input type="radio" id="cat-fee" name="cat-radios"/>
                      <label htmlFor="cat-fee">School Fees</label>
                    </span>
                    <span className="category-item">
                      <input type="radio" id="cat-trust" name="cat-radios"/>
                      <label htmlFor="cat-trust">Trust Liabilities</label>
                    </span>
                    <span className="category-item">
                      <input type="radio" id="cat-misc" name="cat-radios"/>
                      <label htmlFor="cat-misc">Misc</label>
                    </span>
                  </div>
                </RadioGroup>
              </div>



            </div>

          </div>
          {/* right content */}
          <div className="receipt-container">

          </div>
        </section>
      </section>
    </main>
  );
}

export default ManualEntry;
