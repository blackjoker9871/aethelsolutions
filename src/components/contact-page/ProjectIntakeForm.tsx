"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  Send,
  CheckCircle2,
  ShieldCheck,
  Loader2,
  Mail,
  RefreshCw,
} from "lucide-react";
import { ApiResponse } from "@/lib/server/types";
import { analytics } from "@/lib/analytics";

interface FormData {
  // Step 1: Business
  name: string;
  companyName: string;
  website: string;
  industry: string;

  // Step 2: Problem
  problemDescription: string;
  problemCategories: string[];
  currentWorkflow: string;

  // Step 3: System
  systemTypes: string[];

  // Step 4: Scope
  projectStage: string;
  timeline: string;
  budget: string;

  // Step 5: Contact & Consent
  email: string;
  phone: string;
  additionalNotes: string;
  consent: boolean;

  // Anti-Spam Honeypot (Hidden)
  website_hp: string;
}

const INITIAL_FORM_DATA: FormData = {
  name: "",
  companyName: "",
  website: "",
  industry: "",

  problemDescription: "",
  problemCategories: [],
  currentWorkflow: "",

  systemTypes: [],

  projectStage: "",
  timeline: "",
  budget: "",

  email: "",
  phone: "",
  additionalNotes: "",
  consent: true,

  website_hp: "",
};

const INDUSTRIES = [
  "HEALTHCARE",
  "MANUFACTURING",
  "AUTOMOTIVE",
  "RETAIL",
  "EDUCATION",
  "LEGAL",
  "FINANCE",
  "LOGISTICS",
  "REAL ESTATE",
  "PROFESSIONAL SERVICES",
  "OTHER",
];

const PROBLEM_CATEGORIES = [
  "REPETITIVE WORK",
  "CUSTOMER COMMUNICATION",
  "SALES FOLLOW-UP",
  "DATA MANAGEMENT",
  "INTERNAL WORKFLOW",
  "APPOINTMENTS",
  "REPORTING",
  "MANUAL OPERATIONS",
  "CUSTOM SOFTWARE",
  "OTHER",
];

const SYSTEM_MODULES = [
  "AI SYSTEM",
  "AI AUTOMATION",
  "WORKFLOW AUTOMATION",
  "CUSTOM SOFTWARE",
  "AI AGENT",
  "VOICE AI",
  "WHATSAPP SYSTEM",
  "COMPUTER VISION",
  "BUSINESS DASHBOARD",
  "NOT SURE YET",
];

const PROJECT_STAGES = [
  "JUST AN IDEA",
  "I KNOW THE PROBLEM",
  "I HAVE A CLEAR REQUIREMENT",
  "WE NEED TO REPLACE AN EXISTING SYSTEM",
  "WE NEED TO SCALE AN EXISTING SYSTEM",
];

const TIMELINES = [
  "AS SOON AS POSSIBLE",
  "WITHIN 1 MONTH",
  "1–3 MONTHS",
  "3+ MONTHS",
  "NO FIXED TIMELINE",
];

const BUDGET_RANGES = [
  "UNDER ₹50K",
  "₹50K–₹2L",
  "₹2L–₹5L",
  "₹5L–₹10L",
  "₹10L+",
  "NOT SURE YET",
];

const STEPS = [
  { id: 1, label: "BUSINESS" },
  { id: 2, label: "PROBLEM" },
  { id: 3, label: "SYSTEM" },
  { id: 4, label: "SCOPE" },
  { id: 5, label: "CONTACT" },
];

