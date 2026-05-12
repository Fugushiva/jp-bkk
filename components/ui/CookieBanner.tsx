"use client";

import { useEffect, useState, useCallback } from "react";
import { useCookieConsent } from "@/hooks/useCookieConsent";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

declare global {
  interface Window {
    __openCookieSettings?: () => void;
  }
}

export function CookieBanner() {
  const { hasConsented, hydrated, setConsent } = useCookieConsent();
  const [visible, setVisible] = useState(false);
  const [customizeOpen, setCustomizeOpen] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(false);

  useEffect(() => {
    if (hydrated && !hasConsented) {
      setVisible(true);
    }
  }, [hydrated, hasConsented]);

  const openSettings = useCallback(() => {
    setCustomizeOpen(true);
    setVisible(true);
  }, []);

  useEffect(() => {
    window.__openCookieSettings = openSettings;
    return () => {
      delete window.__openCookieSettings;
    };
  }, [openSettings]);

  const handleAcceptAll = () => {
    setConsent(true);
    setVisible(false);
    setCustomizeOpen(false);
  };

  const handleRefuseAll = () => {
    setConsent(false);
    setVisible(false);
    setCustomizeOpen(false);
  };

  const handleSaveCustom = () => {
    setConsent(analyticsChecked);
    setVisible(false);
    setCustomizeOpen(false);
  };

  if (!hydrated || !visible) return null;

  return (
    <>
      {/* Fixed bottom banner */}
      <div
        role="dialog"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-desc"
        className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--color-neutral-200)] bg-white shadow-lg"
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1">
              <p
                id="cookie-banner-title"
                className="text-sm font-semibold text-[var(--color-neutral-900)]"
              >
                We use cookies
              </p>
              <p
                id="cookie-banner-desc"
                className="mt-1 text-xs text-[var(--color-neutral-600)]"
              >
                We use necessary cookies to make our site work. With your
                consent, we may also use analytics cookies to improve your
                experience.{" "}
                <a
                  href="/cookies-policy"
                  className="underline underline-offset-2 hover:text-[var(--color-brand-primary)]"
                >
                  Learn more
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:flex-nowrap">
              <Button
                variant="outline"
                size="sm"
                onClick={handleRefuseAll}
                className="flex-1 sm:flex-none"
              >
                Refuse all
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCustomizeOpen(true)}
                className="flex-1 sm:flex-none"
              >
                Customize
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleAcceptAll}
                className="flex-1 sm:flex-none"
              >
                Accept all
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Customize dialog */}
      <Dialog open={customizeOpen} onOpenChange={setCustomizeOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Cookie preferences</DialogTitle>
            <DialogDescription>
              Choose which cookies you allow. Necessary cookies cannot be
              disabled as they are required for the site to function.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            {/* Necessary — locked */}
            <div className="flex items-start gap-3 rounded-lg border border-[var(--color-neutral-200)] p-3">
              <Checkbox
                id="necessary"
                checked
                disabled
                aria-disabled="true"
                className="mt-0.5"
              />
              <div className="flex-1">
                <Label
                  htmlFor="necessary"
                  className="text-sm font-semibold text-[var(--color-neutral-900)]"
                >
                  Necessary cookies
                  <span className="ml-2 text-xs font-normal text-[var(--color-neutral-500)]">
                    Always active
                  </span>
                </Label>
                <p className="mt-1 text-xs text-[var(--color-neutral-600)]">
                  Required for language preferences and cookie consent memory.
                </p>
              </div>
            </div>

            {/* Analytics — optional */}
            <div className="flex items-start gap-3 rounded-lg border border-[var(--color-neutral-200)] p-3">
              <Checkbox
                id="analytics"
                checked={analyticsChecked}
                onCheckedChange={(checked) =>
                  setAnalyticsChecked(checked === true)
                }
                className="mt-0.5"
              />
              <div className="flex-1">
                <Label
                  htmlFor="analytics"
                  className="text-sm font-semibold text-[var(--color-neutral-900)]"
                >
                  Analytics cookies
                </Label>
                <p className="mt-1 text-xs text-[var(--color-neutral-600)]">
                  Help us understand how visitors use our site (Google
                  Analytics). No personal data is shared with advertisers.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
            <Button variant="outline" size="sm" onClick={handleRefuseAll}>
              Refuse all
            </Button>
            <Button variant="outline" size="sm" onClick={handleSaveCustom}>
              Save preferences
            </Button>
            <Button variant="outline" size="sm" onClick={handleAcceptAll}>
              Accept all
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
