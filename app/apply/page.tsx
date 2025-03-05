"use client";

import {Form} from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { Select, SelectSection, SelectItem } from "@heroui/select";
import {Checkbox} from "@heroui/checkbox";
import { useState } from "react";

const sections = [
    {key:"A", label:"A"},
    {key:"B", label:"B"},
    {key:"C", label:"C"},
    {key:"D", label:"D"},
    {key:"E", label:"E"},
    {key:"F", label:"F"},
    {key:"G", label:"G"},
    {key:"H", label:"H"},
    {key:"I", label:"I"},
    {key:"J", label:"J"},
]

const branches = [
    {key:"CSE", label:"CSE"},
    {key:"ECE", label:"ECE"},
    {key:"MME", label:"MME"},
    {key:"Chemical", label:"Chemical"},
    {key:"Civil", label:"Civil"},
    {key:"Mechanical", label:"Mechanical"},
    {key:"Architectre", label:"Architecture"},
    {key:"Planning", label:"Planning"},
    {key:"MDS", label:"MDS"},
    {key:"Electrical", label:"Electrical"},
]

const verticals = [
    {key:"Event Manager", label:"Event Manager"},
    {key:"Sponsorship Executive", label:"Sponsorship Executive"},
    {key:"Content Writer", label:"Content Writer"},
    {key:"Graphic Designer", label:"Graphic Designer"},
    {key:"Video Editor", label:"Video Editor"},
    {key:"Web Developer", label:"Web Developer"},
]

export default function page(){ 
    
    const [submitted, setSubmitted] = useState<FormDataEntryValue|null>(null);

    const [isFr, setisFr] = useState(false);

    
    return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <h1 className="pt-8 text-6xl font-extrabold  text-center mb-10 overflow-visible h-[100px] text-transparent bg-clip-text bg-gradient-to-b from-[#fdba74] to-[#49402b]">
            Apply now
        </h1>
        <h2>Fill the form below to apply for Entrepreneurship cell's annual recruitment drive.</h2>

        <Form className="w-full max-w-md py-10 flex flex-col gap-10" onSubmit={(data) => {}}>
      
        <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg text-[#fdba74]">Personal information:</h3>
            <span className="text-sm text-default-500">
                fill the following details required to contact you and verify your identity.
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
            label="Mobile number"
            labelPlacement="outside"
            name="mobno"
            placeholder="000 000 0000"
            type="tel"
        />
        
        <Input
            isRequired
            errorMessage="Name is required"
            label="Name"
            labelPlacement="outside"
            name="fullname"
            placeholder="Enter your full name"
            type="text"
        />
        
        <Select
        isRequired
        className="max-w-xs"
        label="Section"
        labelPlacement="outside"
        placeholder="select your section"
        >

            {sections.map(sec => (
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

            {branches.map(branch => (
                <SelectItem key={branch.key}>{branch.label}</SelectItem>
            ))
            }
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
            <h3 className="font-semibold text-lg text-[#fdba74]">Select your vertical preference:</h3>
            <span className="text-sm text-default-500">
                You can apply for as many as two verticals, please select your first and second priority.
            </span>
        </div>

        <Select
        isRequired
        className="max-w-xs"
        label="Vertical-1"
        labelPlacement="outside"
        placeholder="select vertical-1"
        name="vertical1"
        >

            {verticals.map(ver => (
                <SelectItem key={ver.key}>{ver.label}</SelectItem>
            ))}
        </Select>

        <Select
        className="max-w-xs"
        label="Vertical-2"
        labelPlacement="outside"
        placeholder="select vertical-2"
        name="vertical2"
        >

            {verticals.map(sec => (
                <SelectItem key={sec.key}>{sec.label}</SelectItem>
            ))}
        </Select>
    
        <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg text-[#fdba74]">More about yourself</h3>
            <span className="text-sm text-default-500">
                let us know about your skills, and why you want to be a part of Entrepreneurship Cell.
            </span>
        </div>
 
        <Checkbox name="isfr" isSelected={isFr} onValueChange={setisFr} >
            <span className="text-sm text-default-500">
                I was a Fresher's Representative for E-Summit '25
            </span>
        </Checkbox>

        {
            isFr && (
                <Input
                isRequired
                errorMessage="Please enter a valid email"
                label="Fresher's Representative ID"
                labelPlacement="outside"
                name="frid"
                placeholder="Enter your FR ID"
                type="text"
                />
            )
        }

        <Textarea className="w-full max-w-[500px]" label="Skills you'd like to highlight" name="skills" labelPlacement="outside" placeholder="for example: communication skills, technical skills, etc." />
    
        <Textarea className="w-full max-w-[500px]" label="Statement of Purpose" name="sop" labelPlacement="outside" placeholder="Why do you want to be a part of E-Cell?" />

      <Button type="submit" variant="bordered">
        Submit
      </Button>
      {submitted && (
        <div className="text-small text-default-500">
          You submitted: <code>{JSON.stringify(submitted)}</code>
        </div>
      )}
    </Form>

    </main>
)
}