export const ProjectIntakeForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [referenceId, setReferenceId] = useState<string>("");

  const confirmationHeadingRef = useRef<HTMLHeadingElement>(null);

  const hasStartedRef = useRef<boolean>(false);

  const stepNameMap: Record<number, "business" | "problem" | "system" | "scope" | "contact"> = {
    1: "business",
    2: "problem",
    3: "system",
    4: "scope",
    5: "contact",
  };

  useEffect(() => {
    if (isSubmitted && confirmationHeadingRef.current) {
      confirmationHeadingRef.current.focus();
    }
  }, [isSubmitted]);

  // Track initial interaction
  const handleFirstInteraction = () => {
    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      analytics.trackEvent("project_intake_started", {
        step: "business",
        step_number: 1,
      });
    }
  };

  // Toggle helper for multi-select arrays
  const toggleArrayItem = (
    field: "problemCategories" | "systemTypes",
    item: string
  ) => {
    handleFirstInteraction();
    setFormData((prev) => {
      const current = prev[field];
      if (item === "NOT SURE YET") {
        return {
          ...prev,
          [field]: current.includes("NOT SURE YET") ? [] : ["NOT SURE YET"],
        };
      }
      const filtered = current.filter((i) => i !== "NOT SURE YET");
      const exists = filtered.includes(item);
      return {
        ...prev,
        [field]: exists
          ? filtered.filter((i) => i !== item)
          : [...filtered, item],
      };
    });
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  // Step-by-step frontend validation
  const handleNext = () => {
    const errors: Record<string, string> = {};
    setServerError(null);

    if (currentStep === 1) {
      if (!formData.name.trim() || formData.name.trim().length < 2) {
        errors.name = "Please provide your full name (minimum 2 characters).";
      }
      if (!formData.companyName.trim() || formData.companyName.trim().length < 2) {
        errors.companyName = "Please enter your business or company name.";
      }
      if (!formData.industry) {
        errors.industry = "Please select your primary operating industry.";
      }
    }

    if (currentStep === 2) {
      if (!formData.problemDescription.trim() || formData.problemDescription.trim().length < 10) {
        errors.problemDescription =
          "Please describe your business challenge or goal (minimum 10 characters).";
      }
    }

    if (currentStep === 3) {
      if (formData.systemTypes.length === 0) {
        errors.systemTypes =
          "Please select at least one system module (or choose 'NOT SURE YET').";
      }
    }

    if (currentStep === 4) {
      if (!formData.projectStage) {
        errors.projectStage = "Please select your current project stage.";
      }
      if (!formData.timeline) {
        errors.timeline = "Please choose an expected timeline.";
      }
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});

    // Track step completed & next step viewed
    const completedStepName = stepNameMap[currentStep];
    if (completedStepName) {
      analytics.trackFunnelStep(completedStepName, currentStep, "completed");
    }

    if (currentStep < 5) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      const nextStepName = stepNameMap[nextStep];
      if (nextStepName) {
        analytics.trackFunnelStep(nextStepName, nextStep, "viewed");
      }
    }
  };

  const handleBack = () => {
    setFieldErrors({});
    setServerError(null);
    if (currentStep > 1) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      const prevStepName = stepNameMap[prevStep];
      if (prevStepName) {
        analytics.trackFunnelStep(prevStepName, prevStep, "viewed");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const errors: Record<string, string> = {};
    setServerError(null);

    if (!formData.email.trim() || !formData.email.includes("@")) {
      errors.email = "Please enter a valid work email address.";
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      errors.phone = "Please enter a valid phone or WhatsApp contact number.";
    }
    if (!formData.consent) {
      errors.consent = "Please accept the Privacy Policy to submit your brief.";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/project-intake", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data: ApiResponse = await response.json();

      if (response.ok && data.success) {
        setReferenceId(data.projectReference);
        setIsSubmitted(true);
        setServerError(null);

        // Track verified conversion ONLY on real backend success (strictly non-PII properties)
        analytics.trackProjectBriefSubmitted({
          industry: formData.industry,
          system_types: formData.systemTypes,
          project_stage: formData.projectStage,
          timeline: formData.timeline,
          budget_range: formData.budget || undefined,
        });
      } else {
        if (!data.success) {
          if (data.fieldErrors) {
            setFieldErrors(data.fieldErrors);
          }
          setServerError(
            data.message ||
              "We couldn't process your project brief right now. Please try again or contact us directly."
          );
        } else {
          setServerError(
            "We couldn't process your project brief right now. Please try again or contact us directly."
          );
        }
      }
    } catch (networkError) {
      setServerError(
        "Network connection interrupted. Please check your internet connection or email us directly at aethel.officialdesk@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_DATA);
    setCurrentStep(1);
    setIsSubmitted(false);
    setIsSubmitting(false);
    setReferenceId("");
    setFieldErrors({});
    setServerError(null);
  };

  return (
    <section
      className="w-full max-w-4xl mx-auto px-6 sm:px-8 py-8"
      id="intake-form"
      aria-label="Project Brief Intake Section"
    >
      <div className="p-6 sm:p-10 lg:p-12 rounded-3xl sm:rounded-[36px] neu-flat border border-[#EEEAFF] space-y-8 relative overflow-hidden">
        
        {/* ✦ 1. CONFIRMATION STATE ✦ */}
        {isSubmitted ? (
          <div
            role="status"
            aria-live="polite"
            className="text-center space-y-8 py-8"
          >
            {/* Violet Check Badge */}
            <div className="w-16 h-16 rounded-3xl bg-[#6D4AFF] text-white flex items-center justify-center mx-auto shadow-[0_8px_24px_rgba(109,74,255,0.35)]">
              <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
            </div>

            <div className="space-y-3 max-w-xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full neu-inset text-[10px] font-mono font-bold text-[#6D4AFF]">
                <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                <span>PROJECT BRIEF REGISTERED</span>
              </div>
              <h2
                ref={confirmationHeadingRef}
                tabIndex={-1}
                className="text-3xl sm:text-4xl font-extrabold text-[#17152F] tracking-tight focus:outline-none"
              >
                PROJECT BRIEF RECEIVED.
              </h2>
              <p className="text-sm sm:text-base text-[#17152F]/75 leading-relaxed font-medium">
                Your operational requirements have been recorded in the Aethel system.
              </p>
            </div>

            {/* Generated Ticket Reference Box */}
            <div className="max-w-md mx-auto p-6 rounded-2xl neu-inset border border-[#EEEAFF] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#17152F]/60 font-bold">PROJECT REFERENCE ID</span>
                <span className="text-[#6D4AFF] font-extrabold text-base tracking-wider">
                  {referenceId}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#17152F]/60 font-bold">STATUS</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-[10px]">
                  RECEIVED // QUEUED FOR REVIEW
                </span>
              </div>
              <div className="pt-2 border-t border-[#E5E4DE] text-[11px] font-mono text-[#17152F]/70 text-left leading-relaxed">
                ✦ Our engineering directors will evaluate your business problem and requested architecture before coordinating an engineering discovery conversation.
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full neu-button-violet text-xs font-mono font-bold cursor-pointer"
              >
                SUBMIT ANOTHER BRIEF
              </button>
              <Link
                href="/"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full neu-button-light text-xs font-mono font-bold text-[#17152F] text-center"
              >
                BACK TO AETHEL →
              </Link>
            </div>
          </div>
        ) : (
          /* ✦ 2. PROGRESSIVE 5-STEP FORM ✦ */
          <div className="space-y-8">
            
            {/* Top Step Progress Indicator */}
            <nav aria-label="Project Intake Progress" className="space-y-3 pb-6 border-b border-[#EEEAFF]">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-[#6D4AFF]">
                  STEP 0{currentStep} OF 05 // {STEPS[currentStep - 1].label}
                </span>
                <span className="text-[#17152F]/60 font-bold">
                  {Math.round((currentStep / 5) * 100)}% COMPLETED
                </span>
              </div>

              <ol className="grid grid-cols-5 gap-1.5 sm:gap-2 list-none p-0 m-0">
                {STEPS.map((s) => {
                  const isCompleted = s.id < currentStep;
                  const isCurrent = s.id === currentStep;

                  return (
                    <li key={s.id}>
                      <button
                        type="button"
                        onClick={() => s.id < currentStep && setCurrentStep(s.id)}
                        disabled={s.id > currentStep}
                        aria-current={isCurrent ? "step" : undefined}
                        aria-label={`Step ${s.id} of 5: ${s.label} (${
                          isCompleted ? "Completed" : isCurrent ? "Current step" : "Upcoming step"
                        })`}
                        className={`w-full min-h-[44px] p-2 rounded-xl text-center transition-all select-none ${
                          isCurrent
                            ? "neu-flat border-2 border-[#6D4AFF] shadow-sm text-[#6D4AFF]"
                            : isCompleted
                            ? "bg-[#EEEAFF] text-[#6D4AFF] hover:bg-[#E2DBFF] cursor-pointer"
                            : "neu-inset opacity-40 cursor-not-allowed text-[#17152F]/40"
                        }`}
                      >
                        <div className="text-[10px] font-mono font-bold flex items-center justify-center gap-1">
                          {isCompleted ? (
                            <Check className="w-3 h-3 text-[#6D4AFF]" aria-hidden="true" />
                          ) : (
                            <span>0{s.id}</span>
                          )}
                        </div>
                        <div className="text-[9px] font-extrabold hidden sm:block truncate">
                          {s.label}
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </nav>

            {/* Server Error Alert Banner */}
            {serverError && (
              <div
                role="alert"
                className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-mono space-y-2"
              >
                <div className="flex items-center gap-2 font-bold text-rose-700">
                  <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>SUBMISSION INTERRUPTED</span>
                </div>
                <p>{serverError}</p>
                <div className="pt-1 flex items-center gap-4 text-[11px] font-bold">
                  <a
                    href="mailto:aethel.officialdesk@gmail.com"
                    className="inline-flex items-center gap-1 text-[#6D4AFF] hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Contact Directly: aethel.officialdesk@gmail.com</span>
                  </a>
                </div>
              </div>
            )}

            {/* ✦ DYNAMIC STEP CONTENT ✦ */}
            <form onSubmit={handleSubmit} noValidate className="space-y-8" aria-busy={isSubmitting}>
              
              {/* Anti-Spam Hidden Honeypot Field */}
              <div aria-hidden="true" className="sr-only" style={{ display: "none" }}>
                <label htmlFor="field-website-hp">Website Security Verification</label>
                <input
                  id="field-website-hp"
                  name="website_hp"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website_hp}
                  onChange={(e) =>
                    setFormData({ ...formData, website_hp: e.target.value })
                  }
                />
              </div>

              {/* ✦ STEP 01 — BUSINESS ✦ */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17152F] tracking-tight">
                      FIRST, TELL US ABOUT THE BUSINESS.
                    </h3>
                    <p className="text-xs sm:text-sm text-[#17152F]/70 font-medium">
                      Basic context so we understand what kind of operation we&apos;re designing for.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="field-name" className="text-xs font-mono font-bold text-[#17152F] flex items-center gap-1">
                        <span>YOUR NAME</span>
                        <span className="text-[#6D4AFF]" aria-hidden="true">*</span>
                        <span className="sr-only">(required)</span>
                      </label>
                      <input
                        id="field-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onFocus={handleFirstInteraction}
                        onChange={(e) => {
                          handleFirstInteraction();
                          setFormData({ ...formData, name: e.target.value });
                          if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: "" });
                        }}
                        aria-invalid={!!fieldErrors.name}
                        aria-describedby={fieldErrors.name ? "error-name" : undefined}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full min-h-[44px] p-3.5 rounded-xl neu-inset text-xs text-[#17152F] font-medium transition-colors ${
                          fieldErrors.name ? "border-2 border-rose-500 bg-rose-50/20" : "border border-[#EEEAFF]/60"
                        }`}
                      />
                      {fieldErrors.name && (
                        <p id="error-name" role="alert" className="text-[11px] font-mono font-bold text-rose-600 flex items-center gap-1 pt-1">
                          <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                          <span>{fieldErrors.name}</span>
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="field-company" className="text-xs font-mono font-bold text-[#17152F] flex items-center gap-1">
                        <span>COMPANY / BUSINESS NAME</span>
                        <span className="text-[#6D4AFF]" aria-hidden="true">*</span>
                        <span className="sr-only">(required)</span>
                      </label>
                      <input
                        id="field-company"
                        name="companyName"
                        type="text"
                        required
                        autoComplete="organization"
                        value={formData.companyName}
                        onChange={(e) => {
                          setFormData({ ...formData, companyName: e.target.value });
                          if (fieldErrors.companyName) setFieldErrors({ ...fieldErrors, companyName: "" });
                        }}
                        aria-invalid={!!fieldErrors.companyName}
                        aria-describedby={fieldErrors.companyName ? "error-company" : undefined}
                        placeholder="e.g. Apex Industrial Logistics"
                        className={`w-full min-h-[44px] p-3.5 rounded-xl neu-inset text-xs text-[#17152F] font-medium transition-colors ${
                          fieldErrors.companyName ? "border-2 border-rose-500 bg-rose-50/20" : "border border-[#EEEAFF]/60"
                        }`}
                      />
                      {fieldErrors.companyName && (
                        <p id="error-company" role="alert" className="text-[11px] font-mono font-bold text-rose-600 flex items-center gap-1 pt-1">
                          <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                          <span>{fieldErrors.companyName}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="field-website" className="text-xs font-mono font-bold text-[#17152F] flex items-center gap-1">
                      <span>BUSINESS WEBSITE</span>
                      <span className="text-[#17152F]/50 font-normal">(OPTIONAL)</span>
                    </label>
                    <input
                      id="field-website"
                      name="website"
                      type="url"
                      autoComplete="url"
                      value={formData.website}
                      onChange={(e) =>
                        setFormData({ ...formData, website: e.target.value })
                      }
                      placeholder="e.g. https://apexlogistics.com"
                      className="w-full min-h-[44px] p-3.5 rounded-xl neu-inset text-xs text-[#17152F] font-medium border border-[#EEEAFF]/60"
                    />
                  </div>

                  {/* Industry Selector */}
                  <fieldset className="space-y-2 pt-2 border-0 p-0 m-0">
                    <legend className="text-xs font-mono font-bold text-[#17152F] block pb-1">
                      SELECT PRIMARY INDUSTRY <span className="text-[#6D4AFF]" aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </legend>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                      {INDUSTRIES.map((ind) => {
                        const isSelected = formData.industry === ind;
                        return (
                          <button
                            type="button"
                            key={ind}
                            aria-pressed={isSelected}
                            onClick={() => {
                              setFormData({ ...formData, industry: ind });
                              if (fieldErrors.industry) setFieldErrors({ ...fieldErrors, industry: "" });
                            }}
                            className={`min-h-[44px] p-3 rounded-xl text-left text-xs font-mono font-bold transition-all cursor-pointer ${
                              isSelected
                                ? "neu-flat border-2 border-[#6D4AFF] bg-white text-[#6D4AFF] shadow-sm"
                                : "neu-inset text-[#17152F]/75 hover:text-[#6D4AFF]"
                            }`}
                          >
                            <span className="flex items-center justify-between">
                              <span>{ind}</span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-[#6D4AFF]" aria-hidden="true" />}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                    {fieldErrors.industry && (
                      <p role="alert" className="text-[11px] font-mono font-bold text-rose-600 flex items-center gap-1 pt-1">
                        <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                        <span>{fieldErrors.industry}</span>
                      </p>
                    )}
                  </fieldset>
                </div>
              )}

              {/* ✦ STEP 02 — PROBLEM ✦ */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17152F] tracking-tight">
                      WHAT ARE YOU TRYING TO SOLVE?
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6D4AFF] font-bold">
                      Don&apos;t worry about explaining the technology. Explain the business problem.
                    </p>
                  </div>

                  {/* Problem Description */}
                  <div className="space-y-1.5">
                    <label htmlFor="field-problem" className="text-xs font-mono font-bold text-[#17152F] flex items-center gap-1">
                      <span>DESCRIBE THE BOTTLENECK OR GOAL</span>
                      <span className="text-[#6D4AFF]" aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <textarea
                      id="field-problem"
                      name="problemDescription"
                      rows={5}
                      required
                      value={formData.problemDescription}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          problemDescription: e.target.value,
                        });
                        if (fieldErrors.problemDescription) {
                          setFieldErrors({ ...fieldErrors, problemDescription: "" });
                        }
                      }}
                      aria-invalid={!!fieldErrors.problemDescription}
                      aria-describedby={fieldErrors.problemDescription ? "error-problem" : undefined}
                      placeholder="Tell us what currently takes too much time, creates friction, causes missed opportunities, or needs to work differently..."
                      className={`w-full p-4 rounded-2xl neu-inset text-xs text-[#17152F] font-medium leading-relaxed ${
                        fieldErrors.problemDescription ? "border-2 border-rose-500 bg-rose-50/20" : "border border-[#EEEAFF]/60"
                      }`}
                    />
                    {fieldErrors.problemDescription && (
                      <p id="error-problem" role="alert" className="text-[11px] font-mono font-bold text-rose-600 flex items-center gap-1 pt-1">
                        <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                        <span>{fieldErrors.problemDescription}</span>
                      </p>
                    )}
                  </div>

                  {/* Current Workflow (Optional) */}
                  <div className="space-y-1.5">
                    <label htmlFor="field-current-workflow" className="text-xs font-mono font-bold text-[#17152F] flex items-center gap-1">
                      <span>CURRENT SOFTWARE OR MANUAL WORKFLOW</span>
                      <span className="text-[#17152F]/50 font-normal">(OPTIONAL)</span>
                    </label>
                    <input
                      id="field-current-workflow"
                      name="currentWorkflow"
                      type="text"
                      value={formData.currentWorkflow}
                      onChange={(e) =>
                        setFormData({ ...formData, currentWorkflow: e.target.value })
                      }
                      placeholder="e.g. WhatsApp groups + Excel spreadsheets + legacy ERP"
                      className="w-full min-h-[44px] p-3.5 rounded-xl neu-inset text-xs text-[#17152F] font-medium border border-[#EEEAFF]/60"
                    />
                  </div>

                  {/* Category Chips */}
                  <fieldset className="space-y-2 pt-2 border-0 p-0 m-0">
                    <legend className="text-xs font-mono font-bold text-[#17152F] block pb-1">
                      SELECT RELEVANT PROBLEM AREAS <span className="text-[#17152F]/50 font-normal">(OPTIONAL / MULTI-SELECT)</span>
                    </legend>
                    <div className="flex flex-wrap gap-2">
                      {PROBLEM_CATEGORIES.map((cat) => {
                        const isSelected =
                          formData.problemCategories.includes(cat);
                        return (
                          <button
                            type="button"
                            key={cat}
                            aria-pressed={isSelected}
                            onClick={() =>
                              toggleArrayItem("problemCategories", cat)
                            }
                            className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                              isSelected
                                ? "bg-[#6D4AFF] text-white shadow-sm"
                                : "neu-inset text-[#17152F]/80 hover:text-[#6D4AFF]"
                            }`}
                          >
                            {cat}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>
                </div>
              )}

              {/* ✦ STEP 03 — SYSTEM ✦ */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17152F] tracking-tight">
                      WHAT KIND OF SYSTEM DO YOU HAVE IN MIND?
                    </h3>
                    <p className="text-xs sm:text-sm text-[#17152F]/75 font-medium leading-relaxed">
                      Already know what you need? Great. Still figuring it out? That&apos;s exactly what the conversation is for.
                    </p>
                  </div>

                  <fieldset className="space-y-3 border-0 p-0 m-0">
                    <legend className="text-xs font-mono font-bold text-[#17152F] block pb-1">
                      SELECT SYSTEM MODULES <span className="text-[#6D4AFF]" aria-hidden="true">*</span>
                      <span className="sr-only">(required, select at least one)</span>
                    </legend>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {SYSTEM_MODULES.map((mod) => {
                        const isSelected = formData.systemTypes.includes(mod);
                        return (
                          <button
                            type="button"
                            key={mod}
                            aria-pressed={isSelected}
                            onClick={() => toggleArrayItem("systemTypes", mod)}
                            className={`min-h-[64px] p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 ${
                              isSelected
                                ? "neu-flat border-2 border-[#6D4AFF] bg-white shadow-sm"
                                : "neu-inset text-[#17152F]/80 hover:text-[#6D4AFF]"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-mono font-bold text-[#6D4AFF]">
                                MODULE
                              </span>
                              {isSelected && (
                                <Check className="w-3.5 h-3.5 text-[#6D4AFF]" aria-hidden="true" />
                              )}
                            </div>
                            <div className="text-xs sm:text-sm font-extrabold text-[#17152F]">
                              {mod}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {fieldErrors.systemTypes && (
                      <p role="alert" className="text-[11px] font-mono font-bold text-rose-600 flex items-center gap-1 pt-1">
                        <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                        <span>{fieldErrors.systemTypes}</span>
                      </p>
                    )}
                  </fieldset>
                </div>
              )}

              {/* ✦ STEP 04 — SCOPE ✦ */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17152F] tracking-tight">
                      HOW BIG IS THE IDEA?
                    </h3>
                    <p className="text-xs sm:text-sm text-[#17152F]/70 font-medium">
                      Select approximate ranges to help us prepare the right engineering roadmap.
                    </p>
                  </div>

                  {/* Project Stage */}
                  <fieldset className="space-y-2 border-0 p-0 m-0">
                    <legend className="text-xs font-mono font-bold text-[#17152F] block pb-1">
                      PROJECT STAGE <span className="text-[#6D4AFF]" aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {PROJECT_STAGES.map((stage) => {
                        const isSelected = formData.projectStage === stage;
                        return (
                          <button
                            type="button"
                            key={stage}
                            aria-pressed={isSelected}
                            onClick={() => {
                              setFormData({ ...formData, projectStage: stage });
                              if (fieldErrors.projectStage) setFieldErrors({ ...fieldErrors, projectStage: "" });
                            }}
                            className={`min-h-[44px] p-3 rounded-xl text-left text-xs font-mono font-bold transition-all cursor-pointer ${
                              isSelected
                                ? "neu-flat border-2 border-[#6D4AFF] text-[#6D4AFF] bg-white shadow-sm"
                                : "neu-inset text-[#17152F]/80 hover:text-[#6D4AFF]"
                            }`}
                          >
                            <span className="flex items-center justify-between">
                              <span>{stage}</span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-[#6D4AFF]" aria-hidden="true" />}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                    {fieldErrors.projectStage && (
                      <p role="alert" className="text-[11px] font-mono font-bold text-rose-600 flex items-center gap-1 pt-1">
                        <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                        <span>{fieldErrors.projectStage}</span>
                      </p>
                    )}
                  </fieldset>

                  {/* Timeline */}
                  <fieldset className="space-y-2 pt-2 border-0 p-0 m-0">
                    <legend className="text-xs font-mono font-bold text-[#17152F] block pb-1">
                      EXPECTED TIMELINE <span className="text-[#6D4AFF]" aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </legend>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {TIMELINES.map((time) => {
                        const isSelected = formData.timeline === time;
                        return (
                          <button
                            type="button"
                            key={time}
                            aria-pressed={isSelected}
                            onClick={() => {
                              setFormData({ ...formData, timeline: time });
                              if (fieldErrors.timeline) setFieldErrors({ ...fieldErrors, timeline: "" });
                            }}
                            className={`min-h-[44px] p-3 rounded-xl text-left text-xs font-mono font-bold transition-all cursor-pointer ${
                              isSelected
                                ? "neu-flat border-2 border-[#6D4AFF] text-[#6D4AFF] bg-white shadow-sm"
                                : "neu-inset text-[#17152F]/80 hover:text-[#6D4AFF]"
                            }`}
                          >
                            <span className="flex items-center justify-between">
                              <span>{time}</span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-[#6D4AFF]" aria-hidden="true" />}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                    {fieldErrors.timeline && (
                      <p role="alert" className="text-[11px] font-mono font-bold text-rose-600 flex items-center gap-1 pt-1">
                        <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                        <span>{fieldErrors.timeline}</span>
                      </p>
                    )}
                  </fieldset>

                  {/* Budget Ranges (Optional) */}
                  <fieldset className="space-y-2 pt-2 border-0 p-0 m-0">
                    <legend className="text-xs font-mono font-bold text-[#17152F] block pb-1">
                      BUDGET RANGE <span className="text-[#17152F]/50 font-normal">(OPTIONAL)</span>
                    </legend>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {BUDGET_RANGES.map((b) => {
                        const isSelected = formData.budget === b;
                        return (
                          <button
                            type="button"
                            key={b}
                            aria-pressed={isSelected}
                            onClick={() =>
                              setFormData({ ...formData, budget: b })
                            }
                            className={`min-h-[44px] p-3 rounded-xl text-left text-xs font-mono font-bold transition-all cursor-pointer ${
                              isSelected
                                ? "neu-flat border-2 border-[#6D4AFF] text-[#6D4AFF] bg-white shadow-sm"
                                : "neu-inset text-[#17152F]/80 hover:text-[#6D4AFF]"
                            }`}
                          >
                            <span className="flex items-center justify-between">
                              <span>{b}</span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-[#6D4AFF]" aria-hidden="true" />}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>
                </div>
              )}

              {/* ✦ STEP 05 — CONTACT & SUBMIT ✦ */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17152F] tracking-tight">
                      WHERE SHOULD WE REACH YOU?
                    </h3>
                    <p className="text-xs sm:text-sm text-[#17152F]/70 font-medium">
                      Direct contact details for our engineering directors to follow up.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="field-email" className="text-xs font-mono font-bold text-[#17152F] flex items-center gap-1">
                        <span>WORK EMAIL</span>
                        <span className="text-[#6D4AFF]" aria-hidden="true">*</span>
                        <span className="sr-only">(required)</span>
                      </label>
                      <input
                        id="field-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: "" });
                        }}
                        aria-invalid={!!fieldErrors.email}
                        aria-describedby={fieldErrors.email ? "error-email" : undefined}
                        placeholder="alex@company.com"
                        className={`w-full min-h-[44px] p-3.5 rounded-xl neu-inset text-xs text-[#17152F] font-medium transition-colors ${
                          fieldErrors.email ? "border-2 border-rose-500 bg-rose-50/20" : "border border-[#EEEAFF]/60"
                        }`}
                      />
                      {fieldErrors.email && (
                        <p id="error-email" role="alert" className="text-[11px] font-mono font-bold text-rose-600 flex items-center gap-1 pt-1">
                          <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                          <span>{fieldErrors.email}</span>
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="field-phone" className="text-xs font-mono font-bold text-[#17152F] flex items-center gap-1">
                        <span>PHONE / WHATSAPP</span>
                        <span className="text-[#6D4AFF]" aria-hidden="true">*</span>
                        <span className="sr-only">(required)</span>
                      </label>
                      <input
                        id="field-phone"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (fieldErrors.phone) setFieldErrors({ ...fieldErrors, phone: "" });
                        }}
                        aria-invalid={!!fieldErrors.phone}
                        aria-describedby={fieldErrors.phone ? "error-phone" : undefined}
                        placeholder="+91 98400 •••••"
                        className={`w-full min-h-[44px] p-3.5 rounded-xl neu-inset text-xs text-[#17152F] font-medium transition-colors ${
                          fieldErrors.phone ? "border-2 border-rose-500 bg-rose-50/20" : "border border-[#EEEAFF]/60"
                        }`}
                      />
                      {fieldErrors.phone && (
                        <p id="error-phone" role="alert" className="text-[11px] font-mono font-bold text-rose-600 flex items-center gap-1 pt-1">
                          <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                          <span>{fieldErrors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="field-notes" className="text-xs font-mono font-bold text-[#17152F] flex items-center gap-1">
                      <span>ADDITIONAL CONTEXT</span>
                      <span className="text-[#17152F]/50 font-normal">(OPTIONAL)</span>
                    </label>
                    <textarea
                      id="field-notes"
                      name="additionalNotes"
                      rows={3}
                      value={formData.additionalNotes}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          additionalNotes: e.target.value,
                        })
                      }
                      placeholder="Anything about your current software, team constraints, or unique integrations..."
                      className="w-full p-4 rounded-2xl neu-inset text-xs text-[#17152F] font-medium border border-[#EEEAFF]/60 leading-relaxed"
                    />
                  </div>

                  {/* Privacy Policy Consent Checkbox */}
                  <div className="space-y-1.5 pt-2">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => {
                          setFormData({ ...formData, consent: e.target.checked });
                          if (fieldErrors.consent) setFieldErrors({ ...fieldErrors, consent: "" });
                        }}
                        className="mt-1 w-4 h-4 rounded border-[#EEEAFF] text-[#6D4AFF] focus:ring-[#6D4AFF] accent-[#6D4AFF]"
                      />
                      <span className="text-xs text-[#17152F]/80 leading-relaxed">
                        I acknowledge that submitting this project brief initiates an engineering enquiry and agree to the processing of contact information in accordance with Aethel&apos;s{" "}
                        <Link
                          href="/privacy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#6D4AFF] font-bold underline hover:text-[#5B3CE6]"
                        >
                          Privacy Policy
                        </Link>
                        .
                      </span>
                    </label>
                    {fieldErrors.consent && (
                      <p role="alert" className="text-[11px] font-mono font-bold text-rose-600 flex items-center gap-1 pt-1">
                        <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                        <span>{fieldErrors.consent}</span>
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* ✦ NAVIGATION BUTTONS ✦ */}
              <div className="pt-6 border-t border-[#EEEAFF] flex items-center justify-between gap-4">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={isSubmitting}
                    className="min-h-[44px] px-5 py-3 rounded-full neu-button-light text-xs font-mono font-bold text-[#17152F] flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>BACK</span>
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 5 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="min-h-[44px] px-7 py-3 rounded-full neu-button-violet text-xs font-mono font-bold flex items-center gap-2 cursor-pointer"
                  >
                    <span>CONTINUE</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`min-h-[48px] px-8 py-3.5 rounded-full neu-button-violet text-xs font-mono font-bold flex items-center gap-2 shadow-[0_4px_16px_rgba(109,74,255,0.4)] cursor-pointer transition-all ${
                      isSubmitting ? "opacity-75 cursor-wait" : "hover:scale-105"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                        <span>REGISTERING PROJECT BRIEF...</span>
                      </>
                    ) : (
                      <>
                        <span>SEND PROJECT BRIEF →</span>
                        <Send className="w-3.5 h-3.5" aria-hidden="true" />
                      </>
                    )}
                  </button>
                )}
              </div>

            </form>

          </div>
        )}

      </div>
    </section>
  );
};
