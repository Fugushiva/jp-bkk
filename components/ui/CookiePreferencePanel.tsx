"use client";

import { useState, useEffect } from "react";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function CookiePreferencePanel() {
  const { consent, setConsent, hydrated } = useCookieConsent();
  const [analyticsChecked, setAnalyticsChecked] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (hydrated && consent) {
      setAnalyticsChecked(consent.analytics);
    }
  }, [hydrated, consent]);

  const handleSave = () => {
    setConsent(analyticsChecked);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleReset = () => {
    setAnalyticsChecked(false);
    setConsent(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  if (!hydrated) return null;

  return (
    <div className="mt-8 rounded-lg border border-[var(--color-neutral-200)] p-6">
      <h2 className="font-heading mb-4 text-xl font-bold text-[var(--color-neutral-900)]">
        Manage your preferences
      </h2>

      <div className="space-y-4">
        {/* Necessary — locked */}
        <div className="flex items-start gap-3 rounded-lg border border-[var(--color-neutral-200)] bg-[var(--color-neutral-50)] p-3">
          <Checkbox
            id="pref-necessary"
            checked
            disabled
            aria-disabled="true"
            className="mt-0.5"
          />
          <div>
            <Label
              htmlFor="pref-necessary"
              className="text-sm font-semibold text-[var(--color-neutral-900)]"
            >
              Necessary cookies
              <span className="ml-2 text-xs font-normal text-[var(--color-neutral-500)]">
                Always active
              </span>
            </Label>
            <p className="mt-1 text-xs text-[var(--color-neutral-600)]">
              Required for language preferences and cookie consent memory. Cannot be
              disabled.
            </p>
          </div>
        </div>

        {/* Analytics — optional */}
        <div className="flex items-start gap-3 rounded-lg border border-[var(--color-neutral-200)] p-3">
          <Checkbox
            id="pref-analytics"
            checked={analyticsChecked}
            onCheckedChange={(checked) => setAnalyticsChecked(checked === true)}
            className="mt-0.5"
          />
          <div>
            <Label
              htmlFor="pref-analytics"
              className="text-sm font-semibold text-[var(--color-neutral-900)]"
            >
              Analytics cookies
            </Label>
            <p className="mt-1 text-xs text-[var(--color-neutral-600)]">
              Help us understand how visitors use our site (Google Analytics). No personal
              data is shared with advertisers.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Button variant="outline" size="sm" onClick={handleSave}>
          Save preferences
        </Button>
        <Button variant="outline" size="sm" onClick={handleReset}>
          Reset to defaults
        </Button>
      </div>

      {saved && (
        <p
          role="status"
          aria-live="polite"
          className="mt-3 text-xs text-[var(--color-neutral-600)]"
        >
          ✓ Preferences saved.
        </p>
      )}
    </div>
  );
}
