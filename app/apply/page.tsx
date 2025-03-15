"use client";

import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { Select, SelectSection, SelectItem } from "@heroui/select";
import { Checkbox } from "@heroui/checkbox";
import { useState } from "react";

import { createClient } from "@supabase/supabase-js";

import { Spinner } from "@heroui/spinner";

const supabaseUrl = "https://lujbzjnpagthkjmzdlmm.supabase.co";

const supabaseKey = process.env.SUPABASE_KEY;

const sections = [
  { key: "A", label: "A" },
  { key: "B", label: "B" },
  { key: "C", label: "C" },
  { key: "D", label: "D" },
  { key: "E", label: "E" },
  { key: "F", label: "F" },
  { key: "G", label: "G" },
  { key: "H", label: "H" },
  { key: "I", label: "I" },
  { key: "J", label: "J" },
];

const branches = [
  { key: "CSE", label: "CSE" },
  { key: "ECE", label: "ECE" },
  { key: "MME", label: "MME" },
  { key: "Chemical", label: "Chemical" },
  { key: "Civil", label: "Civil" },
  { key: "Mechanical", label: "Mechanical" },
  { key: "Architecture", label: "Architecture" },
  { key: "Planning", label: "Planning" },
  { key: "MDS", label: "MDS" },
  { key: "Electrical", label: "Electrical" },
];

const verticals = [
  { key: "Event Manager", label: "Event Manager" },
  { key: "Sponsorship Executive", label: "Sponsorship Executive" },
  { key: "Content Writer", label: "Content Writer" },
  { key: "Graphic Designer", label: "Graphic Designer" },
  { key: "Video Editor", label: "Video Editor" },
  { key: "Web Developer", label: "Web Developer" },
];

