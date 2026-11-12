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
  }
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "es">("en");
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

  // External Links
  const RESUME_URL = "https://drive.google.com/file/d/1s8MICQ8nOu_fvWwZiGUTLKdZpZEMiBqT/view?usp=sharing";
  const DEMO_STUDIO_URL = "https://drive.google.com/file/d/1BUlM5emH77rHRnMz1Z5IlC2iRX1sVVBp/view?usp=sharing";

  // Dynamic pricing based on team size & solution lookup
  const getSelectedSolutionKey = () => {
    let indPrefix = "auto";
    if (industry === "logistics") indPrefix = "logistics";
    else if (industry === "ag") indPrefix = "ag";
    else if (industry === "trades") indPrefix = "trades";
    else if (industry === "catering") indPrefix = "catering";

    return `${indPrefix}-${bottleneck}`;
  };

  const activeSolutionKey = getSelectedSolutionKey();
  const activeSolutionData = SOLUTIONS_DATA[activeSolutionKey] || SOLUTIONS_DATA["auto-prob1"];

  const getTeamPricing = () => {
    if (teamSize === "solo") {
      return { setup: `$${activeSolutionData.pricing.solo}`, multiplier: 1, descEn: "Solo / Small Team (1–3 people)", descEs: "Operación Individual (1-3 personas)" };
    } else if (teamSize === "small") {
      return { setup: `$${activeSolutionData.pricing.small}`, multiplier: 2.2, descEn: "Growing Team (4–15 people)", descEs: "Equipo Pequeño / Taller (4-15 personas)" };
    } else {
      return { setup: `$${activeSolutionData.pricing.enterprise}`, multiplier: 4.5, descEn: "Fleet / Enterprise (15+ people)", descEs: "Flota / Empresa (15+ personas)" };
    }
  };

  const pricingMeta = getTeamPricing();
  const mult = pricingMeta.multiplier;

  const getQuizResult = () => {
    return {
      title: activeSolutionData.category,
      solutionName: activeSolutionData.title,
      description: activeSolutionData.turnkeySummary,
      apiCost: activeSolutionData.apiCosts,
      hoursLost: Math.round(30 * mult),
      financialDrag: Math.round(1100 * mult),
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
      monthlyFinancialImpact: result.financialDrag,
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
        `Estimated monthly impact: $${result.financialDrag}`,
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
            <h1 className="text-sm font-bold tracking-tight text-white leading-none">Independent Software Workshop</h1>
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
            <button onClick={() => setLang("en")} className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${lang === "en" ? "bg-white text-black" : "text-neutral-400"}`}>EN</button>
            <button onClick={() => setLang("es")} className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${lang === "es" ? "bg-white text-black" : "text-neutral-400"}`}>ES</button>
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
              <h2 className="text-xl font-bold text-white">Mayella — Independent Software Workshop</h2>
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
                { id: "catering", label: lang === "en" ? "Catering & Food Service" : "Catering y Servicios de Alimentos" }
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
                { id: "solo", label: lang === "en" ? "Solo (1–3)" : "Solo (1-3)" },
                { id: "small", label: lang === "en" ? "Growing (4–15)" : "Pequeño (4-15)" },
                { id: "enterprise", label: lang === "en" ? "Enterprise (15+)" : "Flota (15+)" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setTeamSize(item.id)}
                  className={`p-2.5 rounded-xl border text-center text-xs font-semibold transition-all ${
                    teamSize === item.id ? "bg-neutral-900 border-white text-white" : "bg-neutral-950 border-neutral-900 text-neutral-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="space-y-1">
              <h2 className="text-base font-bold text-white">
                {lang === "en" ? "3. What slows you down the most?" : "3. ¿Qué es lo que más te quita tiempo?"}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {headaches.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setBottleneck(item.id)}
                  className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all ${
                    bottleneck === item.id ? "bg-neutral-900 border-white text-white" : "bg-neutral-950 border-neutral-900 text-neutral-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => setView("results")}
                className="w-full py-3.5 bg-white hover:bg-neutral-200 text-black font-bold rounded-xl shadow-lg transition-all text-xs tracking-wide"
              >
                {lang === "en" ? "Calculate My ROI & Solution →" : "Calcular mi ROI y Solución →"}
              </button>
            </div>
          </div>
        )}

        {/* RESULTS VIEW */}
        {view === "results" && (
          <div className="space-y-6 max-w-md mx-auto w-full py-2 animate-fadeIn">
            
            {/* Tabs Header */}
            <div className="flex bg-neutral-900 p-1 rounded-xl border border-neutral-800">
              <button
                onClick={() => setActiveTab("savings")}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeTab === "savings" ? "bg-white text-black shadow" : "text-neutral-400 hover:text-white"
                }`}
              >
                {lang === "en" ? "1. Your Operational Leaks" : "1. Tus Fugas Operativas"}
              </button>
              <button
                onClick={() => setActiveTab("request")}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeTab === "request" ? "bg-white text-black shadow" : "text-neutral-400 hover:text-white"
                }`}
              >
                {lang === "en" ? "2. Request Solution" : "2. Solicitar Solución"}
              </button>
            </div>

            {/* TAB 1: SAVINGS & SOLUTION BREAKDOWN */}
            {activeTab === "savings" && (
              <div className="space-y-4 animate-fadeIn">
                <div className="p-4 bg-neutral-950 border border-neutral-900 rounded-2xl space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">{result.title}</span>
                      <h3 className="text-base font-bold text-white">{result.solutionName}</h3>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {result.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-900 text-xs">
                    <div className="bg-neutral-900/60 p-2.5 rounded-xl border border-neutral-800/50">
                      <p className="text-[10px] text-neutral-400 font-mono">
                        {lang === "en" ? "Est. Hours Wasted / Mo" : "Horas Pérdidas / Mes"}
                      </p>
                      <p className="text-sm font-bold text-red-400 mt-0.5">~{result.hoursLost} hrs</p>
                    </div>
                    <div className="bg-neutral-900/60 p-2.5 rounded-xl border border-neutral-800/50">
                      <p className="text-[10px] text-neutral-400 font-mono">
                        {lang === "en" ? "Monthly Financial Drag" : "Impacto Financiero / Mes"}
                      </p>
                      <p className="text-sm font-bold text-red-400 mt-0.5">${result.financialDrag} USD</p>
                    </div>
                  </div>

                  {/* Calculation Breakdown & Math Explanation with BLS / IDC References */}
                  <div className="pt-2 border-t border-neutral-900">
                    <button
                      onClick={() => setIsMathOpen(!isMathOpen)}
                      className="w-full flex justify-between items-center text-[11px] font-mono text-neutral-400 hover:text-white py-1 transition-all"
                    >
                      <span>{lang === "en" ? "📊 How we calculate these numbers" : "📊 Cómo calculamos estos números"}</span>
                      <span>{isMathOpen ? "▲" : "▼"}</span>
                    </button>

                    {isMathOpen && (
                      <div className="p-3 mt-2 bg-neutral-900/80 border border-neutral-800 rounded-xl space-y-2 text-[11px] text-neutral-300">
                        <p>
                          {lang === "en"
                            ? `• Team Multiplier: Based on your team size ("${pricingMeta.descEn}"), your operational scale multiplier is set at ${mult}x.`
                            : `• Multiplicador de Equipo: Basado en el tamaño de tu equipo ("${pricingMeta.descEs}"), el multiplicador de escala operativa es de ${mult}x.`}
                        </p>
                        <p>
                          {lang === "en"
                            ? `• Administrative Drag Factor: ~15% to 20% of monthly operating hours spent on manual paperwork, phone tag, and duplicate data entry (referenced from small business workflow efficiency benchmarks and Salesforce Service Cloud / IDC "Work About Work" operational studies).`
                            : `• Factor de Arrastre Administrativo: ~15% al 20% de las horas operativas mensuales gastadas en papeleo manual, llamadas y captura duplicada (referenciado de estudios de eficiencia de Salesforce e IDC).`}
                        </p>
                        <p>
                          {lang === "en"
                            ? `• Labor Cost Benchmark: U.S. Bureau of Labor Statistics (BLS) regional wage baselines & loaded supervisory/administrative cost averages (~$35/hr loaded cost for coordination and management time in border and agricultural corridors like Imperial County).`
                            : `• Referencia de Costo Laboral: Basado en datos de la Oficina de Estadísticas Laborales de EE. UU. (BLS) y promedios de costos administrativos (~$35/hr en la región fronteriza del Valle Imperial).`}
                        </p>
                        <p className="font-mono text-emerald-400 pt-1">
                          {lang === "en"
                            ? `• Formula Used: ~${result.hoursLost} hrs lost/mo × $35/hr local operational drag baseline = ~$${result.financialDrag}/mo economic impact.`
                            : `• Fórmula Usada: ~${result.hoursLost} hrs perdidas/mes × $35/hr base local = ~$${result.financialDrag}/mes impacto económico.`}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="pt-1 text-[11px] text-neutral-400 flex items-center justify-between font-mono">
                    <span>{lang === "en" ? "Platform API Costs:" : "Costos API:"}</span>
                    <span className="text-white">{result.apiCost}</span>
                  </div>
                </div>

                {/* DIY Blueprint Accordion Toggle with API Maintenance Note */}
                <div className="border border-neutral-900 rounded-2xl bg-neutral-950 overflow-hidden">
                  <button
                    onClick={() => setIsDiyOpen(!isDiyOpen)}
                    className="w-full p-3.5 flex justify-between items-center text-left text-xs font-bold text-neutral-200 hover:bg-neutral-900/50 transition-all"
                  >
                    <span>{lang === "en" ? "🛠️ Want to build this yourself? View DIY Blueprint" : "🛠️ ¿Quieres construirlo tú mismo? Ver Guía DIY"}</span>
                    <span className="text-neutral-400">{isDiyOpen ? "▲" : "▼"}</span>
                  </button>

                  {isDiyOpen && (
                    <div className="p-4 border-t border-neutral-900 space-y-3 text-xs text-neutral-300 bg-black/40">
                      <p className="text-[11px] text-neutral-400">
                        {lang === "en" ? "Step-by-step architecture to build this solution on your own:" : "Arquitectura paso a paso para construir esta solución por tu cuenta:"}
                      </p>
                      <ul className="space-y-2">
                        {activeSolutionData.diyBlueprint.steps.map((step, idx) => (
                          <li key={idx} className="flex gap-2 items-start">
                            <span className="font-mono text-emerald-400 font-bold">{idx + 1}.</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>

                      {/* API & System Maintenance Notice */}
                      <div className="p-2.5 bg-neutral-900/80 border border-neutral-800 rounded-xl text-[11px] text-neutral-400 space-y-1">
                        <span className="font-bold text-white">⚠️ Important Maintenance Note on APIs:</span>
                        <p>
                          {lang === "en"
                            ? "While custom web tools eliminate monthly platform subscriptions, external communication APIs (such as WhatsApp/Twilio messaging or AI OCR vision tokens) require active management. API provider rate limits, webhook endpoints, or token pricing updates may occasionally require minor code maintenance to keep automated notifications running smoothly."
                            : "Aunque las herramientas web personalizadas eliminan las suscripciones mensuales de plataforma, las APIs de comunicación externa (como WhatsApp/Twilio o tokens de IA) requieren mantenimiento periódico ante actualizaciones de proveedores y endpoints."}
                        </p>
                      </div>

                      <div className="pt-2">
                        <p className="text-[10px] font-mono text-neutral-400 mb-1">
                          {lang === "en" ? "AI Vibe Coding Prompt for Cursor / Gemini:" : "Prompt de Vibe Coding para Cursor / Gemini:"}
                        </p>
                        <div className="p-2.5 bg-neutral-900 border border-neutral-800 rounded-xl font-mono text-[11px] text-neutral-200 select-all">
                          {activeSolutionData.diyBlueprint.systemPrompt}
                        </div>
                        <button
                          onClick={handleCopyPrompt}
                          className="mt-2 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-[10px] font-mono transition-all"
                        >
                          {copiedPrompt ? "✓ Copied!" : "Copy Prompt 📋"}
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Dashboard of Product Demos Link */}
                <div className="p-3 bg-neutral-950 border border-neutral-900 rounded-xl flex items-center justify-between text-xs">
                  <span className="text-neutral-400">{lang === "en" ? "Want to see some of the tech live?" : "¿Quieres probar la tecnología en vivo?"}</span>
                  <a
                    href={DEMO_STUDIO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-white hover:text-emerald-400 flex items-center gap-1 transition-all"
                  >
                    <span>View Dashboard of Product Demos</span>
                  </a>
                </div>

                <div className="pt-1">
                  <button
                    onClick={() => setActiveTab("request")}
                    className="w-full py-3.5 bg-white hover:bg-neutral-200 text-black font-bold rounded-xl shadow-lg transition-all text-xs tracking-wide text-center"
                  >
                    {lang === "en" ? "Want us to build it? Request Free Demo & Quote →" : "¿Quieres que lo construyamos? Solicitar Demo y Cotización →"}
                  </button>
                </div>
              </div>
            )}

            {/* TAB 2: REQUEST FORM */}
            {activeTab === "request" && (
              <div className="space-y-4 animate-fadeIn">
                {!formSubmitted ? (
                  <form onSubmit={handleRequestSubmit} className="space-y-3.5 p-4 bg-neutral-950 border border-neutral-900 rounded-2xl">
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-white">
                        {lang === "en" ? "Request Free Tailored Build and Demo Call" : "Solicitar Demo y Llamada a la Medida"}
                      </h3>
                      <p className="text-[11px] text-neutral-400">
                        {lang === "en"
                          ? "Deploy This Solution For Your Operation. Custom-built app connected directly to your Google Sheet for a one-time fee of $450. No monthly platform subscriptions."
                          : "Despliega Esta Solución Para tu Operación. Aplicación a la medida conectada a tu Google Sheet por un pago único de $450. Sin suscripciones mensuales."}
                      </p>
                    </div>

                    {/* Cost & Service Breakdown Card with API Costs included */}
                    <div className="p-3 bg-neutral-900/90 border border-neutral-800 rounded-xl space-y-2 text-[11px]">
                      <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                        {lang === "en" ? "Price & Service Breakdown" : "Desglose de Costos"}
                      </span>
                      <div className="space-y-1 text-neutral-300">
                        <div className="flex justify-between border-b border-neutral-800/60 pb-1">
                          <span>{lang === "en" ? "• Custom Interface & App Build:" : "• Interfaz y App Móvil a la Medida:"}</span>
                          <span className="font-mono text-white">$350</span>
                        </div>
                        <div className="flex justify-between border-b border-neutral-800/60 pb-1">
                          <span>{lang === "en" ? "• Google Sheet & Webhook Integration:" : "• Integración con Google Sheets y Webhooks:"}</span>
                          <span className="font-mono text-white">$100</span>
                        </div>
                        <div className="flex justify-between border-b border-neutral-800/60 pb-1 text-neutral-400">
                          <span>{lang === "en" ? "• Platform Maintenance & API Hosting:" : "• Hosting y Mantenimiento de API:"}</span>
                          <span className="font-mono text-emerald-400">{result.apiCost}</span>
                        </div>
                        <div className="flex justify-between pt-1 font-bold text-white">
                          <span>{lang === "en" ? "Total Setup Cost:" : "Costo Total de Despliegue:"}</span>
                          <span className="font-mono text-emerald-400">$450 USD</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2.5 pt-1">
                      <div>
                        <label className="block text-[10px] font-mono text-neutral-400 mb-1">
                          {lang === "en" ? "Your Name / Contact" : "Tu Nombre / Contacto"}
                        </label>
                        <input
                          type="text"
                          required
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder={lang === "en" ? "e.g., Carlos Mendoza" : "ej., Carlos Mendoza"}
                          className="w-full px-3 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-xs text-white focus:outline-none focus:border-white transition-all"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[10px] font-mono text-neutral-400 mb-1">Email</label>
                          <input
                            type="email"
                            value={clientEmail}
                            onChange={(e) => setClientEmail(e.target.value)}
                            placeholder="carlos@taller.com"
                            className="w-full px-3 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-xs text-white focus:outline-none focus:border-white transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-mono text-neutral-400 mb-1">
                            {lang === "en" ? "Phone (WhatsApp)" : "Teléfono (WhatsApp)"}
                          </label>
                          <input
                            type="tel"
                            value={clientPhone}
                            onChange={(e) => setClientPhone(e.target.value)}
                            placeholder="+52 686..."
                            className="w-full px-3 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-xs text-white focus:outline-none focus:border-white transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono text-neutral-400 mb-1">
                          {lang === "en" ? "Business Name (Optional)" : "Nombre del Negocio (Opcional)"}
                        </label>
                        <input
                          type="text"
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                          placeholder={lang === "en" ? "e.g., Taller Diesel Mexicali" : "ej., Taller Diesel Mexicali"}
                          className="w-full px-3 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-xs text-white focus:outline-none focus:border-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 bg-white hover:bg-neutral-200 text-black font-bold rounded-xl shadow-lg transition-all text-xs tracking-wide text-center"
                      >
                        {lang === "en" ? "Request Free Tailored Build and Demo Call" : "Solicitar Demo y Llamada a la Medida"}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="p-6 bg-neutral-950 border border-neutral-900 rounded-2xl text-center space-y-3">
                    <div className="w-10 h-10 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-base">
                      ✓
                    </div>
                    <h3 className="text-base font-bold text-white">
                      {lang === "en" ? "Request Received Successfully!" : "¡Solicitud Recibida con Éxito!"}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {lang === "en"
                        ? "Your details have been logged. I will review your operational bottleneck and reach out via WhatsApp / Email within 24 hours to schedule your custom demo and setup."
                        : "Tus datos han sido registrados. Revisaré tu caso y me pondré en contacto vía WhatsApp / Correo en menos de 24 horas para coordinar tu demo a la medida."}
                    </p>
                    <button
                      onClick={resetApp}
                      className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-xl text-xs font-bold text-white transition-all mt-2"
                    >
                      {lang === "en" ? "Back to Home" : "Volver al Inicio"}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="py-4 border-t border-neutral-900 mt-8 flex justify-between items-center text-[10px] text-neutral-400 font-mono">
        <span>© 2026 AITech Workshop</span>
        <span className="text-neutral-400">Imperial Valley / Mexicali Corridor</span>
      </footer>

    </div>
  );
}