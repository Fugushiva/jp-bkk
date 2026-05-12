"use client";

import { useState, useEffect, useCallback } from "react";

export interface CookieConsent {
  necessary: true;
  analytics: boolean;
  timestamp: string;
}

const STORAGE_KEY = "jp-cookie-consent";

function readConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookieConsent;
    if (typeof parsed.analytics !== "boolean") return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeConsent(analytics: boolean): CookieConsent {
  const consent: CookieConsent = {
    necessary: true,
    analytics,
    timestamp: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  return consent;
}

export function useCookieConsent() {
  const [consent, setConsentState] = useState<CookieConsent | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setConsentState(readConsent());
    setHydrated(true);
  }, []);

  const setConsent = useCallback((analytics: boolean) => {
    const saved = writeConsent(analytics);
    setConsentState(saved);
  }, []);

  const hasConsented = hydrated && consent !== null;

  return { consent, setConsent, hasConsented, hydrated };
}