export default function Page() {
  const [submitted, setSubmitted] = useState<{
    [k: string]: FormDataEntryValue;
  } | null>(null);

  const [isFr, setisFr] = useState(false);

  const [isLoaing, setIsLoading] = useState(false);

  const [v1, setV1] = useState<string>("");
  const [v2, setV2] = useState<string>("");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      {!submitted ? (
        <>
          <h1 className="pt-8 text-5xl sm:text-6xl font-extrabold  text-center mb-10 overflow-visible h-[100px] text-transparent bg-clip-text bg-gradient-to-b from-[#fdba74] to-[#49402b]">
            Apply now
          </h1>
          <h2 className="text-neutral-200 text-center text-sm w-4/5">
            Fill out the form below to apply for the Entrepreneurship Cell&apos;s
            annual recruitment drive.
          </h2>
        </>
      ) : (
        <>
          <h1 className="pt-8 pb-2 text-4xl sm:text-6xl font-extrabold  text-center mb-10 overflow-visible min-h-[100px] text-transparent bg-clip-text bg-gradient-to-b from-[#fdba74] to-[#49402b]">
            {`Registered Successfully!`}
          </h1>
          <h2 className="text-neutral-200 text-center text-sm w-4/5">
            {`All the best for the coming rounds.`}
          </h2>
        </>
      )}

      <Form
        className="w-full max-w-md py-10 flex flex-col gap-10"
        onSubmit={async (evt) => {
          evt.preventDefault();
          setIsLoading(true);
          const form = evt.currentTarget;
          const formData = Object.fromEntries(new FormData(form));

          formData["isfr"] = isFr ? "Yes" : "No";

          setSubmitted(formData);
          console.log(formData);

          let supabase;

          if (supabaseKey) {
            supabase = createClient(supabaseUrl, supabaseKey);
            try {
              const { data, error } = await supabase
                .from("registrations")
                .insert([formData])
                .select();

                 // Submit to Google Sheets via API route
                const response = await fetch('/api/google-registeration', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(formData),
                });

                if (!response.ok) {
                  throw new Error('Failed to submit to Google Sheets');
                }

                console.log(data, error);
              setIsLoading(false);

              if (error === null) {
                form.reset();
                form.style.display = "none";
              }
            } catch (e) {
              console.error(e);
            }
          } else {
            console.error("supabase key not found");
          }
        }}
      >
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg text-[#fdba74]">
            {`Personal information:`}
          </h3>
          <span className="text-sm text-default-500">
            {`fill in the following details required to contact you and verify
            your identity.`}
          </span>
        </div>

        <Input
          isRequired
          errorMessage="Please enter a valid email"
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          type="email"
        />

        <Input
          isRequired
          errorMessage="mobile number is required"
          label="Mobile number (WhatsApp connected)"
          labelPlacement="outside"
          name="phone"
          placeholder="000 000 0000"
          type="tel"
        />

        <Input
          isRequired
          errorMessage="Name is required"
          label="Name"
          labelPlacement="outside"
          name="name"
          placeholder="Enter your full name"
          type="text"
        />

        <Select
          isRequired
          errorMessage="Section is required"
          className="max-w-xs"
          label="Section"
          name="section"
          labelPlacement="outside"
          placeholder="select your section"
          value={v1}
        >
          {sections.map((sec) => (
            <SelectItem key={sec.key}>{sec.label}</SelectItem>
          ))}
        </Select>

        <Select
          isRequired
          className="max-w-xs"
          label="Branch"
          labelPlacement="outside"
          placeholder="select your Branch"
          name="branch"
        >
          {branches.map((branch) => (
            <SelectItem key={branch.key}>{branch.label}</SelectItem>
          ))}
        </Select>

        <Input
          isRequired
          errorMessage="Scholar number is required"
          label="Scholar number"
          labelPlacement="outside"
          name="schno"
          placeholder="MANIT Scholar number"
          type="text"
        />

        <Input
          label="Your Linkedin profile link"
          labelPlacement="outside"
          name="linkedin"
          placeholder="https://linkedin.com/in/user123"
          type="text"
        />

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg text-[#fdba74]">
            {`Select your vertical preference:`}
          </h3>
          <span className="text-sm text-default-500">
           
            {`You can apply for as many as two verticals, please select your first
            and second priority.`}
         
          </span>
        </div>

        <Select
          isRequired
          errorMessage="Preferred vertical is required"
          className="max-w-xs"
          label="Vertical-1"
          labelPlacement="outside"
          placeholder="select vertical-1"
          name="vone"
          onChange={(e) => setV1(e.target.value)}
        >
          {verticals.filter(ver => ver.key !== v2).map((ver) => (
            <SelectItem key={ver.key}>{ver.label}</SelectItem>
          ))}
        </Select>

        <Select
          className="max-w-xs"
          label="Vertical-2"
          labelPlacement="outside"
          placeholder="select vertical-2"
          name="vtwo"
          onChange={(e) => setV2(e.target.value)}
        >
          {verticals.filter(ver => ver.key !== v1).map(ver => (
            <SelectItem key={ver.key}>{ver.label}</SelectItem>
          ))}
        </Select>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg text-[#fdba74]">
            More about you
          </h3>
          <span className="text-sm text-default-500">
            let us know about your skills, and why you want to be a part of
            Entrepreneurship Cell.
          </span>
        </div>

        <Checkbox
          name="isfr"
          isSelected={isFr}
          onValueChange={setisFr}
        >
          <span className="text-sm text-default-500">
            {`I was a Fresher's Representative for E-Summit '25`}
          </span>
        </Checkbox>

        {isFr && (
          <Input
            isRequired
            errorMessage="FR ID is required"
            label="Fresher's Representative ID"
            labelPlacement="outside"
            name="frid"
            placeholder="Enter your FR ID"
            type="text"
          />
        )}

        <Textarea
          className="w-full max-w-[500px]"
          label="Skills you'd like to highlight"
          name="skills"
          labelPlacement="outside"
          placeholder="Write in brief about your skills. for example: communication skills, technical skills, etc."
          
        />

        <Textarea
          className="w-full max-w-[500px]"
          label="Statement of Purpose"
          name="sop"
          labelPlacement="outside"
          placeholder="Why do you want to be a part of E-Cell?"
        />

        <Button
          type="submit"
          className="rounded-full px-8 bg-[#956013] text-white font-bold"
        >
          Submit
        </Button>
      </Form>
      {isLoaing && (
        <div className="fixed top-0 bottom-0 left-0 right-0 p-4 text-xs text-neutral-200 z-[1000] backdrop-blur-lg bg-[#956013]/50 flex justify-center items-center flex-col gap-4">
          <Spinner />
          <span className="text-center text-4xl font-semibold">
            {`Submitting your response...`}
          </span>
        </div>
      )}

      {/* {submitted && (
        <div className="text-small flex flex-col w-full justify-center">
          You submitted: 
          {Object.entries(submitted).map(([key, value]) => (    
            <span key={key} className="text-sm text-neutral-200">
              {key}: {value as string}
            </span>
            ))}
        </div>
      )} */}
    </main>
  );
}
