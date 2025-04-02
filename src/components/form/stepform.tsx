"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormStore } from "@/components/form/useForm";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import ProgressBar from "@/components/form/bar";

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
              <Toggle onPressedChange={(v) => setValue("registeredOffice", v)}>Registered Office?</Toggle>
              <Input {...register("businessCategory")} placeholder="Business Category" />
              <Toggle onPressedChange={(v) => setValue("servesAlcohol", v)}>Serves Alcohol?</Toggle>
              <Toggle onPressedChange={(v) => setValue("playsMusic", v)}>Plays Music?</Toggle>
              <Toggle onPressedChange={(v) => setValue("onlineOrdering", v)}>Online Ordering?</Toggle>
              <Toggle onPressedChange={(v) => setValue("manufacturesFood", v)}>Manufactures Food?</Toggle>
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

              <Toggle onPressedChange={(v) => setValue("foodHandlers", v)}>Employees Handle Food?</Toggle>
              <Toggle onPressedChange={(v) => setValue("medicallyFit", v)}>Medically Fit Employees?</Toggle>
            </>
          )}

          {step === 3 && (
            <>
              <Toggle onPressedChange={(v) => setValue("fssaiLicense", v)}>FSSAI License?</Toggle>
              <Toggle onPressedChange={(v) => setValue("foodSafetyPlan", v)}>Food Safety Plan?</Toggle>
              <Toggle onPressedChange={(v) => setValue("wasteDisposalPlan", v)}>Waste Disposal Plan?</Toggle>
              <Toggle onPressedChange={(v) => setValue("environmentalClearance", v)}>Environmental Clearance?</Toggle>
              <Toggle onPressedChange={(v) => setValue("waterTesting", v)}>Water Testing?</Toggle>
            </>
          )}

          {step === 4 && (
            <>
              <Toggle onPressedChange={(v) => setValue("fireSafetyPlan", v)}>Fire Safety Plan?</Toggle>
              <Toggle onPressedChange={(v) => setValue("fireNOC", v)}>Fire NOC?</Toggle>
              <Toggle onPressedChange={(v) => setValue("buildingLayout", v)}>Building Layout?</Toggle>
              <Toggle onPressedChange={(v) => setValue("sanitationMeasures", v)}>Sanitation Measures?</Toggle>
              <Toggle onPressedChange={(v) => setValue("signageBoard", v)}>Signage Board?</Toggle>
            </>
          )}

          {step === 5 && (
            <>
              <Toggle onPressedChange={(v) => setValue("servesAlcohol", v)}>Serves Alcohol?</Toggle>
              <Toggle onPressedChange={(v) => setValue("operatesBar", v)}>Operates Bar?</Toggle>
              <Toggle onPressedChange={(v) => setValue("playsMusic", v)}>Plays Music?</Toggle>
              <Toggle onPressedChange={(v) => setValue("ownsFoodTruck", v)}>Owns Food Truck?</Toggle>
            </>
          )}

          {step === 6 && (
            <>
              <Toggle onPressedChange={(v) => setValue("trademarkRegistered", v)}>Trademark Registered?</Toggle>
              <Toggle onPressedChange={(v) => setValue("onlineOrdering", v)}>Online Ordering?</Toggle>
              <Toggle onPressedChange={(v) => setValue("privacyPolicy", v)}>Privacy Policy?</Toggle>
              <Toggle onPressedChange={(v) => setValue("patentsFiled", v)}>Patents Filed?</Toggle>
            </>
          )}

          {step === 7 && (
            <>
              <Toggle onPressedChange={(v) => setValue("rtoClearance", v)}>RTO Clearance?</Toggle>
              <Toggle onPressedChange={(v) => setValue("municipalityNOC", v)}>Municipality NOC?</Toggle>
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
