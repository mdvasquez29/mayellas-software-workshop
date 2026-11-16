"use client";
import React, { useState } from "react";

export interface SolutionData {
  title: string;
  category: string;
  pricing: { solo: number; small: number; enterprise: number };
  apiCosts: string;
  turnkeySummary: string;
  demoUrl?: string;
  diyBlueprint: {
    steps: string[];
    systemPrompt: string;
  };
}

export const SOLUTIONS_DATA: Record<string, SolutionData> = {
  // 1. AUTO REPAIR & DIESEL FLEET
  "auto-prob1": {
    title: "Mobile Bay Ticket Log",
    category: "Auto Repair & Diesel Fleet",
    pricing: { solo: 350, small: 450, enterprise: 700 },
    apiCosts: "$0/mo (Free Vercel hosting + Google Sheets backend)",
    turnkeySummary: "Rugged mobile app with large touch buttons and speech-to-text input so mechanics log parts and labor without typing with greasy fingers, saving directly to Google Sheets.",
    demoUrl: "https://drive.google.com/file/d/1BUlM5emH77rHRnMz1Z5IlC2iRX1sVVBp/view?usp=sharing",
    diyBlueprint: {
      steps: [
        "Create a free Google Sheet with columns: Date, Tech Name, Vehicle VIN, Parts Used, Labor Hours.",
        "Set up an HTML form or Google Form bookmarked on shop tablets.",
        "Connect Form submissions to write directly into your Google Sheet via Google Apps Script."
      ],
      systemPrompt: `Vibe Coding Prompt: "Build a mobile-first React component for an auto repair shop with large touch buttons, voice-to-text input for mechanics with greasy hands, and direct Google Sheets logging for repair jobs."`
    }
  },
  "auto-prob2": {
    title: "Automated WhatsApp Status Tracker",
    category: "Auto Repair & Diesel Fleet",
    pricing: { solo: 350, small: 450, enterprise: 650 },
    apiCosts: "~$2 – $5/mo (Twilio / WhatsApp API charges pennies per message)",
    turnkeySummary: "A 1-click status board that fires personalized bilingual WhatsApp pings to customers when vehicle repair milestones are reached.",
    demoUrl: "https://drive.google.com/file/d/1BUlM5emH77rHRnMz1Z5IlC2iRX1sVVBp/view?usp=sharing",
    diyBlueprint: {
      steps: [
        "Set up a WhatsApp Cloud API or Twilio template message webhook.",
        "Build a simple dashboard with milestone buttons (Parts Arrived, Ready for Pickup).",
        "Trigger automated bilingual texts upon button click."
      ],
      systemPrompt: `Vibe Coding Prompt: "Build a service writer dashboard with 1-click buttons that send personalized bilingual WhatsApp updates to customers via API."`
    }
  },
  "auto-prob3": {
    title: "Digital Invoice & Payment Aging Tracker",
    category: "Auto Repair & Diesel Fleet",
    pricing: { solo: 350, small: 450, enterprise: 700 },
    apiCosts: "~$2 – $5/mo (WhatsApp message volume)",
    turnkeySummary: "Automated WhatsApp payment reminders 24 hours post-invoice, paired with a quick local supplier price directory.",
    demoUrl: "https://drive.google.com/file/d/1BUlM5emH77rHRnMz1Z5IlC2iRX1sVVBp/view?usp=sharing",
    diyBlueprint: {
      steps: [
        "Create an invoice tracking Google Sheet with due dates and contact numbers.",
        "Configure automated daily scheduled scripts to send WhatsApp payment links.",
        "Incorporate a quick local supplier price directory tab."
      ],
      systemPrompt: `Vibe Coding Prompt: "Build an invoice aging tracker that automatically dispatches polite WhatsApp payment reminder links 24 hours post-invoice."`
    }
  },

  // 2. CROSS-BORDER LOGISTICS & FREIGHT
  "logistics-prob1": {
    title: "Centralized POD & Customs Document Index",
    category: "Cross-Border Logistics & Freight",
    pricing: { solo: 350, small: 450, enterprise: 650 },
    apiCosts: "~$3 – $10/mo (OpenAI/Gemini Vision API tokens for document OCR scanning)",
    turnkeySummary: "Mobile portal where drivers snap stamps/slips; AI vision auto-crops, renames with load numbers, and indexes directly into Google Drive.",
    demoUrl: "https://drive.google.com/file/d/1BUlM5emH77rHRnMz1Z5IlC2iRX1sVVBp/view?usp=sharing",
    diyBlueprint: {
      steps: [
        "Create a Google Drive folder for customs documents.",
        "Set up a Make.com or Zapier webhook to parse uploaded driver images via Gemini Vision OCR.",
        "Automatically rename files using extracted load/pedimento numbers and save them to Drive."
      ],
      systemPrompt: `Vibe Coding Prompt: "Create a Next.js component with a mobile camera dropzone that sends images to Gemini Vision OCR, extracts document IDs, and uploads to Google Drive."`
    }
  },
  "logistics-prob2": {
    title: "Border & Fleet Queue Dispatcher",
    category: "Cross-Border Logistics & Freight",
    pricing: { solo: 350, small: 450, enterprise: 650 },
    apiCosts: "~$2 – $5/mo (WhatsApp notification pings)",
    turnkeySummary: "A structured dispatch logging board that organizes border queue wait status and driver updates without chat clutter.",
    demoUrl: "https://drive.google.com/file/d/1BUlM5emH77rHRnMz1Z5IlC2iRX1sVVBp/view?usp=sharing",
    diyBlueprint: {
      steps: [
        "Build a real-time queue table component in Next.js connected to a Supabase or Google Sheet database.",
        "Provide drivers a mobile check-in link to update their border crossing wait status.",
        "Display a clean, sortable queue view for dispatchers."
      ],
      systemPrompt: `Vibe Coding Prompt: "Build a real-time dispatch queue board for cross-border freight drivers to report wait times and status updates."`
    }
  },
  "logistics-prob3": {
    title: "Bilingual Freight Dispatch Hub",
    category: "Cross-Border Logistics & Freight",
    pricing: { solo: 350, small: 450, enterprise: 650 },
    apiCosts: "~$5 – $12/mo (Translation & messaging API usage)",
    turnkeySummary: "Automatically translates and logs load instructions instantly across English/Spanish text threads.",
    demoUrl: "https://drive.google.com/file/d/1BUlM5emH77rHRnMz1Z5IlC2iRX1sVVBp/view?usp=sharing",
    diyBlueprint: {
      steps: [
        "Integrate a translation API into an internal chat/dispatch logging interface.",
        "Route English broker instructions to auto-translate into Spanish for drivers.",
        "Translate driver confirmations back into professional English logs."
      ],
      systemPrompt: `Vibe Coding Prompt: "Build a bilingual messaging hub that automatically translates load instructions between English brokers and Spanish-speaking drivers."`
    }
  },

  // 3. AGRIBUSINESS & PRODUCE PACKING
  "ag-prob1": {
    title: "Cold-Chain Pulp Temp Logger",
    category: "Agribusiness & Produce Packing",
    pricing: { solo: 350, small: 450, enterprise: 650 },
    apiCosts: "$0/mo (Google Sheets/Forms infrastructure)",
    turnkeySummary: "A rapid mobile checklist tool for FSMA compliance that syncs temperature readings directly into audit-ready digital sheets.",
    demoUrl: "https://drive.google.com/file/d/1BUlM5emH77rHRnMz1Z5IlC2iRX1sVVBp/view?usp=sharing",
    diyBlueprint: {
      steps: [
        "Create a Google Sheet pre-formatted with FSMA compliance audit columns.",
        "Build a simple mobile form for field inspectors to log pulp temperatures and lot codes.",
        "Apply conditional formatting to highlight temperatures exceeding 38°F."
      ],
      systemPrompt: `Vibe Coding Prompt: "Build a mobile pulp temperature logging PWA for produce packing houses with automatic compliance red flagging."`
    }
  },
  "ag-prob2": {
    title: "Field Harvest & Piece-Rate Tally",
    category: "Agribusiness & Produce Packing",
    pricing: { solo: 350, small: 450, enterprise: 650 },
    apiCosts: "$0/mo (Cloud data sync)",
    turnkeySummary: "Digitizes field harvest tallies on mobile devices with live aggregation to eliminate manual payroll math errors.",
    demoUrl: "https://drive.google.com/file/d/1BUlM5emH77rHRnMz1Z5IlC2iRX1sVVBp/view?usp=sharing",
    diyBlueprint: {
      steps: [
        "Build an offline-first mobile web app for field supervisors to log crew bins and piece-rates.",
        "Implement local storage caching for areas with weak desert cellular signals.",
        "Sync data automatically to a central payroll sheet upon reconnection."
      ],
      systemPrompt: `Vibe Coding Prompt: "Build an offline-capable field harvest tally app for agricultural supervisors to record crew bins and calculate piece-rate totals."`
    }
  },
  "ag-prob3": {
    title: "Equipment & Maintenance Alert Thresholds",
    category: "Agribusiness & Produce Packing",
    pricing: { solo: 350, small: 450, enterprise: 650 },
    apiCosts: "~$0 – $3/mo (Email/WhatsApp webhook alerts)",
    turnkeySummary: "Tracks operating hours and fires automated WhatsApp/email alerts before expensive breakdowns occur.",
    demoUrl: "https://drive.google.com/file/d/1BUlM5emH77rHRnMz1Z5IlC2iRX1sVVBp/view?usp=sharing",
    diyBlueprint: {
      steps: [
        "Create an equipment tracking dashboard recording tractor operating hours.",
        "Set up threshold triggers for service intervals (e.g., every 250 hours).",
        "Configure automated webhook alerts to notify mechanics via WhatsApp."
      ],
      systemPrompt: `Vibe Coding Prompt: "Build a tractor maintenance hour tracker that triggers automated WhatsApp service warnings when hourly thresholds are reached."`
    }
  },

  // 4. LOCAL TRADES & CONTRACTING
  "trades-prob1": {
    title: "Quick-Bid & Proposal Tracker",
    category: "Local Trades & Contracting",
    pricing: { solo: 350, small: 450, enterprise: 600 },
    apiCosts: "~$2 – $5/mo (SMS/WhatsApp follow-ups)",
    turnkeySummary: "Simplifies bid follow-ups and tracks proposal status with automated text nudges.",
    demoUrl: "https://drive.google.com/file/d/1BUlM5emH77rHRnMz1Z5IlC2iRX1sVVBp/view?usp=sharing",
    diyBlueprint: {
      steps: [
        "Build a lightweight mobile proposal generator for contractors on site.",
        "Generate instant client approval links sent via text.",
        "Track proposal pipelines in a clean dashboard."
      ],
      systemPrompt: `Vibe Coding Prompt: "Build a mobile proposal generator for contractors that instantly texts a client-friendly approval link."`
    }
  },
  "trades-prob2": {
    title: "Subcontractor Crew Dispatch",
    category: "Local Trades & Contracting",
    pricing: { solo: 350, small: 450, enterprise: 600 },
    apiCosts: "$0 – $3/mo",
    turnkeySummary: "Organizes site schedules, job locations, and updates into a single mobile dashboard.",
    demoUrl: "https://drive.google.com/file/d/1BUlM5emH77rHRnMz1Z5IlC2iRX1sVVBp/view?usp=sharing",
    diyBlueprint: {
      steps: [
        "Create a centralized job-site calendar and assignment board.",
        "Provide crew leads a mobile view of site locations and daily tasks.",
        "Log arrival confirmations in real-time."
      ],
      systemPrompt: `Vibe Coding Prompt: "Build a mobile crew dispatch board organizing job sites, schedules, and subcontractor assignments."`
    }
  },
  "trades-prob3": {
    title: "Digital Change Order Log",
    category: "Local Trades & Contracting",
    pricing: { solo: 350, small: 450, enterprise: 600 },
    apiCosts: "$0/mo",
    turnkeySummary: "Captures on-site client sign-offs and extra costs instantly via a quick mobile link.",
    demoUrl: "https://drive.google.com/file/d/1BUlM5emH77rHRnMz1Z5IlC2iRX1sVVBp/view?usp=sharing",
    diyBlueprint: {
      steps: [
        "Build a mobile form for logging on-site scope changes and extra costs.",
        "Attach photo evidence directly from phone cameras.",
        "Capture instant digital client signatures before starting extra work."
      ],
      systemPrompt: `Vibe Coding Prompt: "Build a digital change order logger that captures on-site photo evidence and client signatures via mobile link."`
    }
  },

  // 5. CATERING & FOOD SERVICE
  "catering-prob1": {
    title: "Kitchen Allergen & Prep Log",
    category: "Catering & Food Service",
    pricing: { solo: 350, small: 450, enterprise: 600 },
    apiCosts: "$0/mo",
    turnkeySummary: "Centralizes event dietary restrictions and prep specs directly for the kitchen team.",
    demoUrl: "https://drive.google.com/file/d/1BUlM5emH77rHRnMz1Z5IlC2iRX1sVVBp/view?usp=sharing",
    diyBlueprint: {
      steps: [
        "Create a structured database of event dietary requirements and severe allergies.",
        "Build a filtered tablet view for prep station chefs.",
        "Ensure instant visibility during event prep rushes."
      ],
      systemPrompt: `Vibe Coding Prompt: "Build a kitchen prep display dashboard that filters event recipes and allergen requirements."`
    }
  },
  "catering-prob2": {
    title: "Event Headcount & Prep Scaler",
    category: "Catering & Food Service",
    pricing: { solo: 350, small: 450, enterprise: 600 },
    apiCosts: "$0/mo",
    turnkeySummary: "Dynamically recalculates recipe quantities and prep requirements based on updated guest counts.",
    demoUrl: "https://drive.google.com/file/d/1BUlM5emH77rHRnMz1Z5IlC2iRX1sVVBp/view?usp=sharing",
    diyBlueprint: {
      steps: [
        "Build a recipe scaling formula engine in React.",
        "Allow event managers to update guest counts instantly on mobile.",
        "Recalculate exact ingredient batches automatically."
      ],
      systemPrompt: `Vibe Coding Prompt: "Build a mobile recipe scaling calculator that updates ingredient quantities based on changing guest counts."`
    }
  },
  "catering-prob3": {
    title: "Kitchen Shift & Event Coordinator",
    category: "Catering & Food Service",
    pricing: { solo: 350, small: 450, enterprise: 600 },
    apiCosts: "$0/mo",
    turnkeySummary: "Digitizes event timelines to keep kitchen and service staff synchronized.",
    demoUrl: "https://drive.google.com/file/d/1BUlM5emH77rHRnMz1Z5IlC2iRX1sVVBp/view?usp=sharing",
    diyBlueprint: {
      steps: [
        "Replace whiteboards with a digital event timeline dashboard.",
        "Track prep milestones, delivery schedules, and staff shift rotations.",
        "Make accessible across kitchen tablets."
      ],
      systemPrompt: `Vibe Coding Prompt: "Build a kitchen timeline and shift scheduling dashboard for catering events."`
    }
  },

  // 6. CLINICS, PRINT SHOPS & FRONT-DESK SERVICES
  "services-prob1": {
    title: "Automated WhatsApp Appointment & Reminder Queue",
    category: "Clinics, Print Shops & Front-Desk Services",
    pricing: { solo: 350, small: 450, enterprise: 600 },
    apiCosts: "~$2 – $5/mo (WhatsApp automated message volume)",
    turnkeySummary: "Syncs daily schedules from Google Sheets to send automated 24-hour bilingual WhatsApp appointment confirmations and one-tap reschedule replies.",
    demoUrl: "https://drive.google.com/file/d/1BUlM5emH77rHRnMz1Z5IlC2iRX1sVVBp/view?usp=sharing",
    diyBlueprint: {
      steps: [
        "Set up a daily appointment schedule tab in Google Sheets with client phone numbers and appointment times.",
        "Connect an automated Apps Script or Make.com trigger to dispatch 24-hour bilingual WhatsApp reminders.",
        "Log 'Confirmed' or 'Reschedule' replies straight back into your front-desk sheet."
      ],
      systemPrompt: `Vibe Coding Prompt: "Build a front-desk appointment confirmation dashboard synced with Google Sheets that triggers bilingual WhatsApp reminders 24 hours before scheduled visits."`
    }
  },
  "services-prob2": {
    title: "Print & Custom Job Proof Tracker",
    category: "Clinics, Print Shops & Front-Desk Services",
    pricing: { solo: 350, small: 450, enterprise: 600 },
    apiCosts: "$0/mo (Google Drive + Google Sheets integration)",
    turnkeySummary: "Centralizes artwork files, proof approvals, and production specs in one searchable Google Sheets & Drive tracker so custom jobs never stall.",
    demoUrl: "https://drive.google.com/file/d/1BUlM5emH77rHRnMz1Z5IlC2iRX1sVVBp/view?usp=sharing",
    diyBlueprint: {
      steps: [
        "Create a job-intake form that auto-files customer artwork into organized Google Drive job folders.",
        "Log job specs, due dates, and proof approval timestamps into a live Google Sheets production board.",
        "Send a 1-click WhatsApp proof approval link directly to the client."
      ],
      systemPrompt: `Vibe Coding Prompt: "Build a custom print and service job tracker that links artwork proofs in Google Drive to a live Google Sheets status board with 1-click client approval links."`
    }
  },
  "services-prob3": {
    title: "1-Click Front-Desk Pickup & Status Broadcaster",
    category: "Clinics, Print Shops & Front-Desk Services",
    pricing: { solo: 350, small: 450, enterprise: 600 },
    apiCosts: "~$2 – $5/mo (WhatsApp notification pings)",
    turnkeySummary: "Replaces repetitive 'Is my order/result ready?' phone calls with a 1-click WhatsApp status button tied directly to your front-desk tracker.",
    demoUrl: "https://drive.google.com/file/d/1BUlM5emH77rHRnMz1Z5IlC2iRX1sVVBp/view?usp=sharing",
    diyBlueprint: {
      steps: [
        "Build a clean front-desk queue board displaying active orders, lab results, or print jobs.",
        "Add a 1-click 'Ready for Pickup' button next to each client row.",
        "Trigger an instant bilingual WhatsApp message with pickup hours and location details."
      ],
      systemPrompt: `Vibe Coding Prompt: "Build a front-desk status board with 1-click bilingual WhatsApp pickup notifications to eliminate repetitive customer status phone calls."`
    }
  }
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const [currency, setCurrency] = useState<"USD" | "MXN">("USD");
  const [view, setView] = useState<string>("home"); // "home" | "quiz" | "results" | "bio"

  // Quiz States
  const [industry, setIndustry] = useState<string>("auto");
  const [teamSize, setTeamSize] = useState<string>("small"); // solo, small, enterprise
  const [bottleneck, setBottleneck] = useState<string>("prob1");

  // Tab State on Results page ("savings" or "request")
  const [activeTab, setActiveTab] = useState<"savings" | "request">("savings");

  // Accordion & Drawer States
  const [isDiyOpen, setIsDiyOpen] = useState<boolean>(false);
  const [isMathOpen, setIsMathOpen] = useState<boolean>(false);
  const [copiedPrompt, setCopiedPrompt] = useState<boolean>(false);

  // Request Form States
  const [clientName, setClientName] = useState<string>("");
  const [clientEmail, setClientEmail] = useState<string>("");
  const [clientPhone, setClientPhone] = useState<string>("");
  const [businessName, setBusinessName] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  // External Links & Exchange Baseline
  const RESUME_URL = "https://drive.google.com/file/d/1s8MICQ8nOu_fvWwZiGUTLKdZpZEMiBqT/view?usp=sharing";
  const DEMO_STUDIO_URL = "https://drive.google.com/file/d/1BUlM5emH77rHRnMz1Z5IlC2iRX1sVVBp/view?usp=sharing";
  const CALENDAR_BOOKING_URL = "https://calendar.app.google/nhtmMAaZBvMPfSDL9";
  const USD_TO_MXN_RATE = 20; // Conservative border corridor exchange rate ($1 USD = $20 MXN)
  const HOURLY_DRAG_RATE_USD = 35; // BLS Imperial Valley loaded admin/supervisory baseline

  const formatMoney = (usdAmount: number) => {
    if (currency === "MXN") {
      return `$${Math.round(usdAmount * USD_TO_MXN_RATE).toLocaleString()} MXN`;
    }
    return `$${usdAmount.toLocaleString()} USD`;
  };

  // Dynamic pricing based on team size & solution lookup
  const getSelectedSolutionKey = () => {
    let indPrefix = "auto";
    if (industry === "logistics") indPrefix = "logistics";
    else if (industry === "ag") indPrefix = "ag";
    else if (industry === "trades") indPrefix = "trades";
    else if (industry === "catering") indPrefix = "catering";
    else if (industry === "services") indPrefix = "services";

    return `${indPrefix}-${bottleneck}`;
  };

  const activeSolutionKey = getSelectedSolutionKey();
  const activeSolutionData = SOLUTIONS_DATA[activeSolutionKey] || SOLUTIONS_DATA["auto-prob1"];

  const getTeamPricing = () => {
    if (teamSize === "solo") {
      return {
        rawSetupUsd: activeSolutionData.pricing.solo,
        setup: formatMoney(activeSolutionData.pricing.solo),
        multiplier: 1,
        descEn: "Solo / Small Team (1–3 people)",
        descEs: "Operación Individual (1–3 personas)"
      };
    } else if (teamSize === "small") {
      return {
        rawSetupUsd: activeSolutionData.pricing.small,
        setup: formatMoney(activeSolutionData.pricing.small),
        multiplier: 2.2,
        descEn: "Growing Team (4–15 people)",
        descEs: "Equipo Pequeño / Taller (4–15 personas)"
      };
    } else {
      return {
        rawSetupUsd: activeSolutionData.pricing.enterprise,
        setup: formatMoney(activeSolutionData.pricing.enterprise),
        multiplier: 4.5,
        descEn: "Fleet / Enterprise (15+ people)",
        descEs: "Flota / Empresa (15+ personas)"
      };
    }
  };

  const pricingMeta = getTeamPricing();
  const mult = pricingMeta.multiplier;

  const getQuizResult = () => {
    const hoursLost = Math.round(30 * mult);
    const financialDragUsd = hoursLost * HOURLY_DRAG_RATE_USD;
    return {
      title: activeSolutionData.category,
      solutionName: activeSolutionData.title,
      description: activeSolutionData.turnkeySummary,
      apiCost: activeSolutionData.apiCosts,
      hoursLost,
      financialDragUsd,
      financialDragFormatted: formatMoney(financialDragUsd),
      setupFee: pricingMeta.setup
    };
  };

  const result = getQuizResult();

  const getHeadacheOptions = () => {
    switch (industry) {
      case "auto":
        return [
          { id: "prob1", label: lang === "en" ? "1. Greasy paper job slips lost on clipboards" : "1. Órdenes de papel grasientas perdidas" },
          { id: "prob2", label: lang === "en" ? "2. Front desk interrupted by status calls" : "2. Recepción saturada de llamadas de estatus" },
          { id: "prob3", label: lang === "en" ? "3. Parts pricing phone tag & slow payment collection" : "3. Búsqueda de piezas y cobros lentos" }
        ];
      case "logistics":
        return [
          { id: "prob1", label: lang === "en" ? "1. POD photos & customs slips scattered in chats" : "1. Fotos de entrega y sellos dispersos en chats" },
          { id: "prob2", label: lang === "en" ? "2. Endless WhatsApp group texts tracking wait times" : "2. Grupos de WhatsApp caóticos para tiempos de espera" },
          { id: "prob3", label: lang === "en" ? "3. Manual message translation between brokers and drivers" : "3. Traducción manual entre brokers y choferes" }
        ];
      case "ag":
        return [
          { id: "prob1", label: lang === "en" ? "1. Paper cold-storage pulp temp logs causing audit delays" : "1. Registros de temperatura en papel retrasan auditorías" },
          { id: "prob2", label: lang === "en" ? "2. Seasonal piece-rate field tallies calculated on paper" : "2. Conteo de cosecha por destajo calculado en papel" },
          { id: "prob3", label: lang === "en" ? "3. Tractor service intervals tracked by memory" : "3. Mantenimientos de tractores llevados de memoria" }
        ];
      case "trades":
        return [
          { id: "prob1", label: lang === "en" ? "1. Estimates emailed to homeowners get buried" : "1. Presupuestos por correo se pierden sin respuesta" },
          { id: "prob2", label: lang === "en" ? "2. Juggling texts to coordinate subcontractors" : "2. Coordinar subcontratistas mediante textos aislados" },
          { id: "prob3", label: lang === "en" ? "3. Verbal change requests on-site leading to disputes" : "3. Cambios verbales en obra generan discusiones" }
        ];
      case "services":
        return [
          { id: "prob1", label: lang === "en" ? "1. Front desk bogged down confirming appointments manually" : "1. Recepción saturada confirmando citas manualmente" },
          { id: "prob2", label: lang === "en" ? "2. Print & custom job proofs scattered across messages" : "2. Pruebas de impresión y pedidos dispersos en chats" },
          { id: "prob3", label: lang === "en" ? "3. Repetitive 'Is my order/result ready?' status phone calls" : "3. Llamadas repetitivas preguntando si el pedido ya está listo" }
        ];
      default:
        return [
          { id: "prob1", label: lang === "en" ? "1. Dietary and allergen notes lost on sticky notes" : "1. Notas de alergias perdidas en papelitos" },
          { id: "prob2", label: lang === "en" ? "2. Last-minute guest count shifts throwing off prep math" : "2. Cambios de invitados descuadran la cocina" },
          { id: "prob3", label: lang === "en" ? "3. Weekend event schedules planned on whiteboards" : "3. Horarios de eventos planeados en pizarrones" }
        ];
    }
  };

  const headaches = getHeadacheOptions();

  const resetApp = () => {
    setView("home");
    setFormSubmitted(false);
    setIsDiyOpen(false);
    setIsMathOpen(false);
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(activeSolutionData.diyBlueprint.systemPrompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const handleRequestSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!clientEmail && !clientPhone) {
      alert(
        lang === "en"
          ? "Please provide an email or phone number."
          : "Por favor proporcione un correo o teléfono."
      );
      return;
    }

    const selectedBottleneck = getHeadacheOptions().find(option => option.id === bottleneck)?.label ?? bottleneck;
    const teamDescription = lang === "en" ? pricingMeta.descEn : pricingMeta.descEs;

    const payload = {
      first_name: clientName || "",
      last_name: "",
      email: clientEmail || "",
      phone: clientPhone || "",
      company: businessName || "Not Provided",
      source: "website",
      industry,
      teamSize,
      primaryBottleneck: selectedBottleneck,
      industryLabel: result.title,
      teamDescription,
      monthlyHoursLost: result.hoursLost,
      monthlyFinancialImpact: result.financialDragUsd,
      currencySelected: currency,
      solutionDescription: result.description,
      apiCost: result.apiCost,
      solution: result.solutionName,
      estimatedFee: result.setupFee,
      message: [
        `Contact: ${clientName}`,
        `Industry: ${result.title}`,
        `Team size: ${teamDescription}`,
        `Bottleneck: ${selectedBottleneck}`,
        `Hours lost per month: ${result.hoursLost}`,
        `Estimated monthly impact: ${result.financialDragFormatted}`,
        `Selected solution: ${result.solutionName}`,
        `Solution details: ${result.description}`,
        `Estimated fee: ${result.setupFee}`,
        `Estimated operating costs: ${result.apiCost}`
      ].join(" | "),
      created_at: new Date().toISOString()
    };

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorText = await response.text().catch(() => "");
        throw new Error(
          `Submission failed: ${response.status} ${response.statusText}${
            errorText ? ` - ${errorText}` : ""
          }`
        );
      }

      setFormSubmitted(true);
    } catch (error) {
      console.error("Submit error:", error);
      alert(
        lang === "en"
          ? "The request could not be submitted. Please try again."
          : "No se pudo enviar la solicitud. Inténtalo de nuevo."
      );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col justify-between p-4 md:p-8 max-w-2xl mx-auto border-x border-neutral-900 shadow-2xl">
      
      {/* Header */}
      <header className="flex justify-between items-center py-4 border-b border-neutral-900 mb-6">
        <div className="flex items-center gap-2 cursor-pointer" onClick={resetApp}>
          <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-bold text-sm tracking-tighter">
            M
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight text-white leading-none">Mayella&apos;s Software Workshop</h1>
            <p className="text-[10px] text-neutral-400 font-mono tracking-wider">
              {lang === "en" ? "IMPERIAL VALLEY & MEXICALI" : "VALLE IMPERIAL Y MEXICALI"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono">
          {view !== "home" && (
            <button onClick={resetApp} className="text-neutral-400 hover:text-white px-2 py-1">
              {lang === "en" ? "Home" : "Inicio"}
            </button>
          )}
          <a
            href={DEMO_STUDIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white px-2 py-1"
          >
            {lang === "en" ? "View Dashboard of Product Demos" : "Ver Dashboard de Demos"}
          </a>
          <button onClick={() => setView("bio")} className="text-neutral-400 hover:text-white px-2.5 py-1">
            {lang === "en" ? "About Me" : "Acerca de Mí"}
          </button>
          
          <div className="flex items-center gap-1 bg-neutral-900 border border-neutral-800 p-0.5 rounded-full ml-1">
            <button
              onClick={() => {
                setLang("en");
                setCurrency("USD");
              }}
              className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${lang === "en" ? "bg-white text-black" : "text-neutral-400"}`}
            >
              EN
            </button>
            <button
              onClick={() => {
                setLang("es");
                setCurrency("MXN");
              }}
              className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${lang === "es" ? "bg-white text-black" : "text-neutral-400"}`}
            >
              ES
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center">

        {/* HOME VIEW */}
        {view === "home" && (
          <div className="space-y-8 py-6 text-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 font-mono mx-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                {lang === "en" ? "Custom Software for Border Corridor Businesses" : "Software a la Medida para el Corredor Fronterizo"}
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {lang === "en"
                  ? "Calculate Your Business Operational Leaks in 60 Seconds"
                  : "Calcula las Fugas Operativas de tu Negocio en 60 Segundos"}
              </h2>
              <p className="text-xs md:text-sm text-neutral-400 leading-relaxed max-w-md mx-auto">
                {lang === "en"
                  ? "Select your industry and team size to see exactly how much labor time and money custom software can save your operation."
                  : "Selecciona tu industria y tamaño de equipo para ver exactamente cuánto tiempo y dinero puede ahorrar tu operación."}
              </p>

              <div className="pt-2 flex justify-center items-center">
                <button
                  onClick={() => setView("quiz")}
                  className="px-6 py-3.5 bg-white hover:bg-neutral-200 text-black font-bold rounded-xl shadow-lg transition-all text-xs tracking-wide"
                >
                  {lang === "en" ? "Start 60-Second Calculator →" : "Iniciar Calculadora →"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* BIO VIEW (ABOUT ME & RESUME) */}
        {view === "bio" && (
          <div className="space-y-6 max-w-lg mx-auto py-4 text-xs md:text-sm leading-relaxed text-neutral-300 animate-fadeIn">
            <div className="space-y-2 border-b border-neutral-800 pb-4">
              <h2 className="text-xl font-bold text-white">Mayella&apos;s Software Workshop</h2>
              <p className="text-neutral-400 font-mono text-xs">Imperial Valley & Mexicali Corridor</p>
            </div>

            <div className="space-y-3">
              <p>
                {lang === "en"
                  ? "Growing up in Imperial Valley I saw firsthand how local shops, transport fleets, and family-run trades lose thousands of dollars every month to outdated clipboards, messy paper receipts, and manual coordination. I build production-grade web applications, voice-first tools, and data pipelines solving real physical bottlenecks."
                  : "Al crecer en el Valle Imperial, vi de primera mano cómo los talleres locales, flotas de transporte y negocios familiares pierden miles de dólares cada mes debido a portapapeles obsoletos, recibos de papel desordenados y coordinación manual."}
              </p>
              <p>
                {lang === "en"
                  ? "This independent workshop was engineered specifically to replace messy paper records, clipboards, and manual coordination with custom software that generic no-code tools and chatbots simply cannot replicate."
                  : "Este taller independiente fue diseñado específicamente para reemplazar registros de papel desordenados, portapapeles y coordinación manual con software a la medida que las herramientas sin código y los chatbots genéricos simplemente no pueden replicar."}
              </p>
            </div>

            {/* Demo link in About Me / Bio area */}
            <div className="p-4 bg-neutral-950 border border-neutral-900 rounded-2xl space-y-2">
              <span className="text-[10px] font-mono text-emerald-400 uppercase">Live Product Prototype</span>
              <h3 className="text-xs font-bold text-white">
                {lang === "en" ? "View Dashboard of Product Demos" : "Dashboard de Demos de Productos"}
              </h3>
              <p className="text-[11px] text-neutral-400">
                {lang === "en"
                  ? "Explore a live working model of our custom web apps designed for border corridor operations."
                  : "Explora un modelo en vivo de nuestras aplicaciones web diseñadas para operaciones del corredor fronterizo."}
              </p>
              <a
                href={DEMO_STUDIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-neutral-900 border border-neutral-800 hover:border-white text-xs font-bold text-white rounded-xl transition-all mt-1"
              >
                <span>⚡</span>
                <span>{lang === "en" ? "View Dashboard of Product Demos" : "Ver Dashboard de Demos"}</span>
              </a>
            </div>

            <div className="pt-2 flex gap-3">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-neutral-900 border border-neutral-800 hover:border-white rounded-xl text-xs font-bold text-white transition-all flex items-center gap-2"
              >
                <span>📄</span>
                <span>{lang === "en" ? "View Full Resume / Portfolio ↗" : "Ver Currículum / Portafolio ↗"}</span>
              </a>
              <button
                onClick={() => setView("home")}
                className="px-4 py-2.5 bg-white text-black rounded-xl text-xs font-bold hover:bg-neutral-200 transition-all ml-auto"
              >
                {lang === "en" ? "Back to Calculator" : "Volver a Calculadora"}
              </button>
            </div>
          </div>
        )}

        {/* QUIZ FLOW VIEW */}
        {view === "quiz" && (
          <div className="space-y-6 max-w-md mx-auto w-full py-2 animate-fadeIn">
            <div className="space-y-1">
              <span className="text-[10px] text-neutral-400 font-mono uppercase">Quick Assessment</span>
              <h2 className="text-base font-bold text-white">
                {lang === "en" ? "1. Select your industry:" : "1. Selecciona tu industria:"}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {[
                { id: "auto", label: lang === "en" ? "Auto Repair & Diesel Fleet" : "Taller Mecánico y Flotas Diesel" },
                { id: "logistics", label: lang === "en" ? "Cross-Border Logistics & Freight" : "Logística y Transporte Transfronterizo" },
                { id: "ag", label: lang === "en" ? "Agribusiness & Produce Packing" : "Agrícola y Empaque de Hortalizas" },
                { id: "trades", label: lang === "en" ? "Local Trades & Contracting" : "Oficios y Contratistas" },
                { id: "catering", label: lang === "en" ? "Catering & Food Service" : "Catering y Servicios de Alimentos" },
                { id: "services", label: lang === "en" ? "Clinics, Print Shops & Front-Desk Services" : "Clínicas, Imprentas y Servicios de Mostrador" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setIndustry(item.id);
                    setBottleneck("prob1");
                  }}
                  className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all ${
                    industry === item.id ? "bg-neutral-900 border-white text-white" : "bg-neutral-950 border-neutral-900 text-neutral-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="space-y-1">
              <h2 className="text-base font-bold text-white">
                {lang === "en" ? "2. Select your team size:" : "2. Selecciona el tamaño de tu equipo:"}
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "solo", label: lang === "en" ? "1–3 People" : "1–3 Personas" },
                { id: "small", label: lang === "en" ? "4–15 People" : "4–15 Personas" },
                { id: "enterprise", label: lang === "en" ? "15+ People" : "15+ Personas" }
              ].map((size) => (
                <button
                  key={size.id}
                  onClick={() => setTeamSize(size.id)}
                  className={`p-3 rounded-xl border text-center text-xs font-semibold transition-all ${
                    teamSize === size.id ? "bg-neutral-900 border-white text-white" : "bg-neutral-950 border-neutral-900 text-neutral-400"
                  }`}
                >
                  {size.label}
                </button>
              ))}
            </div>

            <div className="space-y-1">
              <h2 className="text-base font-bold text-white">
                {lang === "en" ? "3. Pick your biggest daily bottleneck:" : "3. Elige tu mayor cuello de botella diario:"}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {headaches.map((h) => (
                <button
                  key={h.id}
                  onClick={() => setBottleneck(h.id)}
                  className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all ${
                    bottleneck === h.id ? "bg-neutral-900 border-white text-white" : "bg-neutral-950 border-neutral-900 text-neutral-400"
                  }`}
                >
                  {h.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setActiveTab("savings");
                setView("results");
              }}
              className="w-full py-3.5 bg-white hover:bg-neutral-200 text-black font-bold rounded-xl shadow-lg transition-all text-xs tracking-wide"
            >
              {lang === "en" ? "View Time & Financial Savings →" : "Ver Ahorro de Tiempo y Dinero →"}
            </button>
          </div>
        )}

        {/* RESULTS VIEW */}
        {view === "results" && (
          <div className="space-y-5 max-w-lg mx-auto w-full py-2 animate-fadeIn">
            {/* Top Bar: Tabs + USD/MXN Currency Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab("savings")}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === "savings" ? "bg-white text-black" : "bg-neutral-900 text-neutral-400 hover:text-white"
                  }`}
                >
                  {lang === "en" ? "1. Savings & Tool Blueprint" : "1. Ahorros y Herramienta"}
                </button>
                <button
                  onClick={() => setActiveTab("request")}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === "request" ? "bg-white text-black" : "bg-neutral-900 text-neutral-400 hover:text-white"
                  }`}
                >
                  {lang === "en" ? "2. Request Free Demo & Call" : "2. Pedir Demo y Llamada"}
                </button>
              </div>

              <div className="flex items-center gap-1 bg-neutral-900 border border-neutral-800 p-0.5 rounded-lg text-[10px] font-mono">
                <button
                  onClick={() => setCurrency("USD")}
                  className={`px-2 py-1 rounded-md font-bold ${currency === "USD" ? "bg-white text-black" : "text-neutral-400"}`}
                >
                  USD $
                </button>
                <button
                  onClick={() => setCurrency("MXN")}
                  className={`px-2 py-1 rounded-md font-bold ${currency === "MXN" ? "bg-white text-black" : "text-neutral-400"}`}
                >
                  MXN $
                </button>
              </div>
            </div>

            {activeTab === "savings" && (
              <div className="space-y-4">
                {/* Metrics Card */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 bg-neutral-950 border border-neutral-900 rounded-2xl">
                    <span className="text-[10px] text-neutral-400 font-mono uppercase">
                      {lang === "en" ? "Estimated Time Lost" : "Tiempo Perdido Est."}
                    </span>
                    <p className="text-2xl font-extrabold text-amber-400 mt-1">{result.hoursLost} hrs / mo</p>
                    <p className="text-[10px] text-neutral-500 mt-0.5">
                      {lang === "en" ? pricingMeta.descEn : pricingMeta.descEs}
                    </p>
                  </div>

                  <div className="p-4 bg-neutral-950 border border-neutral-900 rounded-2xl">
                    <span className="text-[10px] text-neutral-400 font-mono uppercase">
                      {lang === "en" ? "Monthly Labor Drag" : "Costo Mensual de Fricción"}
                    </span>
                    <p className="text-2xl font-extrabold text-red-400 mt-1">{result.financialDragFormatted} / mo</p>
                    <p className="text-[10px] text-neutral-500 mt-0.5">
                      {currency === "MXN"
                        ? `≈ $${result.financialDragUsd.toLocaleString()} USD (TC: $${USD_TO_MXN_RATE} MXN)`
                        : `≈ $${(result.financialDragUsd * USD_TO_MXN_RATE).toLocaleString()} MXN`}
                    </p>
                  </div>
                </div>

                {/* Transparent Math & Research Drawer */}
                <div className="border border-neutral-800 rounded-xl bg-neutral-900/50 overflow-hidden">
                  <button
                    onClick={() => setIsMathOpen(!isMathOpen)}
                    className="w-full p-3 text-left text-xs font-mono text-neutral-300 hover:text-white flex justify-between items-center transition-colors"
                  >
                    <span>📊 {lang === "en" ? "How these numbers were calculated" : "Cómo se calcularon estos números"}</span>
                    <span>{isMathOpen ? "▲" : "▼"}</span>
                  </button>

                  {isMathOpen && (
                    <div className="p-3.5 border-t border-neutral-800 space-y-2.5 text-xs text-neutral-300 leading-relaxed bg-black/40">
                      <div className="p-2.5 rounded-lg bg-amber-950/30 border border-amber-800/40 text-amber-200 text-[11px]">
                        <strong className="font-mono uppercase tracking-wider block mb-0.5">
                          {lang === "en" ? "Note: These are estimates" : "Nota: Estos son estimados"}
                        </strong>
                        {lang === "en"
                          ? "All hours lost, monthly financial drag figures, and setup fees shown here are estimates—not guaranteed savings or exact quotes. Actual results depend on your staff workflow, message volume, and how quickly new steps are adopted."
                          : "Todas las horas perdidas, cifras de fricción mensual y costos de instalación aquí mostrados son estimados, no ahorros garantizados ni cotizaciones fijas. Los resultados reales dependen del flujo de tu equipo, volumen de mensajes y adopción."}
                      </div>
                      <p>
                        {lang === "en"
                          ? "Our estimates are modeled specifically for the Imperial Valley & Mexicali economic corridor using conservative regional labor cost baselines and workflow friction studies:"
                          : "Nuestros cálculos están modelados específicamente para el corredor económico del Valle Imperial y Mexicali utilizando costos laborales regionales conservadores y estudios de fricción operativa:"}
                      </p>
                      <div className="space-y-1 font-mono text-[11px] text-neutral-400">
                        <p>• <strong className="text-white">{lang === "en" ? "Industry:" : "Industria:"}</strong> {result.title}</p>
                        <p>• <strong className="text-white">{lang === "en" ? "Team Scale:" : "Equipo:"}</strong> {lang === "en" ? pricingMeta.descEn : pricingMeta.descEs} ({mult}x)</p>
                        <p>• <strong className="text-white">{lang === "en" ? "Drag Benchmark:" : "Fricción:"}</strong> ~15%–20% monthly operating hours on manual paperwork & phone tag (Salesforce / IDC Work About Work benchmarks).</p>
                        <p>• <strong className="text-white">{lang === "en" ? "Labor Baseline:" : "Costo Base:"}</strong> U.S. Bureau of Labor Statistics (BLS) Imperial County supervisory/admin average (~$35 USD/hr).</p>
                        <p>• <strong className="text-white">{lang === "en" ? "Exact Formula:" : "Fórmula Exacta:"}</strong> {result.hoursLost} hrs/mo × $35/hr = ${result.financialDragUsd.toLocaleString()} USD/mo ({formatMoney(result.financialDragUsd)}/mo).</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Custom Micro-Tool Solution Card */}
                <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-2xl space-y-3">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <span className="text-[10px] text-emerald-400 font-mono uppercase">Recommended Micro-Tool</span>
                      <h3 className="text-base font-bold text-white">{result.solutionName}</h3>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-neutral-400 font-mono block">
                        {lang === "en" ? "Est. One-Time Build" : "Costo Único Est."}
                      </span>
                      <span className="text-sm font-extrabold text-white">{result.setupFee}</span>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed">{result.description}</p>

                  <div className="text-[11px] text-neutral-400 font-mono bg-neutral-900/80 p-2.5 rounded-xl border border-neutral-800">
                    <strong>{lang === "en" ? "Ongoing API / Hosting:" : "Costo Mensual API:"}</strong> {result.apiCost}
                  </div>
                </div>

                {/* DIY / Build-It-Yourself Accordion */}
                <div className="border border-neutral-800 rounded-xl bg-neutral-950 overflow-hidden">
                  <button
                    onClick={() => setIsDiyOpen(!isDiyOpen)}
                    className="w-full p-3 text-left text-xs font-mono text-neutral-300 hover:text-white flex justify-between items-center"
                  >
                    <span>🛠️ {lang === "en" ? "Want to build this yourself? View Free DIY Blueprint" : "¿Quieres armarlo tú mismo? Ver Guía DIY Gratis"}</span>
                    <span>{isDiyOpen ? "▲" : "▼"}</span>
                  </button>

                  {isDiyOpen && (
                    <div className="p-3.5 border-t border-neutral-800 space-y-3 text-xs text-neutral-300">
                      <ol className="list-decimal list-inside space-y-1.5 text-[11px]">
                        {activeSolutionData.diyBlueprint.steps.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ol>
                      <div className="p-2.5 rounded-lg bg-neutral-900/90 border border-neutral-800 text-[11px] text-neutral-300 leading-relaxed">
                        <strong className="text-white font-mono block mb-0.5">
                          {lang === "en"
                            ? "Real-World Tech Note: API Fees & Maintenance"
                            : "Nota Técnica: Cuotas de API y Mantenimiento"}
                        </strong>
                        {lang === "en"
                          ? "Even when you build a micro-tool yourself, API usage fees (such as WhatsApp Business messaging, SMS, or document OCR tokens) and ongoing maintenance (updating API keys, fixing broken webhooks when sheet columns change, and checking reliability) are normal parts of running software over time."
                          : "Incluso cuando armas una micro-herramienta tú mismo, las cuotas de uso de API (como mensajes de WhatsApp Business, SMS o tokens OCR) y el mantenimiento continuo (actualizar llaves API, ajustar webhooks si cambian columnas en Sheets y revisar estabilidad) son parte normal de operar software con el tiempo."}
                      </div>
                      <div className="p-2.5 bg-black border border-neutral-800 rounded-lg font-mono text-[11px] text-neutral-400">
                        {activeSolutionData.diyBlueprint.systemPrompt}
                      </div>
                      <button
                        onClick={handleCopyPrompt}
                        className="px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-lg text-[11px] font-bold text-white"
                      >
                        {copiedPrompt
                          ? lang === "en" ? "Copied Prompt! ✓" : "¡Prompt Copiado! ✓"
                          : lang === "en" ? "Copy AI Builder Prompt" : "Copiar Prompt para IA"}
                      </button>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setActiveTab("request")}
                  className="w-full py-3.5 bg-white hover:bg-neutral-200 text-black font-bold rounded-xl shadow-lg transition-all text-xs tracking-wide"
                >
                  {lang === "en" ? "Request Free Demo & 15-Min Call →" : "Solicitar Demo Gratis y Llamada →"}
                </button>
              </div>
            )}

            {activeTab === "request" && (
              <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-2xl space-y-4">
                {formSubmitted ? (
                  <div className="text-center py-6 space-y-3">
                    <div className="text-2xl">✅</div>
                    <h3 className="text-base font-bold text-white">
                      {lang === "en" ? "Request Received!" : "¡Solicitud Recibida!"}
                    </h3>
                    <p className="text-xs text-neutral-400">
                      {lang === "en"
                        ? "I will reach out shortly with a custom walkthrough for your operation. You can also grab a 15-minute slot directly on my calendar below:"
                        : "Me pondré en contacto pronto con una muestra para tu operación. También puedes agendar 15 minutos directo en mi calendario:"}
                    </p>
                    <a
                      href={CALENDAR_BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-5 py-2.5 bg-white text-black font-bold rounded-xl text-xs hover:bg-neutral-200"
                    >
                      {lang === "en" ? "Book 15-Min Call on Google Calendar ↗" : "Agendar Llamada de 15 Min ↗"}
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleRequestSubmit} className="space-y-3">
                    <h3 className="text-sm font-bold text-white">
                      {lang === "en" ? `Get a Free Demo: ${result.solutionName}` : `Solicita Demo Gratis: ${result.solutionName}`}
                    </h3>
                    <input
                      type="text"
                      required
                      placeholder={lang === "en" ? "Your Name" : "Tu Nombre"}
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full p-2.5 bg-black border border-neutral-800 rounded-xl text-xs text-white"
                    />
                    <input
                      type="text"
                      placeholder={lang === "en" ? "Business Name" : "Nombre del Negocio"}
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full p-2.5 bg-black border border-neutral-800 rounded-xl text-xs text-white"
                    />
                    <input
                      type="email"
                      placeholder={lang === "en" ? "Email Address" : "Correo Electrónico"}
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full p-2.5 bg-black border border-neutral-800 rounded-xl text-xs text-white"
                    />
                    <input
                      type="tel"
                      placeholder={lang === "en" ? "Phone / WhatsApp Number" : "Teléfono / WhatsApp"}
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full p-2.5 bg-black border border-neutral-800 rounded-xl text-xs text-white"
                    />
                    <button
                      type="submit"
                      className="w-full py-3 bg-white hover:bg-neutral-200 text-black font-bold rounded-xl text-xs"
                    >
                      {lang === "en" ? "Send Request & View Calendar →" : "Enviar Solicitud y Ver Calendario →"}
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="pt-6 mt-8 border-t border-neutral-900 flex justify-between items-center text-[10px] text-neutral-500 font-mono">
        <span>© 2026 Mayella&apos;s Software Workshop</span>
        <span>Calexico • El Centro • Mexicali</span>
      </footer>
    </div>
  );
}
