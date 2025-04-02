"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormStore } from "@/components/form/useForm";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "../ui/switch";
import { watch } from "fs";

const stepSchemas = [
  z.object({
    businessName: z.string().min(2, "Business name is required"),
    businessType: z.string().min(2, "Business type is required"),
    businessAddress: z.string().min(5, "Address is required"),
    registeredOffice: z.boolean(),
    businessCategory: z.string().min(2, "Business category is required"),
    servesAlcohol: z.boolean(),
    playsMusic: z.boolean(),
    onlineOrdering: z.boolean(),
    manufacturesFood: z.boolean(),
  }),
  z.object({
    ownerName: z.string().min(2, "Owner name is required"),
    ownerAadhaar: z.string().length(12, "Aadhaar must be 12 digits"),
    employeesCount: z.number().min(1, "At least 1 employee required"),
    foodHandlers: z.boolean(),
    medicallyFit: z.boolean(),
  }),
  z.object({
    fssaiLicense: z.boolean(),
    foodSafetyPlan: z.boolean(),
    wasteDisposalPlan: z.boolean(),
    environmentalClearance: z.boolean(),
    waterTesting: z.boolean(),
  }),
  z.object({
    fireSafetyPlan: z.boolean(),
    fireNOC: z.boolean(),
    buildingLayout: z.boolean(),
    sanitationMeasures: z.boolean(),
    signageBoard: z.boolean(),
  }),
  z.object({
    servesAlcohol: z.boolean(),
    operatesBar: z.boolean(),
    playsMusic: z.boolean(),
    ownsFoodTruck: z.boolean(),
  }),
  z.object({
    trademarkRegistered: z.boolean(),
    onlineOrdering: z.boolean(),
    privacyPolicy: z.boolean(),
    patentsFiled: z.boolean(),
  }),
  z.object({
    rtoClearance: z.boolean(),
    municipalityNOC: z.boolean(),
  }),
];

const stepTitles = [
  "Business Information",
  "Owner & Employee Details",
  "Food Safety & Compliance",
  "Infrastructure & Safety",
  "Special Licenses",
  "Legal & Compliance",
  "Municipal & RTO Permissions",
];

const StepForm = () => {
  const { step, nextStep, prevStep, updateData, data } = useFormStore();
  const schema = stepSchemas[step - 1] as z.ZodType<any>;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema), defaultValues: data });

  const onSubmit = (formData: any) => {
    updateData(formData);
    if (step < 7) nextStep();
    else alert("Form submitted successfully!");
  };

  return (
    <Card className="w-full max-w-lg mx-auto p-6">
      <CardHeader>
        <CardTitle>{stepTitles[step - 1]}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {step === 1 && (
            <>
              <Input {...register("businessName")} placeholder="Business Name" />
              <Input {...register("businessType")} placeholder="Business Type" />
              <Input {...register("businessAddress")} placeholder="Business Address" />

              <div className="flex items-center">
                <Switch
                  checked={!!watch("registeredOffice")}
                  onCheckedChange={(v) => setValue("registeredOffice", v)}
                />
                <label className="ml-2">Registered Office?</label>
              </div>

              <Input {...register("businessCategory")} placeholder="Business Category" />

              <div className="flex items-center">
                <Switch
                  checked={!!watch("servesAlcohol")}
                  onCheckedChange={(v) => setValue("servesAlcohol", v)}
                />
                <label className="ml-2">Serves Alcohol?</label>
              </div>

              <div className="flex items-center">
                <Switch
                  checked={!!watch("playsMusic")}
                  onCheckedChange={(v) => setValue("playsMusic", v)}
                />
                <label className="ml-2">Plays Music?</label>
              </div>

              <div className="flex items-center">
                <Switch
                  checked={!!watch("onlineOrdering")}
                  onCheckedChange={(v) => setValue("onlineOrdering", v)}
                />
                <label className="ml-2">Online Ordering?</label>
              </div>

              <div className="flex items-center">
                <Switch
                  checked={!!watch("manufacturesFood")}
                  onCheckedChange={(v) => setValue("manufacturesFood", v)}
                />
                <label className="ml-2">Manufactures Food?</label>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <Input {...register("ownerName")} placeholder="Owner Name" />
              <Input {...register("ownerAadhaar")} placeholder="Aadhaar Number" />
              <Input
                {...register("employeesCount", { valueAsNumber: true })}
                type="number"
                placeholder="Number of Employees"
              />

              <div className="flex items-center">
                <Switch
                  checked={!!watch("foodHandlers")}
                  onCheckedChange={(v) => setValue("foodHandlers", v)}
                />
                <label className="ml-2">Employees Handle Food?</label>
              </div>

              <div className="flex items-center">
                <Switch
                  checked={!!watch("medicallyFit")}
                  onCheckedChange={(v) => setValue("medicallyFit", v)}
                />
                <label className="ml-2">Medically Fit Employees?</label>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              {["fssaiLicense", "foodSafetyPlan", "wasteDisposalPlan", "environmentalClearance", "waterTesting"].map(
                (field) => (
                  <div key={field} className="flex items-center">
                    <Switch checked={!!watch(field)} onCheckedChange={(v) => setValue(field, v)} />
                    <label className="ml-2">{field.replace(/([A-Z])/g, " $1").trim()}?</label>
                  </div>
                )
              )}
            </>
          )}

          {step === 4 && (
            <>
              {["fireSafetyPlan", "fireNOC", "buildingLayout", "sanitationMeasures", "signageBoard"].map((field) => (
                <div key={field} className="flex items-center">
                  <Switch checked={!!watch(field)} onCheckedChange={(v) => setValue(field, v)} />
                  <label className="ml-2">{field.replace(/([A-Z])/g, " $1").trim()}?</label>
                </div>
              ))}
            </>
          )}

          {step === 5 && (
            <>
              {["servesAlcohol", "operatesBar", "playsMusic", "ownsFoodTruck"].map((field) => (
                <div key={field} className="flex items-center">
                  <Switch checked={!!watch(field)} onCheckedChange={(v) => setValue(field, v)} />
                  <label className="ml-2">{field.replace(/([A-Z])/g, " $1").trim()}?</label>
                </div>
              ))}
            </>
          )}

          {step === 6 && (
            <>
              {["trademarkRegistered", "onlineOrdering", "privacyPolicy", "patentsFiled"].map((field) => (
                <div key={field} className="flex items-center">
                  <Switch checked={!!watch(field)} onCheckedChange={(v) => setValue(field, v)} />
                  <label className="ml-2">{field.replace(/([A-Z])/g, " $1").trim()}?</label>
                </div>
              ))}
            </>
          )}

          {step === 7 && (
            <>
              {["rtoClearance", "municipalityNOC"].map((field) => (
                <div key={field} className="flex items-center">
                  <Switch checked={!!watch(field)} onCheckedChange={(v) => setValue(field, v)} />
                  <label className="ml-2">{field.replace(/([A-Z])/g, " $1").trim()}?</label>
                </div>
              ))}
            </>
          )}

          {errors[Object.keys(errors)[0]] && (
            <p className="text-red-500">{String(errors[Object.keys(errors)[0]]?.message)}</p>
          )}

          <div className="flex justify-between">
            {step > 1 && (
              <Button variant="outline" onClick={prevStep}>
                Previous
              </Button>
            )}
            <Button type="submit">{step < 7 ? "Next" : "Submit"}</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
export default StepForm;
